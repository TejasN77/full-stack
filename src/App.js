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
const div = (
    <div title="Outer Div">
        <h1>Hello World.</h1>
        <h2>Section 2.</h2>
    </div>
);
// JSX end

ReactDOM.render(div, document.querySelector("#contents"));
