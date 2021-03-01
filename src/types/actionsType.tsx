import { todo } from "types/storeType";

// For Action Creator
export interface markCompleteAction {
	type: "MARK_COMPLETE";
	id: string;
}

export interface markIncompleteAction {
	type: "MARK_INCOMPLETE";
	id: string;
}

export interface deleteTodoAction {
	type: "DELETE_TODO";
	id: string;
}

export interface createTodoAction {
	type: "CREATE_TODO";
	title: string;
}

export interface getTodos {
	type: "GET_TODOS";
}

// For Reducers
export interface createdTodoAction {
	type: "CREATED_TODO";
	todo: todo;
}

export interface deletedTodoAction {
	type: "DELETED_TODO";
	id: string;
}

export interface markedCompleteAction {
	type: "MARKED_COMPLETE";
	id: string;
}

export interface markedIncompleteAction {
	type: "MARKED_INCOMPLETE";
	id: string;
}

export interface gotTodos {
	type: "GOT_TODOS";
	todos: todo[];
}

export const actionIds = {
	MARK_COMPLETE: "MARK_COMPLETE",
	MARK_INCOMPLETE: "MARK_INCOMPLETE",
	DELETE_TODO: "DELETE_TODO",
	CREATE_TODO: "CREATE_TODO",
	GET_TODOS: "GET_TODOS",
};
