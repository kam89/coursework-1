import { useState } from "react";
import ComposeTweet from './ComposeTweet';
import Tweet from './Tweet';

const startingTweets = [
  {
    username: "Fred",
    content: "What's everyone doing on the long weekend?",
  },
  {
    username: "Sally",
    content: "I am so done with today, I can't even.",
  },
  {
    username: "Fred",
    content: "Cute pupper!!! Hi fren!",
  },
];


function MiniTwitter() {
  const [tweets, setTweets] = useState(startingTweets);

  const addTweet = (newTweet) => {
    setTweets({ tweets: [newTweet, ...tweets] });
  };

  const deleteTweet = (index) => {
    setTweets({
      tweets: [
        ...tweets.slice(0, index),
        ...tweets.slice(index + 1),
      ],
    });
  };


  return (
    <div>
      <h1>Mini Twitter</h1>
      <ComposeTweet addNewPost={addTweet} />
      {tweets.map((tweet, index) => {
        return (
          <Tweet
            key={index}
            username={tweet.username}
            content={tweet.content}
            deleteTweet={() => {
              deleteTweet(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default MiniTwitter;