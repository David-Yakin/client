import React from "react";
import PropTypeComponent from "./PropTypeComponent";

/***** error *****/
const FatherPropTypes = () => {
  return <PropTypeComponent />;
};

/***** main types ****/
// const FatherPropTypes = () => {
//   const obj = { key: "value" };
//   return (
//     <PropTypeComponent
//       string="string"
//       number={2}
//       boolean={true}
//       object={obj}
//       array={[]}
//       cb={console.log}
//     />
//   );
// };

/***** array & object of ****/
// const FatherPropTypes = () => {
//   const obj = { key: "value" };
//   const array = [1, 2, 3];
//   const arrayOfObjects = [{ key: false }];

//   return (
//     <PropTypeComponent
//       object={obj}
//       array={array}
//       arrayOfObject={arrayOfObjects}
//     />
//   );
// };

/***** oneOfType & oneOf ****/
// const FatherPropTypes = () => {
//   return (
//     <>
//       <PropTypeComponent one="string" />
//       <PropTypeComponent one={2} />
//       <PropTypeComponent two="a" />
//       <PropTypeComponent two="c" />
//     </>
//   );
// };

/***** Exact ****/
// const FatherPropTypes = () => {
//   const obj = { key: "hallo", second: 5, third: true };
//   return <PropTypeComponent obj={obj} />;
// };

/***** isRequired ****/
// const FatherPropTypes = () => {
//   return <PropTypeComponent />;
// };

/***** Shape *****/
// const image = {
//   url: "https://cdn.pixabay.com/photo/2022/11/13/18/09/canyon-7589820_960_720.jpg",
//   alt: "Rock",
// };

// const FatherPropTypes = () => {
//   return <PropTypeComponent image={image} />;
// };

/***** Any & defaultProp *****/
// const FatherPropTypes = () => {
//   return (
//     <>
//       <PropTypeComponent name="shola" />
//       <br />
//       <PropTypeComponent />
//     </>
//   );
// };

/***** node & children *****/
// const FatherPropTypes = () => {
//   return <PropTypeComponent element="David">Yakin</PropTypeComponent>;
// };

/***** element *****/
// const FatherPropTypes = () => {
//   return (
//     <PropTypeComponent element="David">
//       <PropTypeComponent element="yakin" />
//     </PropTypeComponent>
//   );
// };

/***** more then one children *****/
// const FatherPropTypes = () => {
//   return (
//     <PropTypeComponent>
//       <div>first child</div>
//       <p>second child</p>
//     </PropTypeComponent>
//   );
// };

export default FatherPropTypes;
