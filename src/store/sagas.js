import {takeEvery, put} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import axios from 'axios';
import { getAxiosAction} from './actionCreators';
function* mySagas(){//必须是Generator函数，让他被导出运行
// yield takeEvery("USER_FETCH_REQUESTED",fetchUser)//takeevery:捕捉每一个
yield takeEvery(GET_INIT_LIST,getInitList)//捕获到GET_INIT_LIST方法，执行getInitList函数
}
function* getInitList(){//写一些异步逻辑
      const res=yield axios.get('https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312');
        const data=res.data.data.author.loginname;
        const action=getAxiosAction(data);
        yield put(action);
       console.log(12,action)

    //     store.dispatch(action);
}
export default mySagas;