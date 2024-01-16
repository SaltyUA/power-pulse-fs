import storage from 'redux-persist/lib/storage';
import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: reducer,
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
