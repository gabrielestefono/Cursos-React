import { NavLink } from "react-router-dom";
import './navbar.css';

export default function Navbar(){
	return(
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>
	)
}