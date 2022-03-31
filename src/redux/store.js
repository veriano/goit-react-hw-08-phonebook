import contacts from './contacts/reducers';
import combineReducers from './contacts/reducers';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contacts/contactsSlice';
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import  authReducer from 'redux/auth/auth.slice';

const PersistConfig = {
  key: 'contacts',
  // key: 'auth',
  storage,
  blacklist: ['filter'],
  // whitelist: ['token'],
};

// const middleware = [
//   getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const rootReducer = combineReducers;

const persistedReducer = persistReducer(PersistConfig, rootReducer);


const store = configureStore({
  reducer: {
    persistedReducer,
    // auth: persistedReducer(PersistConfig, authReducer),
    contacts,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
})

const persistor = persistStore(store);

setupListeners(store.dispatch)

export { store, persistor };

