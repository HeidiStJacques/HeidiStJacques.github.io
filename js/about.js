const user = {
  name: "Heidi St Jacques",
  imageUrl: "images/heidi.png",
  bio: "Hi! I'm Heidi I am a Web Design & Development student and I am someone who values balance, growth, and staying curious about the world around me. I enjoy spending time outdoors, especially in the summer when the weather makes it easy to slow down and appreciate being outside. Whether it's being near the water, enjoying fresh air, or just taking a quiet walk, I find that those moments help me reset and refocus.  I tend to approach life with persistence and a positive mindset. I believe in showing up consistently, even when things feel challenging, and learning as I go. I value organization and thoughtfulness, but I also try to leave room for creativity and personal expression. I'm always working toward becoming a more confident and capable version of myself, both personally and professionally."
};

// Step one - Create React elements
const heading = React.createElement("h1", { className: "text-center" }, user.name);

const image = React.createElement("img", {
  src: user.imageUrl,
  alt: user.name,
  width: "200",
  height: "200",
  className: "d-block mx-auto mt-3"
});

const paragraph = React.createElement(
  "p",
  { className: "text-center mt-3 px-3" },
  user.bio
);

// Step two - Render the React elements
ReactDOM.render(heading, document.getElementById("h1"));
ReactDOM.render(image, document.getElementById("img"));
ReactDOM.render(paragraph, document.getElementById("content"));