import { useAuthValue } from '../context/AuthContext';
import useAuthentication from '../hooks/useAuthentication';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
	const user = useAuthValue();

	const { logout } = useAuthentication();
	return (
		<nav className={styles.navbar}>
			<NavLink to="/" className={styles.brand}>Mini <span>Blog</span></NavLink>
			<ul className={styles.links_list}>
				<li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Início</NavLink></li>
				{!user && <>
					<li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Entrar</NavLink></li>
					<li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Registrar</NavLink></li>
				</>}
				{user && <>
					<li><NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>Criar Post</NavLink></li>
					<li><NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink></li>
				</>}
				<li><NavLink to="/About" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink></li>
				{user && (
					<li>
						<button onClick={logout}>Sair</button>
					</li>
				)}
			</ul>
		</nav>
	)
}