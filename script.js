import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = arr => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return(
    React.createElement("div", { className: "loop-slider", style: {
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal' } }, 

    React.createElement("div", { className: "inner" },
    children,
    children)));



};

const Tag = ({ text }) => 
React.createElement("div", { className: "tag" }, React.createElement("span", null, "#"), " ", text);


const App = () => 
React.createElement("div", { className: "app" },
React.createElement("header", null, 
React.createElement("h1", null, "Auto Infinite Scroll Animation "), 
React.createElement("p", null, "")), 

React.createElement("div", { className: "tag-list" },
[...new Array(ROWS)].map((_, i) => 
React.createElement(InfiniteLoopSlider, { key: i, duration: random(DURATION - 5000, DURATION + 5000), reverse: i % 2 },
shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag) => 
React.createElement(Tag, { text: tag, key: tag })))), 



React.createElement("div", { className: "fade" })));




ReactDOM.render( 
React.createElement(App, null),
document.body);