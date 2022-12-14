// import React from "react";

// const LifeCycleHooks = () => {
//   return (
//     <div>
//       {console.log("in render")}
//       LifeCycleHooks
//     </div>
//   );
// };

// export default LifeCycleHooks;

/********** useState with function **********/
// import { useState } from "react";
// import Container from "@mui/material/Container";

// const LifeCycleHooks = () => {
//   const [count, setCount] = useState(() => {
//     console.log("in useState function");
//     setTimeout(() => {
//       setCount(prev => prev + 1);
//     }, 2000);
//     return 0;
//   });

//   return (
//     <Container maxWidth="lg">
//       {console.log(new Date().toLocaleTimeString())}
//       Count: {count}
//     </Container>
//   );
// };

// export default LifeCycleHooks;

/********** useEffect as componentDidMount **********/
// import { useEffect, useState } from "react";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";

// const getTime = () => {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   const mili = date.getMilliseconds();
//   return `${time}.${mili}`;
// };

// const LifeCycleHooks = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`in useEffect: ${getTime()}`);
//     setCount(prev => prev + 1);
//   }, []);

//   return (
//     <Container maxWidth="lg">
//       {console.log("in render " + getTime())}
//       <Box>Count: {count}</Box>
//       <div>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => setCount(prev => prev + 1)}>
//           +
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => setCount(prev => prev - 1)}>
//           -
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default LifeCycleHooks;

/********** useEffect as componentDidUpdate **********/
// import { useState, useEffect } from "react";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";

// const getTime = () => {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   const mili = date.getMilliseconds();
//   return `${time}.${mili}`;
// };

// const LifeCycleHooks = () => {
//   const [count, setCount] = useState(0);
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     console.log(`in useEffect: ${getTime()}`);
//   }, [num]);

//   return (
//     <Container maxWidth="lg">
//       {console.log("in render " + getTime())}
//       <Box>Count: {count}</Box>
//       <div>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => setCount(prev => prev + 1)}>
//           +
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => setCount(prev => prev - 1)}>
//           -
//         </Button>
//       </div>

//       <Box>Num: {num}</Box>
//       <div>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => setNum(prev => prev + 1)}>
//           +
//         </Button>
//         <Button
//           variant="outlined"
//           color="primary"
//           onClick={() => setNum(prev => prev - 1)}>
//           -
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default LifeCycleHooks;

/********** useEffect as componentWillUnmount **********/
// import { useEffect } from "react";
// import Container from "@mui/material/Container";

// const getTime = () => {
//   const date = new Date();
//   const time = date.toLocaleTimeString();
//   const mili = date.getMilliseconds();
//   return `${time}.${mili}`;
// };

// const LifeCycleHooks = () => {
//   useEffect(() => {
//     console.log(`in useEffect: ${getTime()}`);
//     return () => console.log(`in useEffect return: ${getTime()}`);
//   }, []);

//   return (
//     <Container>
//       {console.log(`in render: ${getTime()}`)}
//       in LifeCycleHooks
//     </Container>
//   );
// };

// export default LifeCycleHooks;

/********** useEffect as componentDidUpdate **********/
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const getTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const mili = date.getMilliseconds();
  return `${time}.${mili}`;
};

const LifeCycleHooks = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(`in useEffect: ${getTime()}`);
  });

  return (
    <Container maxWidth="lg">
      {console.log("in render " + getTime())}
      <Box>Count: {count}</Box>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount(prev => prev + 1)}>
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount(prev => prev - 1)}>
          -
        </Button>
      </div>

      <Box>Num: {num}</Box>
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setNum(prev => prev + 1)}>
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setNum(prev => prev - 1)}>
          -
        </Button>
      </div>
    </Container>
  );
};

export default LifeCycleHooks;
