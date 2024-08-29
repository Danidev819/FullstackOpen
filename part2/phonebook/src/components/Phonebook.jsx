import React from "react";
import Contact from "./Contact";

const Phonebook = ({ persons, newFilter }) => {
	const lowerCaseFilter = newFilter.toLowerCase();

	const filteredArray = persons.filter((person) =>
		person.name.toLowerCase().includes(lowerCaseFilter),
	);

	const unfilteredContacts = persons.map((person) => (
		<Contact
			name={person.name}
			phone={person.phone}
			key={person.id}
			id={person.id}
		/>
	));

	const filteredContacts = filteredArray.map((person) => (
		<Contact
			name={person.name}
			phone={person.phone}
			key={person.id}
			id={person.id}
		/>
	));

	const contactsToShow = newFilter ? filteredContacts : unfilteredContacts;

	return (
		<>
			<table>
				<tbody>{contactsToShow}</tbody>
			</table>
		</>
	);
};

export default Phonebook;
