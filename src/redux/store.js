import { createHistory } from 'history';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';

const history = useRouterHistory(createHistory)();
const store = configureStore({}, history);

export const finalHistory = syncHistoryWithStore(history, store);

export default store;
