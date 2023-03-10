import React from "react";
import styles from "./Button.module.css";
// import styled from "styled-components";

// a tagged template literal (defaujlt JS feature) - what is passed between backticks will be passed to button method, which when executed will return a button
// const Button = styled.button`
//   // do not need to add .button class, will auto appply these to teh button created
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   // pseudo selector for button component
//   &:focus {
//     outline: none;
//   }

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button
      type={props.type}
      // using css modules to style button - styles is an object that makes available all of the classes in button.modules.css
      className={styles.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

// props wil be forwarded by styledcomponents packafe to the core built in button
export default Button;
