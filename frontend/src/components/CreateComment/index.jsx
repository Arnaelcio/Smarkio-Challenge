import { useState } from "react"

import { api } from "../../services/requestsDb"

export function CreateComment({ setComments }) {
  const [inputNameValue, setInputNameValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleClickComment = async (name, comment) => {
    await api.post("/comments", { name, comment });
    setTextAreaValue("");
    setInputNameValue("");
    const responseDb = await api.get("/comments").then((res) => {
      return res.data;
    });
    setComments(responseDb);
  };

  return (
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
  )
}