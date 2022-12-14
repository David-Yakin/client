// import { useState, useEffect } from "react";
// import axios from "axios";

// const AxiosComp = () => {
//   const [name, setName] = useState("test");
//   useEffect(() => {
//     axios
//       .get("/db.json")
//       .then(({ data }) => {
//         setName(data.name);
//       })
//       .catch(error => console.log(error));
//   }, []);
//   return <div>{name}</div>;
// };

// export default AxiosComp;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const fetchData = async () => {
//   try {
//     const response = await fetch("./db.json");
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const AxiosComp = () => {
//   const [name, setName] = useState("test");

//   fetchData();

//   useEffect(() => {
//     fetchData()
//   }, []);
//   return <div>{name}</div>;
// };

// export default AxiosComp;
