import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Create() {
  const[title,setTitle]=useState('');
  const[body,setBody]=useState('');
  const[author,setAuthor]=useState('');
  const[isPending,setIsPending]=useState(false);
  const history=useHistory();
  const handleSubmit =(e)=>
  {
    e.preventDefault();
    const blog={title,body,author};
    setIsPending(true);
    fetch('http://localhost:8000/blogs',
    {
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body:JSON.stringify(blog)

    }).then(()=>{
      console.log("New blog Added");
      setIsPending(false);
      history.push('/');
    })
  }
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog title:
        </label>
        <input
          type='text'
          required
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
        />
        <label>
          Blog body:
        </label>
        <textarea
        required 
          value={body}
          onChange={(e)=>setBody(e.target.value)}>
        </textarea>
        <label>
          blog author:
        </label>
        <select value={author} onChange={(e)=>setAuthor(e.target.value)} >
          <option value='mario'>mario</option>
          <option value='jack'>jack</option>
          <option value='Yoshi'>Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}

        </form>
        
      </div>);
      }
export default Create;