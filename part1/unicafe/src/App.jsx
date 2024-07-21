import { useState } from "react";

const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ onClick, text }) => {
	return (
		<button type="button" onClick={onClick}>
			{text}
		</button>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</>
	);
};

const Statistics = ({ good, neutral, bad, total }) => {
	let avg = (good - bad) / total;
	let pos = (100 * good) / total;
	// Si los valores son NaN, se asigna 0
	if (Number.isNaN(avg)) {
		avg = 0;
	}
	if (Number.isNaN(pos)) {
		pos = 0;
	}

	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={total} />
				<StatisticLine text="average" value={avg} />
				<StatisticLine text="positive" value={`${pos} %`} />
			</tbody>
		</table>
	);
};

const App = () => {
	// guarda los clics de cada botón en su propio estado
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<Header text="give feedback" />
			<Button text="good" onClick={() => setGood(good + 1)} />
			<Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
			<Button text="bad" onClick={() => setBad(bad + 1)} />
			<Header text="statistics" />
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				total={good + neutral + bad}
			/>
		</div>
	);
};

export default App;
