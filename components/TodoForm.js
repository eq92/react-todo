import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const focus = useRef(null);

	useEffect(() => {
		focus.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	//this will stop the button just from refreshing
	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});
		setInput("");
	};

	return (
		<form onSubmit={handleSubmit} className="todo-form">
			{props.edit ? (
				<>
					<input
						placeholder="Update your item"
						value={input}
						onChange={handleChange}
						name="text"
						ref={focus}
						className="todo-input edit"
					/>
					<button onClick={handleSubmit} className="todo-button edit">
						Update
					</button>
				</>
			) : (
				<>
					<input
						placeholder="Add a todo"
						value={input}
						onChange={handleChange}
						name="text"
						className="todo-input"
						ref={focus}
					/>
					<button onClick={handleSubmit} className="todo-button">
						Add todo
					</button>
				</>
			)}
		</form>
	);
}

export default TodoForm;
