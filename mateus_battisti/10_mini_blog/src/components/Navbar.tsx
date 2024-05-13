import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
	return (
		<nav>
			<NavLink to="/">Mini <span>Blog</span></NavLink>
			<ul>
				<li><NavLink to="/">Início</NavLink></li>
				<li><NavLink to="/About">Sobre</NavLink></li>
			</ul>
		</nav>
	)
}