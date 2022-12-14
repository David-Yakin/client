import PropTypes from "prop-types";

const PropTypeComponent = ({ string }) => {
  return <div>PropTypeComponent</div>;
};

PropTypeComponent.propTypes = {
  string: PropTypes.string.isRequired,
};

/***** main types ****/
// const PropTypeComponent = props => {
//   const { string, number, boolean, object, array, cb } = props;
//   return <div>PropTypeComponent</div>;
// };

// PropTypeComponent.propTypes = {
//   string: PropTypes.string,
//   number: PropTypes.number,
//   boolean: PropTypes.bool,
//   object: PropTypes.object,
//   array: PropTypes.array,
//   cb: PropTypes.func,
// };

/***** array & object of ****/
// const PropTypeComponent = props => {
//   const { object, array, arrayOfObject } = props;
//   console.table(props);
//   return <div>PropTypeComponent</div>;
// };

// PropTypeComponent.propTypes = {
//   object: PropTypes.objectOf(PropTypes.string),
//   array: PropTypes.arrayOf(PropTypes.number),
//   arrayOfObject: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.bool)),
// };

/***** oneOfType & oneOf ****/
// const PropTypeComponent = props => {
//   console.table(props);
//   return <div>PropTypeComponent</div>;
// };

// PropTypeComponent.propTypes = {
//   one: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   two: PropTypes.oneOf(["a", "b"]),
// };

/***** Exact ****/
// const PropTypeComponent = props => {
//   return <div>PropTypeComponent</div>;
// };

// PropTypeComponent.propTypes = {
//   obj: PropTypes.exact({
//     key: PropTypes.string,
//     second: PropTypes.number,
//   }),
// };

/***** isRequired ****/
// const PropTypeComponent = props => {
//   return <div>PropTypeComponent</div>;
// };

// PropTypeComponent.propTypes = {
//   two: PropTypes.string.isRequired,
// };

/***** Shape  ****/
// import { shape, string } from "prop-types";

// const imageType = shape({
//   url: string,
//   alt: string,
// });

// const PropTypeComponent = props => {
//   return <div>PropTypeComponent</div>;
// };

// PropTypeComponent.propTypes = {
//   image: imageType.isRequired,
// };

/*****  Any & defaultProp *****/
// const PropTypeComponent = ({ name }) => {
//   return name;
// };

// PropTypeComponent.propTypes = {
//   name: PropTypes.any.isRequired,
// };

// PropTypeComponent.defaultProps = {
//   name: "david",
// };

/*****  node & children *****/
// const PropTypeComponent = ({ element, children }) => {
//   return `${element} ${children}`;
// };

// PropTypeComponent.propTypes = {
//   element: PropTypes.node.isRequired,
//   children: PropTypes.string,
// };

/***** element *****/
// const PropTypeComponent = ({ element, children }) => {
//   console.dir(children);
//   return (
//     <>
//       {element} {children}
//     </>
//   );
// };

// PropTypeComponent.propTypes = {
//   element: PropTypes.node.isRequired,
//   children: PropTypes.element,
// };

/***** more then one children *****/
// const PropTypeComponent = ({ children }) => {
//   console.dir(children);
//   return children;
// };

// PropTypeComponent.propTypes = {
//   children: PropTypes.arrayOf(PropTypes.element),
// };

export default PropTypeComponent;
