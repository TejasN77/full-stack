// const div = document.createElement("div");
// div.setAttribute("title", "Outer Div");
// console.log(div);
// const h1 = document.createElement("h1");
// h1.innerHTML = "Hello World";

// div.appendChild(h1);

// document.querySelector("#contents").appendChild(div);

// const h1 = React.createElement("h1", {}, "Hello World");
// const div = React.createElement("div", { title: "Outer Div" }, h1);
// console.log(div);

// JSX start
const div = /*#__PURE__*/React.createElement("div", {
  title: "Outer Div"
}, /*#__PURE__*/React.createElement("h1", null, "Hello World."), /*#__PURE__*/React.createElement("h2", null, "Section 2."));
// JSX end

ReactDOM.render(div, document.querySelector("#contents"));