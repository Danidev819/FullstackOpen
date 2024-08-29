import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
	return (
		<>
			<Header text={courses[0].name} />
			<Content parts={courses[0].parts} />
			<Header text={courses[1].name} />
			<Content parts={courses[1].parts} />
		</>
	);
};

export default Course;
