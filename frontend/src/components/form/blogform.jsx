import React from 'react'
import './blogform.css'

const BlogForm = () => {
        return ( 
           
            <div>
                
               <div>
               <h2>ADD NEW BLOG HERE</h2>
               </div>
                <div >
                BLOG TITLE: <input style={{height:'30px',width:'350px'}}
                        type="text"
                        required
                      placeholder='title'
                    />
                    </div>
                    <div>
                DESCRIPTION:  <textarea style={{height:'200px',width:'350px'}}
                        required
                        placeholder='description'
                        
                    />
                    </div>
                    <div >
            BLOG AUTHOR:  <input style={{height:'30px',width:'350px'}}
                         type='text'
                        placeholder='author'
                    ></input>
                     </div>
                    <br/>
                     <div>
                    <button style={{height:'30px',width:'200px', borderRadius:'5px', fontSize:'20px'}}>Submit</button>
                    </div>
                    </div>
           
         );
    }
    
export default BlogForm;
