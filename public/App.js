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
// const div = (
//     <div title="Outer Div">
//         <h1>Hello World.</h1>
//         <h2>Section 2.</h2>
//     </div>
// );
// JSX end

// Week 2 start
// class HelloWorld extends React.Component {
//     render() {
//         const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
//         const helloContinents = Array.from(continents, (c) => `Hello ${c}!`);
//         // Hello Africa

//         const message = helloContinents.join(" ");

//         // map
//         // [0] => Hello Africa
//         // const a = continents.map(continent => `Hello ${continent}`);

//         // let a = "Hello";
//         // let b = "Africa";
//         // a + b
//         // `${a}${b}`

//         return (
//             <div title="Outer Div">
//                 <h1>{message}</h1>
//                 {/* <h2>Section 2.</h2> */}
//             </div>
//         );
//     }
// }

// class IssueFilter extends React.Component {
//     render() {
//         return <h3>IssueFilter</h3>;
//     }
// }

const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h3", null, "IssueFilter");
};

// class IssueTable extends React.Component {
//     render() {
//         return <h3>IssueTable</h3>;
//     }
// }

const IssueRow = props => {
  const rowStyle = props.rowStyle;
  const issue = props.issue;
  const created = issue.created !== undefined ? issue.created.getMonth() + "-" + issue.created.getDay() + "-" + issue.created.getYear() : "Date not defined";
  const due = issue.due ? issue.due.getMonth() + "-" + issue.due.getDay() + "-" + issue.due.getYear() : "Date not defined";

  // const {rowStyle, issue} = props;

  if (props.issue === undefined) return /*#__PURE__*/React.createElement("h3", null, "IssueRow");
  return /*#__PURE__*/React.createElement("tr", null, Object.entries(issue).map((value, i) => {
    if (value[0] === "created") {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: rowStyle
      }, created);
    }
    if (value[0] === "due") {
      return /*#__PURE__*/React.createElement("td", {
        key: i,
        style: rowStyle
      }, due);
    }
    return /*#__PURE__*/React.createElement("td", {
      key: i,
      style: rowStyle
    }, value[1]);
  }));
};
const IssueTable = () => {
  const issues = [{
    id: 1,
    status: "New",
    owner: "Ravan",
    effort: 5,
    created: new Date("2018-08-15"),
    due: undefined,
    title: "Error in console when clicking Add"
  }, {
    id: 2,
    status: "Assigned",
    owner: "Eddie",
    effort: 14,
    created: new Date("2018-08-16"),
    due: new Date("2018-08-30"),
    title: "Missing bottom border on panel"
  }];
  const rowStyle = {
    border: "1px solid silver",
    padding: 4
  };
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    key: issue.id,
    rowStyle: rowStyle,
    issue: issue
  }));
  // [<IssueRow rowStyle={rowStyle} issue={issue} />,
  // <IssueRow rowStyle={rowStyle} issue={issue} />]

  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, Object.keys(issues[0]).map(title => /*#__PURE__*/React.createElement("th", {
    key: title,
    style: rowStyle
  }, title)))), /*#__PURE__*/React.createElement("tbody", null, issueRows));
};
// class IssueAdd extends React.Component {
//     render() {
//         return <h3>IssueAdd</h3>;
//     }
// }

const IssueAdd = () => {
  return /*#__PURE__*/React.createElement("h3", null, "IssueAdd");
};
class IssueList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IssueTable, null));
  }
}
const element = /*#__PURE__*/React.createElement(IssueList, null);
ReactDOM.render(element, document.querySelector("#contents"));