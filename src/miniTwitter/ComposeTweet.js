import { useState } from "react";

function ComposeTweet(props) {
  const {
    addNewPost
  } = props;
  console.log(props);
  const [newTweet, setNewTweet] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value.slice(0, 140);
    setNewTweet({ newTweet: newValue });
  };

  const handlePost = () => {
    // What do we do here??
    addNewPost({
      username: "Unknown",
      content: newTweet,
    });
    setNewTweet({ newTweet: "" });
  };


  return (
    <div>
      <p>{newTweet}</p>
      <input
        type="text"
        value={newTweet}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handlePost}>Post Tweet</button>
    </div>
  );
}


export default ComposeTweet;