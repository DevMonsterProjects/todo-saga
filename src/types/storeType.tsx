export type todo = {
	id: string;
	title: string;
	isCompleted: boolean;
};

interface storeType {
	todos: todo[];
}

export default storeType;
