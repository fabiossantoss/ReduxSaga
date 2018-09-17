import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';


const tron = Reactotron
  .configure({ name: 'ReduxSaga', host: '192.168.0.107' })
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect();

console.tron = tron;

tron.clear();
export default tron;
