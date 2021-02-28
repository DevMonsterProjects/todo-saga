import React, { useRef, useEffect } from "react";
import {
	Container,
	Button,
	InputGroup,
	FormControl,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";
import { connect } from "react-redux";

import "./App.css";
import {
	deleteTodo,
	markComplete,
	markIncomplete,
	createTodo,
	getTodos,
} from "action/";
import storeType, { todo } from "types/storeType";
import AppPropType from "./AppPropType";

const App: React.FC<AppPropType> = ({
	todos,
	deleteTodo,
	markComplete,
	markIncomplete,
	createTodo,
	getTodos,
}) => {
	const input = useRef<HTMLInputElement>(null);

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	const addTodo = () => {
		if (input.current) {
			const newTodo = input.current.value;
			input.current.value = "";
			createTodo(newTodo);
		}
	};

	const renderTodos = () => {
		let complete: todo[] = [];
		let inComplete: todo[] = [];
		todos.forEach((todo) => {
			if (todo.isCompleted) complete.push(todo);
			else inComplete.push(todo);
		});
		return (
			<>
				<ListGroup variant="flush" className="m-2">
					<h4>Incomplete</h4>
					{inComplete.map((todo, index) => (
						<ListGroupItem
							key={index}
							variant="danger"
							style={{ display: "flex", justifyContent: "space-between" }}
							action
						>
							<div>{todo.title}</div>
							<div>
								<i
									className={`fas fa-check m-2`}
									onClick={() => {
										markComplete(todo.id);
									}}
								/>
								<i
									className="fas fa-trash m-2"
									onClick={() => {
										deleteTodo(todo.id);
									}}
								/>
							</div>
						</ListGroupItem>
					))}
				</ListGroup>
				<ListGroup variant="flush" className="m-2">
					<h4>Complete</h4>
					{complete.map((todo, index) => (
						<ListGroupItem
							key={index}
							variant="success"
							style={{ display: "flex", justifyContent: "space-between" }}
							action
						>
							<div>{todo.title}</div>
							<div>
								<i
									className="fas fa-minus m-2"
									onClick={() => {
										markIncomplete(todo.id);
									}}
								/>
								<i
									className="fas fa-trash m-2"
									onClick={() => {
										deleteTodo(todo.id);
									}}
								/>
							</div>
						</ListGroupItem>
					))}
				</ListGroup>
			</>
		);
	};

	return (
		<Container>
			<InputGroup className="m-3">
				<FormControl placeholder="Todo" ref={input} />
				<InputGroup.Append>
					<Button variant="secondary" onClick={addTodo}>
						<i className="fas fa-plus mr-3"></i>
						Add
					</Button>
				</InputGroup.Append>
			</InputGroup>
			{renderTodos()}
		</Container>
	);
};

const mapStateToProps = (state: storeType) => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps, {
	deleteTodo,
	markComplete,
	markIncomplete,
	getTodos,
	createTodo,
})(App);
