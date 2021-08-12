const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_text:
      "A bunch of stuff to say about Donec posuere metus vitae ipsum and other things",
    // post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_text:
      "A bunch of stuff to say about Morbi non quam nec dui luctus rutrum and other things",
    // post_url: "https://nasa.gov/donec.json",
    user_id: 8,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_text:
      "A bunch of stuff to say about Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue and other things",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    post_text: "A bunch of stuff to say about Nunc purus and other things",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    post_text:
      "A bunch of stuff to say about Pellentesque eget nunc and other things",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    post_text:
      "A bunch of stuff to say about Lorem ipsum dolor sit amet, consectetuer adipiscing elit and other things",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_text:
      "A bunch of stuff to say about In hac habitasse platea dictumst and other things",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_text:
      "A bunch of stuff to say about Morbi non quam nec dui luctus rutrum and other things",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    post_text: "A bunch of stuff to say about Duis ac nibh and other things",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_text:
      "A bunch of stuff to say about Curabitur at ipsum ac tellus semper interdum and other things",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_text:
      "A bunch of stuff to say about In hac habitasse platea dictumst and other things",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    post_text:
      "A bunch of stuff to say about Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo and other things",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    post_text: "A bunch of stuff to say about Donec dapibus and other things",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    post_text: "A bunch of stuff to say about Nulla tellus and other things",
    user_id: 3,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    post_text:
      "A bunch of stuff to say about Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo and other things",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    post_text:
      "A bunch of stuff to say about Vestibulum ante ipsum primis and other things",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    post_text:
      "A bunch of stuff to say about In hac habitasse platea dictumst and other things",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    post_text: "A bunch of stuff to say about Etiam justo and other things",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    post_text:
      "A bunch of stuff to say about Nulla ut erat id mauris vulputate elementum and other things",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    post_text:
      "A bunch of stuff to say about Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede and other things",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
