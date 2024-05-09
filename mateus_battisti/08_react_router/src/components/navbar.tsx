import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
	return(
		<nav>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
		</nav>
	)
}