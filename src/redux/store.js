import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/sagas'
const logger = createLogger({
  predicate:true,
  collapsed:true,
});
export default function BuildStore(history) {
  const reduxRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    applyMiddleware(
      ...[
      reduxRouterMiddleware,
      sagaMiddleware,
      logger]
    )
  );
  sagaMiddleware.run(rootSaga)
  return store;
}
