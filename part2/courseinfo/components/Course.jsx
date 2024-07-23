import React from "react";

const Header = () => {
	return <h1>Web development curriculum</h1>;
};

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Course = ({ courses }) => {
	return (
		<div>
			<Header />
			{courses.map((course) => (
				<div key={course.id}>
					<h1>{course.name}</h1>
					<div>
						{course.parts.map((part) => (
							<p key={part.id}>
								{part.name} {part.exercises}
							</p>
						))}
					</div>
					<Total
						sum={course.parts.reduce((acc, part) => acc + part.exercises, 0)}
					/>
				</div>
			))}
		</div>
	);
};

export default Course;
