import { useEffect, useState } from "react";
import Form from "./components/Form";
import Phonebook from "./components/Phonebook";
import Filter from "./components/Filter";
import axios from "axios";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newPhone, setNewPhone] = useState("");
	const [newFilter, setFilter] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
			console.log(response.data);
		});
	}, []);

	const handleChange = (event) => {
		const inputName = event.target.name;
		const newValue = event.target.value;

		switch (inputName) {
			case "name":
				setNewName(newValue);
				break;
			case "phone":
				setNewPhone(newValue);
				break;
			case "filter":
				setFilter(newValue);
				break;
			default:
				alert("error");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const newContact = {
			name: newName,
			phone: newPhone,
			id: persons.length + 1,
		};

		if (persons.find((person) => person.name === newContact.name)) {
			alert(`${newContact.name} is already added to phonebook`);
			return false;
		}

		setPersons([...persons, newContact]);
		setNewName("");
		setNewPhone("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter newFilter={newFilter} handleChange={handleChange} />
			<h3>Add a new</h3>
			<Form
				newName={newName}
				newPhone={newPhone}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>
			<h3>Numbers</h3>
			<Phonebook persons={persons} newFilter={newFilter} />
		</div>
	);
};

export default App;
