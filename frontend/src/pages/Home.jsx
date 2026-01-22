import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => {
        setPosts(Array.isArray(res.data) ? res.data : []);
      })
      .catch(() => {
        setError("Failed to load posts");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>All Posts</h2>

      {posts.length === 0 && <p style={{ opacity: 0.7 }}>No posts published yet.</p>}

      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: "20px" }}>
          <h3>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </h3>

          <p>
            by <strong>{post.author?.username || "Unknown"}</strong>
          </p>

          {post.createdAt && (
            <small>
              {new Date(post.createdAt).toLocaleDateString()}
            </small>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
