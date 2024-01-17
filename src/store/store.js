import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: reducer,
  

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
