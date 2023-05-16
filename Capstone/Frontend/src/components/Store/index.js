import {configureStore} from '@reduxjs/toolkit';

import { shopInventoryReducer } from './shop-inventory-slice';
import { authSliceReducer } from './auth-slice';
import { uiSliceReducer } from './ui-slice';
import { cartSliceReducer } from './cart-slice';

const store = configureStore({
    reducer: {
        shop: shopInventoryReducer, 
        auth: authSliceReducer,
        ui: uiSliceReducer,
        cart: cartSliceReducer,
    }
});

export default store;