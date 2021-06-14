import React, { createContext, useEffect, useState } from "react";
import db from "../services/requestsDb";
import song from "../audios/audio.wav";

// import song from '../audios/';

export const DataContext = createContext();

function DataProvider(props) {
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
    setComments(responseDb);
  };
  const listenComment = (index, comment, e) => {
    const res = db.post("/watson", { index, comment }).then((res) => {
      return res.data;
    });
    setSpanTextToSpeechShow(comment);
    setTtextToSpeechShow(true);
    return res;
  };

  const PopUpListenPage = () => {
    setTtextToSpeechShow(!textToSpeechShow);
  };

  useEffect(() => {
    console.log(`audio: ${audio}`);
    setAudio(song);
    const audio2 = document.querySelector("#audio-content");
    if (audio2 !== null) {
      console.log(`song : ${song}`);
      return audio2.play();
    }
  }, [audio]);

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
