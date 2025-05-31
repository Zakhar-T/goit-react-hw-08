import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};
const persistFiltersConfig = {
  key: 'filters',
  storage,
};

const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReducer,
);
const persistFiltersReducer = persistReducer(
  persistFiltersConfig,
  filtersReducer,
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: persistFiltersReducer,
  },
});

export const persistor = persistStore(store);
