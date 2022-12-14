import { useState } from "react";

const SetPost = () => {
  const INITIAL_POST = { title: "", subtitle: "", author: "", createdAt: "" };
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const createNewPost = e => {
    e.preventDefault();
    setPosts([...posts, { ...post, createdAt: new Date().toLocaleString() }]);
    return setPost(INITIAL_POST);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        <form className="col-12 border p-2 rounded">
          <h5 className="text-center">Post</h5>
          <input
            value={post.title}
            className="form-control mb-2"
            placeholder="Enter Post Title"
            onChange={e => setPost({ ...post, title: e.target.value })}
          />
          <input
            value={post.subtitle}
            className="form-control mb-2"
            placeholder="Enter Post Subtitle"
            onChange={e => setPost({ ...post, subtitle: e.target.value })}
          />
          <input
            value={post.author}
            className="form-control mb-2"
            placeholder="Enter Post author"
            onChange={e => setPost({ ...post, author: e.target.value })}
          />{" "}
          <button
            disabled={!post.title | !post.subtitle | post.author}
            onClick={createNewPost}
            className="btn btn-outline-dark col-12"
            id="inputGroup-sizing-default">
            Create
          </button>
        </form>

        {/* שני סימני קריאה בתחילת ההתנייה יהפכו את הערך שיחזור לבוליאני וכך לא אראה את הספרה אפס אם אין אורך למערך */}
        {!!posts.length && (
          <table className="table">
            <thead>
              <tr>
                <th>no.</th>
                <th>title</th>
                <th>subtitle</th>
                <th>author</th>
                <th>created at</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{post.title}</td>
                  <td>{post.subtitle}</td>
                  <td>{post.author}</td>
                  <td>{post.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SetPost;
