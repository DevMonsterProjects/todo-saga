import axios from "axios";

const todoApi = axios.create({
	baseURL: "/api/v1",
});

export default todoApi;
