const Post = ({ post }) => {
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ms-2">
            {post.reactions}
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        <div className="d-flex flex-wrap gap-1">
          {post.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
