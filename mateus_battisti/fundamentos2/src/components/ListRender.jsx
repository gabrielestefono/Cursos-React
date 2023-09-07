import { useState } from "react";

const ListRender = () => {

	const [list] = useState(["Gabriel", "Pedro", "Mateus"]);

	const [users, setUsers] = useState([
		{ id: 1, name: "Gabriel", age: 20 },
		{ id: 2, name: "Pedro", age: 21 },
		{ id: 3, name: "Mateus", age: 22 },
	]);

	const deleteRandon = () => { 
		const randomNumber = Math.floor(Math.random() * 4)

		setUsers((prevUser) => {
			return prevUser.filter((user) => user.id !== randomNumber)
		})
	}

	return (
		<div>
			<ul>
				{list.map((item, i) => (
					<li key={i}> {item} </li>
				))}
			</ul>
			<ul>
				{users.map((user) => (
					<li key={user.id}> {user.name} - {user.age}</li>
				))}
			</ul>
			<button onClick={deleteRandon}>Delete ramdom user</button>
		</div>
	)
 }
export default ListRender;