import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskSlice from './taskSlice';
import {persistStore,persistReducer ,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer=combineReducers({
    fortasks:taskSlice
})

const persistConfigurations={
    key : 'root',
    storage,
}

const persistedReducer=persistReducer(persistConfigurations,rootReducer);

const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor=persistStore(store);

export {store,persistor};
