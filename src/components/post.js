import "../styles/post.css"
const Post = ({ url, id, src, alt, photographer, width, height }) => {
    const { medium } = src;
    const ratio = width / height;
    const newWidth = ratio * 350;
    return (
        <div className="postContainer">
            <img src={src.medium} alt={alt} className="postImg" />
            <div className="postDetails" style={{width:newWidth}}>
                <div>
                <p>Photographer:{photographer}</p>
                <p>Id: {id}</p>
                <a href={url} target="_blank">View Post</a>
                </div>
            </div>
        </div>
    )
}
export default Post;