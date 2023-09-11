import './post.css'
export default function Post ({post}){
    const {title,body, userId, id} =post;
    return(
        <div className='post'>
            <h5>Title:{title}</h5>
            <p><small>UserID :{userId}</small></p>
            <p><small>PostsID:{id}</small></p>
            <p>{body}</p>

        </div>
    )
}