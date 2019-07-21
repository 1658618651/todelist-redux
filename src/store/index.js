import {createStore,applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import todoSagas from './sagas';
const sageMiddleware =createSagaMiddleware();
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // 有指定扩展选项，像name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sageMiddleware)
    // 其他store增强器（如果有的话）
);

export const store = createStore(reducer, enhancer);
sageMiddleware.run(todoSagas);
//创建一个store,但是store不知道怎么管理数据，需要创建一个笔记本，笔记本里面存储了数据，来帮助store管理数据。笔记本就是reducer.js
//笔记本被引入了进来，笔记本作为第一个store传给了store
//store也就知道了里面有两个数据


