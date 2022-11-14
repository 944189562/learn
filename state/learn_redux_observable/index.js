import configureStore from "./store/index.js";

const store = configureStore()

store.dispatch('PING')