import { put, call, takeEvery, StrictEffect } from "redux-saga/effects";

import todoApi from "api/todoApi";
import {
	gotTodos,
	markedCompleteAction,
	markedIncompleteAction,
	createdTodoAction,
	deletedTodoAction,
	createTodoAction,
	deleteTodoAction,
	markCompleteAction,
	markIncompleteAction,
	actionIds,
} from "types/actionsType";
import { AxiosResponse } from "axios";

// WATCHERS
export function* todoSaga(): Generator<StrictEffect> {
	yield takeEvery(actionIds.CREATE_TODO, createTodoWorker);
	yield takeEvery(actionIds.DELETE_TODO, deleteTodoWorker);
	yield takeEvery(actionIds.GET_TODOS, getTodosWorker);
	yield takeEvery(actionIds.MARK_COMPLETE, markCompleteWorker);
	yield takeEvery(actionIds.MARK_INCOMPLETE, markIncompleteWorker);
}

// WORKERS
function* getTodosWorker() {
	try {
		const response: AxiosResponse = yield call(todoApi.get, "/todo");
		switch (response.status) {
			case 200:
				const data: gotTodos = {
					type: "GOT_TODOS",
					todos: response.data.data.todos,
				};
				yield put(data);
		}
	} catch (err) {}
}

function* createTodoWorker({ title }: createTodoAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.post, "/todo", {
			title,
		});
		switch (response.status) {
			case 201:
				const data: createdTodoAction = {
					type: "CREATED_TODO",
					todo: response.data.data.todo,
				};
				yield put(data);
		}
	} catch (err) {}
}

function* deleteTodoWorker({ id }: deleteTodoAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.delete, `/todo/${id}`);
		switch (response.status) {
			case 200:
				const data: deletedTodoAction = {
					type: "DELETED_TODO",
					id,
				};
				yield put(data);
		}
	} catch (err) {}
}

function* markCompleteWorker({ id }: markCompleteAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.patch, `/todo/${id}`, {
			isCompleted: true,
		});
		switch (response.status) {
			case 200:
				const data: markedCompleteAction = {
					type: "MARKED_COMPLETE",
					id,
				};
				yield put(data);
		}
	} catch (err) {}
}

function* markIncompleteWorker({ id }: markIncompleteAction) {
	try {
		const response: AxiosResponse = yield call(todoApi.patch, `/todo/${id}`, {
			isCompleted: false,
		});
		switch (response.status) {
			case 200:
				const data: markedIncompleteAction = {
					type: "MARKED_INCOMPLETE",
					id,
				};
				yield put(data);
		}
	} catch (err) {}
}
