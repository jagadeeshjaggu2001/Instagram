import logo from "../media/chips.jpg"
import "../styles/header.css"

const Header = () => {
    return (
        <div class="headerContainer">
            <div>
            <img src={logo} alt="insta logo" style={{ width: "200px" }} className="headerImg"/>
            </div>
        

        
            <div>
                <p className="headerTitle">#food</p>
                <p className="headerInfo">
                    <span className="postNo">458,878,983</span>
                    posts
                </p>
                <button className="followBtn">Follow</button>
            </div>

        </div>
       
    )
}

export default Header;