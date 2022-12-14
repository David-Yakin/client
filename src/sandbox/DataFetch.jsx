import { useEffect, useState } from "react";
import axios from "axios";

const DataFetch = () => {
  const [post, setPost] = useState({});
  // const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(({ data }) => setPost(data))
      .catch(err => console.log(err));
  }, [id]);

  // if (!posts.length) return "no data...";

  return (
    <div>
      id: {id}
      <div className="d-flex col-6">
        <input
          className="form-control mt-4 "
          type="text"
          onChange={e => setId(e.target.value)}
          placeholder="Enter post id"
        />
      </div>
      <div>
        <ul>
          <li>{post.title}</li>
        </ul>
        {/* <ul>
          {posts.map((post, index) => (
            <li key={index}>{post.title}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default DataFetch;
