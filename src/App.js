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
    return <h3>IssueFilter</h3>;
};

// class IssueTable extends React.Component {
//     render() {
//         return <h3>IssueTable</h3>;
//     }
// }

const IssueRow = (props) => {
    const rowStyle = props.rowStyle;
    const issue = props.issue;

    console.log(issue);

    // const {rowStyle, issue} = props;

    return (
        <tr>
            <td style={rowStyle}>{issue.id}</td>
            <td style={rowStyle}>{issue.status}</td>
            <td style={rowStyle}>{issue.owner}</td>
            <td style={rowStyle}>{issue.effort}</td>
        </tr>
    );
};

const IssueTable = () => {
    const issues = [
        {
            id: 1,
            status: "New",
            owner: "Ravan",
            effort: 5,
            created: new Date("2018-08-15"),
            due: undefined,
            title: "Error in console when clicking Add",
        },
        {
            id: 2,
            status: "Assigned",
            owner: "Eddie",
            effort: 14,
            created: new Date("2018-08-16"),
            due: new Date("2018-08-30"),
            title: "Missing bottom border on panel",
        },
    ];

    const rowStyle = { border: "1px solid silver", padding: 4 };

    const issueRows = issues.map((issue) => (
        <IssueRow key={issue.id} rowStyle={rowStyle} issue={issue} />
    ));
    // [<IssueRow rowStyle={rowStyle} issue={issue} />,
    // <IssueRow rowStyle={rowStyle} issue={issue} />]

    return (
        <table>
            <thead>
                <tr>
                    <th style={rowStyle}>ID</th>
                    <th style={rowStyle}>Status</th>
                    <th style={rowStyle}>Owner</th>
                    <th style={rowStyle}>Effort</th>
                    <th style={rowStyle}>Created</th>
                    <th style={rowStyle}>Due</th>
                    <th style={rowStyle}>Title</th>
                </tr>
            </thead>
            <tbody>{issueRows}</tbody>
        </table>
    );
};
// class IssueAdd extends React.Component {
//     render() {
//         return <h3>IssueAdd</h3>;
//     }
// }

const IssueAdd = () => {
    return <h3>IssueAdd</h3>;
};
class IssueList extends React.Component {
    render() {
        return (
            <>
                <IssueTable />
            </>
        );
    }
}

const element = <IssueList />;
ReactDOM.render(element, document.querySelector("#contents"));
