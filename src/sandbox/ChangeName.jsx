import { useState } from "react";
const ChangeName = () => {
  const INITIAL_DATA = { firstName: "", lastName: "" };
  const [name, setName] = useState(INITIAL_DATA);

  const onChangeName = (e, term) => {
    if (term === "first")
      return setName({ ...name, firstName: e.target.value });
    return setName({ ...name, lastName: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <form className="col-12 border p-2 rounded">
        <h1>
          Your Name Is: {name.firstName} {name.lastName}
        </h1>
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter First Name"
          onChange={e => onChangeName(e, "first")}
        />
        <input
          className="form-control mb-2"
          type="text"
          placeholder="Enter Last Name"
          onChange={e => onChangeName(e, "last")}
        />
      </form>
    </div>
  );
};

export default ChangeName;

// import { useState } from "react";
// const ChangeName = () => {
//   const INITIAL_DATA = { firstName: "", lastName: "" };
//   const [name, setName] = useState(INITIAL_DATA);

//   return (
//     <div className="d-flex justify-content-center mt-4">
//       <form className="col-12 border p-2 rounded">
//         <h1>
//           Your Name Is: {name.firstName} {name.lastName}
//         </h1>
//         <input
//           className="form-control mb-2"
//           type="text"
//           placeholder="Enter First Name"
//           onChange={e => setName({ ...name, firstName: e.target.value })}
//         />
//         <input
//           className="form-control mb-2"
//           type="text"
//           placeholder="Enter Last Name"
//           onChange={e => setName({ ...name, lastName: e.target.value })}
//         />
//       </form>
//     </div>
//   );
// };

// export default ChangeName;
