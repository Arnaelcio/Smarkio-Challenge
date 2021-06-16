export function Comment({ name, comment, listenComment }) {
  return (
    <div className="comment-view">
      <h4>{name}</h4>
      <p>{comment}</p>
      <button onClick={() => listenComment(comment)}>
        Ouvir
      </button>
    </div>
  )
}