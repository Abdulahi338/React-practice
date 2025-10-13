import React from 'react'


function Header(){
    return(
        <h1>This is a Header Component</h1>
     )
    

}
const Posts = ()=>{
    return(
         <div>
    <h1>Post</h1>
    <p>this post is about the building a raact App</p>
    </div>
    )
   
}
function Footer(){
   return(<h1>coby write 2025</h1>)

}
function Blog() {
  return (
    <div>
        <Header/>
        <Posts/>
        <Footer/>
    </div>
  )
}

export default Blog;