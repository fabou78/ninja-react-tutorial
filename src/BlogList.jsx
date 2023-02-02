

// const BlogList = ({ blogs, title, handleDelete }) => {
const BlogList = ({ blogs, title }) => {
  // const blogs = props.blogs;
  // const title =props.title;

  // const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);

  // const handleClick = (e) =>{
  //   console.log('Hello Ninja', e);
  //   // name ='luigi'
  //   setName('luigi');
  //   setAge(20)
  // };
  // const handleClickAgain = (name) =>{
  //   console.log('Hello ' + name);
  // };



  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog)=> (
        // the key attribute is required by React to distinguish bettween different blogs
        // The id must be unique
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
        </div>
      ))}
      {/* <p>{name} is {age} years old!</p>
      <button onClick={handleClick} >Click me</button> */}
      {/* Bellow we call handle with parameter via an anonymous function
       because we can't call directly onClick={handleClickAgain('mario')}
       as it will fire straigt away */}
      {/* <button onClick={(e)=>handleClickAgain('mario', e)} >Click me again</button> */}
    </div>
   );
}

export default BlogList;