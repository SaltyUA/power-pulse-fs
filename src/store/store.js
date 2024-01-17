import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
