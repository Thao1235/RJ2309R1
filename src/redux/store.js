import rootSaga from "../saga/userSaga";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;
