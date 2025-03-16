import './Post.css'

function Post(props) {
  const { userId, id, title, body } = props;

  return (
    <div className='post'>
      <h1>{userId}</h1>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{body}</h3>
    </div>
  );
}

export default Post;
