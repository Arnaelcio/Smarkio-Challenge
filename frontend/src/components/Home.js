import React, { useContext } from "react";
import "./css/Home.css";
import { DataContext } from "../context/Context";
import song from "../audios/audio.wav";
import PopUpListen from "../components/popUpListen";

function Home() {
  const {
    textAreaValue,
    setTextAreaValue,
    inputNameValue,
    setInputNameValue,
    handleClickComment,
    listenComment,
    comments,
    audio,
    textToSpeechShow,
    spanTextToSpeechShow,
    PopUpListenPage,
  } = useContext(DataContext);

  return (
    <div className="home">
      <div className="comment-box">
        <div className="text-box">
          <h4>Comentário</h4>
          <input
            placeholder="Digite seu Nome"
            onChange={(e) => setInputNameValue(e.target.value)}
            value={inputNameValue}
          />
          <textarea
            placeholder="Digite seu comentário"
            onChange={(e) => setTextAreaValue(e.target.value)}
            value={textAreaValue}
          ></textarea>
          <button
            onClick={() => handleClickComment(inputNameValue, textAreaValue)}
          >
            Cadastrar
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="comments-view">
        <h3>Comentários: </h3>
        {comments &&
          comments.map(({ name, comment }, index) => {
            return (
              <div key={index} className="comment-view">
                <h4>{name}</h4>
                <p>{comment}</p>
                <button onClick={(e) => listenComment(index, comment, e)}>
                  Ouvir
                </button>
                <audio id="audio-content">
                  <source src={song} />
                </audio>
              </div>
            );
          })}
      </div>
      {textToSpeechShow ? (
        <PopUpListen
          comment={spanTextToSpeechShow}
          onClick={() => PopUpListenPage()}
        ></PopUpListen>
      ) : null}
    </div>
  );
}

export default Home;
