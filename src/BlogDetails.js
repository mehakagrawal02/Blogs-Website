import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function BlogDetails() {

    const { id } = useParams();
    const {data : blog, isPending, error}=useFetch('http://localhost:8000/blogs/' + id);
    const history=useHistory();
    const handleClick=()=>
    {
      fetch('http://localhost:8000/blogs/' + id,{
        method:'DELETE'

      }).then(()=>{
        history.push('/');
      })

    }
  return (
    <div>
      {isPending && <div>Loading...</div>}
      { blog && ( <article>
         
         <p>{blog.author}</p>
         <div>{blog.body}</div>
         <button onClick={handleClick}>delete</button>
       </article>
     )}
      {error && <div>{error}</div>}
     
    </div>
    

  );
}

export default BlogDetails;