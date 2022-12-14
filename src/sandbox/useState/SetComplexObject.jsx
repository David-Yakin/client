import { useState } from "react";

const SetComplexObject = () => {
  const INITIAL_USER = {
    name: {
      first: "",
      last: "",
    },
    email: "",
  };

  const [user, setUser] = useState(INITIAL_USER);

  return (
    <div className="d-flex justify-content-center mt-4">
      <form className="col-4 border p-2 rounded">
        <h5>
          Your Name Is:{" "}
          <span className="fw-light">
            {user.name.first} {user.name.last}
          </span>
        </h5>
        <h6>
          Your email is:
          <span className="fw-light"> {user.email}</span>
        </h6>
        <input
          className="form-control mb-2"
          placeholder="Enter First Name"
          onChange={e =>
            setUser({ ...user, name: { ...user.name, first: e.target.value } })
          }
        />
        <input
          className="form-control mb-2"
          placeholder="Enter Last Name"
          onChange={e =>
            setUser({ ...user, name: { ...user.name, last: e.target.value } })
          }
        />
        <input
          className="form-control mb-2"
          placeholder="Enter Email"
          onChange={e => setUser({ ...user, email: e.target.value })}
        />
      </form>
    </div>
  );
};

export default SetComplexObject;
