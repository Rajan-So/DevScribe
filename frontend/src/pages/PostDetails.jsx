import ReactMarkdown from "react-markdown";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await api.get(`/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        setError("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <p>Loading post...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  const handleDelete = async () => {
  const confirmDelete = window.confirm("Delete this post?");
  if (!confirmDelete) return;

  try {
    await api.delete(`/posts/${id}`);
    navigate("/");
  } catch (err) {
    alert("Not authorized to delete this post");
  }
};

  return (
    <div>
      <h2>{post.title}</h2>

      <p>
        by <strong>{post.author?.username}</strong>
      </p>

      <small>
        {new Date(post.createdAt).toLocaleDateString()}
      </small>

      {user && post.author?._id === user.id && (
        <button onClick={handleDelete} style={{ color: "red", marginBottom: "10px" }}> Delete Post
        </button>
      )}

      <hr />

      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}

export default PostDetails;
