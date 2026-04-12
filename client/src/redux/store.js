import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//we have many reducers (user, products, cart, etc.)
//Redux needs one single reducer — so combineReducers merges them all into one big object
const rootReducer = combineReducers(
  {
    user:userReducer
  }
);


//how to save data
const persistConfig = {
  key:'root',
  storage,
  version:1,
};

//User logs in → saved in RAM → ALSO saved in localStorage → refresh → loaded back from localStorage → STILL THERE ✅
const persistedReducer = persistReducer(persistConfig,rootReducer);



export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})


export const persistor = persistStore(store);



/*

App Starts
    ↓
PersistGate checks localStorage
    ↓
Found saved data? → Load into Redux Store
    ↓
App renders with previous state (user still logged in!) ✅

User does something (login/logout)
    ↓
Redux Store updates
    ↓
persistReducer AUTO-SAVES to localStorage 💾

Page Refreshes → cycle repeats ♻️

*/