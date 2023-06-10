import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

// react element
const jsxheading = (
  <h1
    id="heading"
    tabIndex="5">
    heee reactttt using jsx element
  </h1>
);
const Title = function () {
  return (
    <h1
      id="heading"
      tabIndex="5">
      heee reactttt using jsx function
    </h1>
  );
};
//functional component

const HeadingComponent = () => (
  // <React.Fragment>
  <>
    <div id="container">
      <Title />
      {Title()}
      <Title></Title>
      {jsxheading}
      <h1>hii reeactt functional compo</h1>
    </div>
    <div></div>
    </>
  // </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
// root.render(jsxheading);

// ............EPISODE 1 TO 2............./////////////////////
// const heading = React.createElement
// ("h1" ,
// {id: "heading" } ,
// "hello" );

//child to h1
//this empty braces are to give attributes
//create elemnt basically  creates object.
//  console.log(heading);
//this heading is basically a react element not any h1 heading.
//it is known as props, this hello is go inside h1 tag  and {} inside this it is attributes.

 // const root= ReactDOM.createRoot(document.getElementById("root"));
 // root.render(heading);

 // render method converting this object to h1 tag.

 //............how to make nested div structure in react..............///

// const parent= React.createElement(
//     "div" ,
//     {id:"parent"} ,
//      React.createElement(
//         "div" ,
//         {id:"child"} ,
//        [ React.createElement("h1", {} ,"i namaste react 🚀" ) , // two element as sibling create array
//        React.createElement("h2", {} ,"i am h2 tag" )
//        ])
// );
// const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
