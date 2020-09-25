import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/98438484/original/b6d75e78a1805b5f44e2326556787bdae730c6ba/custom-made-youtube-avatar.jpg"
        title="Johny Dee"
      />
      <Story
        image="https://a.espncdn.com/combiner/i?img=/photo/2020/0608/r706321_1296x729_16-9.jpg"
        profileSrc="https://ocdn.eu/zapytaj/MDA_/114f3485-6622-4b60-f3bc-fb0072e23275.jpeg"
        title="Jacob joe"
      />
      <Story
        image="https://cdn.getyourguide.com/img/tour/5ac513c518061.jpeg/146.jpg"
        profileSrc=""
        title="Thomas New"
      />
      <Story
        image="https://cf.bstatic.com/images/hotel/max500/254/254105409.jpg"
        profileSrc="https://i.pinimg.com/originals/ec/80/34/ec8034b205663970df869c0d3a55de0c.jpg"
        title="Juicy stuff"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/213px-ISO_C%2B%2B_Logo.svg.png"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/213px-ISO_C%2B%2B_Logo.svg.png"
        title="Hello C++"
      />
    </div>
  );
}

export default StoryReel;
