import { Reducer } from "redux";
import { todo } from "types/storeType";
import {
	createdTodoAction,
	deletedTodoAction,
	gotTodos,
	markedCompleteAction,
	markedIncompleteAction,
} from "types/actionsType";

type actions =
	| createdTodoAction
	| deletedTodoAction
	| gotTodos
	| markedCompleteAction
	| markedIncompleteAction;

const initialState: todo[] = [];

const todoReducer: Reducer<todo[], actions> = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case "CREATED_TODO":
			return [...state, action.todo];
		case "DELETED_TODO":
			return [...state.filter((todo) => todo.id !== action.id)];
		case "GOT_TODOS":
			return [...state, ...action.todos];
		case "MARKED_COMPLETE":
		case "MARKED_INCOMPLETE":
			return [
				...state.map((todo) =>
					todo.id === action.id
						? { ...todo, isCompleted: !todo.isCompleted }
						: todo
				),
			];
		default:
			return [...state];
	}
};

export default todoReducer;
