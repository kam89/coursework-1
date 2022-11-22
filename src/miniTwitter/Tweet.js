import "./Tweet.css";

const Tweet = (props) => {
  const {
    username,
    content,
    deleteTweet,
  } = props;

  return (
    <div className="Tweet">
      <strong>{username}</strong>
      <p>{content}</p>
      <button onClick={deleteTweet}>Delete</button>
    </div>
  );
};

export default Tweet;