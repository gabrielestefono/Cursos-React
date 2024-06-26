import { Link } from 'react-router-dom';
import styles from './About.module.css';

export default function About(){
	return (
		<div className={styles.about}>
			<h2>Sobre o mini <span>Blog</span></h2>
			<p>Este projeto consiste em um blog feito com React no frontend e firebase no backend</p>
			<Link to="/posts/create" className='btn'>Criar Post</Link>
		</div>
	)
}