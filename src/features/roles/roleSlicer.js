import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchGetAllRole} from "./roleAPI";

const initialState = {
    roles: [],
    status: null
}

export const getAllRolesAsync = createAsyncThunk(
    'roles/getAll',
    async (dispatch, getState) => {
        return await fetchGetAllRole();
    }
)
export const roleSlice = createSlice({
    name: 'role',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllRolesAsync.pending, (state) => {
            state.status = 'loading';
            })
            .addCase(getAllRolesAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.roles = action.payload;
            })
            .addCase(getAllRolesAsync.rejected, (state) => {
                state.status = 'failed';
            })
    }
})

export default roleSlice.reducer