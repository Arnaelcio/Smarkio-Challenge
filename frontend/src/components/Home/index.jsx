import React, { useEffect, useState } from "react";
import { api } from "../../services/requestsDb";

import { CreateComment } from "../CreateComment";
import { ListComments } from "../ListComments";
import { PopUpListen } from "../PopUpListen";

import "./styles.css";

export function Home() {
  const [comments, setComments] = useState("");
  const [spanTextToSpeechShow, setSpanTextToSpeechShow] = useState("");
  const [textToSpeechShow, setTextToSpeechShow] = useState(false);

  useEffect(() => {
    const getCommnets = async () => {
      const responseDb = await api.get("/comments").then((res) => {
        return res.data;
      });
      setComments(responseDb);
    };

    getCommnets();
  }, []);
  
  const PopUpListenPage = () => {
    setTextToSpeechShow(!textToSpeechShow);
  };


  return (
    <div className="home">
      <CreateComment setComments={ setComments } />
      <hr></hr>
      <ListComments 
        comments={ comments } 
        setSpanTextToSpeechShow={ setSpanTextToSpeechShow } 
        setTextToSpeechShow={ setTextToSpeechShow }
      />

      {textToSpeechShow ? (
        <PopUpListen
          comment={spanTextToSpeechShow}
          onClick={() => PopUpListenPage()}
        />
      ) : null}
    </div>
  );
}