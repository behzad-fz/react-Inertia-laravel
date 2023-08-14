import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use 'localStorage' or 'sessionStorage'

import { store, persistor } from './configureStore';


const persistConfig = {
    key: 'root', // Key for the persisted state
    storage,    // Storage engine (localStorage, sessionStorage, etc.)
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// const persistor = persistStore(store); // Create the persistor

// const store = configureStore({
//     reducer: {
//         auth: persistedReducer,
//         // Add other reducers here if needed
//     },
// });

export { store, persistor };
