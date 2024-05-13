import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
	return (
		<nav className={styles.navbar}>
			<NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>
			<ul className={styles.links_list}>
				<li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Início</NavLink></li>
				<li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink></li>
				<li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Registrar</NavLink></li>
				<li><NavLink to="/About" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink></li>
			</ul>
		</nav>
	)
}