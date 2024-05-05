import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "../tasksSlice";
import { getExampleTasks } from "../../features/tasks/getExampleTask";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "something went wrong");
    }
}

export function* watchFetchExampleTasks() {
    console.log("saga jest podłaczona")
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}