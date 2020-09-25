import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      // .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={user.photoURL}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      <Post
        // key={id}
        profilePic="https://yttalk.com/data/attachments/3/3743-f5c6e694a2c496bb83f5beeb312b269d.jpg"
        message="heeey"
        timestamp="2 sec ago"
        username="kacper"
        image="https://sportshub.cbsistatic.com/i/r/2020/09/24/addaf903-788c-4646-95a6-b7f9952a3008/thumbnail/450x253/de7083809f2b51082b69aa74a5b138c8/lebron-james-1.jpg"
      />
      <Post
        // key={id}
        profilePic="https://yttalk.com/data/attachments/3/3743-f5c6e694a2c496bb83f5beeb312b269d.jpg"
        message="heeey"
        timestamp="2 sec ago"
        username="kacper"
        image="https://sportshub.cbsistatic.com/i/r/2020/09/24/addaf903-788c-4646-95a6-b7f9952a3008/thumbnail/450x253/de7083809f2b51082b69aa74a5b138c8/lebron-james-1.jpg"
      />
    </div>
  );
}

export default Feed;
