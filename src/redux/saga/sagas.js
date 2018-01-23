import {watchHome} from './home';

export default function* rootSaga() {
  yield [
    watchHome(),
  ];
}
