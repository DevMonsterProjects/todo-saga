import {
	markCompleteActionCreator,
	markIncompleteActionCreator,
	deleteTodoActionCreator,
	createTodoActionCreator,
	getTodosActionCreator,
} from "types/actionCreatorTypes";

export const markComplete: markCompleteActionCreator = (id) => {
	return {
		type: "MARK_COMPLETE",
		id,
	};
};

export const markIncomplete: markIncompleteActionCreator = (id) => {
	return {
		type: "MARK_INCOMPLETE",
		id,
	};
};

export const deleteTodo: deleteTodoActionCreator = (id) => {
	return {
		type: "DELETE_TODO",
		id,
	};
};

export const createTodo: createTodoActionCreator = (title) => {
	return {
		type: "CREATE_TODO",
		title,
	};
};

export const getTodos: getTodosActionCreator = () => {
	return {
		type: "GET_TODOS",
	};
};
