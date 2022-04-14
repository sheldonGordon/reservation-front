import { configureStore } from '@reduxjs/toolkit'
import roleReducer from "../features/roles/roleSlicer";

export const store = configureStore({
    reducer: {
        roles: roleReducer
    },
})