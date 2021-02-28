import {
	markCompleteAction,
	markIncompleteAction,
	deleteTodoAction,
	createTodoAction,
	getTodos,
} from "./actionsType";

export type markCompleteActionCreator = (id: string) => markCompleteAction;

export type markIncompleteActionCreator = (id: string) => markIncompleteAction;

export type deleteTodoActionCreator = (id: string) => deleteTodoAction;

export type createTodoActionCreator = (title: string) => createTodoAction;

export type getTodosActionCreator = () => getTodos;
