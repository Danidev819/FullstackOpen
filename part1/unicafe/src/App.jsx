import { useState } from "react";

const Header = ({ text }) => {
	return (
		<>
			<h1>{text}</h1>
		</>
	);
};

const Button = ({ text, onClick }) => {
	return (
		<>
			<button type="button" onClick={onClick}>
				{text}
			</button>
		</>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<>
			<p>
				{text} {value}
			</p>
		</>
	);
};

const Statistics = ({ good, neutral, bad, total }) => {
	/**
   * AVG (good - bad) / total}
    Positive (100 * good) / total + ' %'
   */

	if (good === 0 && neutral === 0 && bad === 0) {
		return (
			<>
				<p>No feedback given</p>
			</>
		);
	}

	return (
		<>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="average" value={(good - bad) / total} />
			<StatisticLine text="positive" value={`${(100 * good) / total} %`} />
		</>
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
