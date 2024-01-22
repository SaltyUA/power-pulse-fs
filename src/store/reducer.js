import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { persistReducer } from 'redux-persist';
import { productsReducer } from './products/sliceProducts';
import { exercisesReducer } from './exercises/sliceExercises';
import { diaryReducer } from './diary/sliceDiary';
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  products: productsReducer,
  exercises: exercisesReducer,
  diary: diaryReducer,
});
