import { api } from "../../services/requestsDb";

import { Comment } from "./Comment";

import song from "../../audios/audio.wav";

export function ListComments({ comments, setSpanTextToSpeechShow, setTextToSpeechShow }) {  
  const listenComment = async (comment) => {
    await api.post("/watson", { comment });
      setSpanTextToSpeechShow(comment);
      setTextToSpeechShow(true);    
  };

  return (
    <div className="comments-view">
      <h3>Comentários: </h3>
      {comments &&
        comments.map(({ name, comment }) => {
          return (
            <Comment 
              key={ comment }
              name={ name } 
              comment={ comment }
              listenComment={ listenComment }
            />
          );
        })}
        <audio src={ song } autoPlay />
    </div>
  )
}