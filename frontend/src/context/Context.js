import React, { createContext, useEffect, useState } from "react";
import db from "../services/requestsDb";

export const DataContext = createContext();

function DataProvider(props) {
  const importAll = (r) => {
    return r.keys().map(r);
  };

  const audios = importAll(
    require.context(`${__dirname}../../../audios`, false, /\.(mp3|mpeg3|wav)$/)
  );

  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputNameValue, setInputNameValue] = useState("");
  const [comments, setComments] = useState("");
  const [textToSpeechShow, setTtextToSpeechShow] = useState(false);
  const [spanTextToSpeechShow, setSpanTextToSpeechShow] = useState("");

  useEffect(() => {
    const getCommnets = async () => {
      const responseDb = await db.get("/comments").then((res) => {
        return res.data;
      });
      setComments(responseDb);
    };

    getCommnets();
  }, []);

  const handleClickComment = async (name, comment) => {
    await db.post("/comments", { name, comment });
    setTextAreaValue("");
    setInputNameValue("");
    const responseDb = await db.get("/comments").then((res) => {
      return res.data;
    });
    db.post("/watson", {
      id: `${responseDb[0].id}`,
      comment: `${responseDb[0].comment}`,
    }).then((res) => {
      return res.data;
    });
    setTimeout(() => {
      setComments(responseDb);
    }, 3000);
  };

  const listenComment = (id, comment, e) => {
    const haveAudio = audios.find((audio) =>
      audio.default.includes(`/static/media/${id}`)
    );
    console.log(comment);
    if (haveAudio !== undefined) {
      setPlay(true);
      setAudio(haveAudio.default);
    }

    setTtextToSpeechShow(true);
    setSpanTextToSpeechShow(comment);
  };

  const PopUpListenPage = () => {
    setPlay(false);
    setTtextToSpeechShow(!textToSpeechShow);
  };

  const { children } = props;
  return (
    <DataContext.Provider
      value={{
        textAreaValue,
        setTextAreaValue,
        inputNameValue,
        comments,
        setInputNameValue,
        handleClickComment,
        listenComment,
        audio,
        play,
        setAudio,
        textToSpeechShow,
        setTtextToSpeechShow,
        spanTextToSpeechShow,
        PopUpListenPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
