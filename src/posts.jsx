import { useEffect, useState } from "react"
import Post from "./post";

export default function Posts(){
    const [posts, newPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>newPosts(data))
    }, [])
    
    return(
        <div>
            <h3>posts:{posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}