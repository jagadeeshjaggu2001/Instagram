import Post from "./post";

import {data} from "./data";

import "../styles/posts.css"
const Posts = () => {
    let {photos} = data;
    photos = photos.sort((a,b) => a.width-b.width)

    return(
        <div className="postsContainer">
            <p>Top posts</p>
            <div className="gridContainer">
            {
                photos.map(e => {
                    const {url,id,src,alt,photographer} = e;
                    return <Post url={url} id={id} src={src} alt={alt} photographer={photographer}  />
                })
            }
            </div>
            
        </div>
    )
}
export default Posts;