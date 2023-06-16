import "./Navbar.css"
import {Link} from "react-router-dom"
export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar" style={{backgroundColor: (props.theme==="light")?"white":"black"}}>
        <h1 style={{color: (props.theme==="light")?"black":"white"}}>{props.title}</h1>
        <ul>
            <li><Link to="/" style={{color: (props.theme==="light")?"black":"white"}}>Home</Link></li>
            <li><Link to="/about"  style={{color: (props.theme==="light")?"black":"white"}}>About</Link></li>
            <li><Link to="/contact"  style={{color: (props.theme==="light")?"black":"white"}}>Contact</Link></li>
            <li><button onClick={props.toggle}>{(props.theme==="light")?"Lightmode":"Darkmode"}</button></li>
        </ul>
      </nav>
    </div>
  )
}
Navbar.defaultProps={
    title:"Set title here"
};
