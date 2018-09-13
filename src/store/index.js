import { createStore, applyMiddleware } from 'redux';
import Reactotron from 'config/Reactotronconfig';
import reducers from './reducers';


const middleware = [];
const createAppropriateStore = __DEV__ ? Reactotron.createStore : createStore;

const store = createAppropriateStore(reducers, applyMiddleware(...middleware));

export default store;
