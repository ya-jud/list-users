import { configureStore, combineReducers, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IUserState } from './types'

// export const getUsers = createAsyncThunk("getUsers", async () => {
	
// 	await axios
// 		.get('https://jsonplaceholder.typicode.com/users')
// 	 	.then((response) => {
// 			console.log(Users.getInitialState().users)
// 			// Users.getInitialState().users.push(response.data)
// 			Users.getInitialState().users=response.data
// 			console.log(Users.getInitialState().users)
// 			return Users.getInitialState().users.push(response.data);
// 	 	});
	
// });

// export const getUsers = createAsyncThunk('getUsers', async () => {
// 	await axios
// 		.get('https://jsonplaceholder.typicode.com/users')
// 		.then(response => {
// 			console.log(response.data)
// 			return response.data;
// 		});
// });

export const getUsers = createAsyncThunk('getUsers', async () =>{
	const response = await axios.get('https://jsonplaceholder.typicode.com/users')
	Users.actions.setUsers(response.data);
});

const initialState = {
	users: [] as any,
};

const Users = createSlice({
	name: 'users',
	initialState,
	// initialState: {
	// 	users: [{
	// 		id: 0,
	// 		name: "",
	// 		username: "",
	// 		email: "",
	// 		address: {
	// 			street: "",
	// 			suite: "",
	// 			city: "",
	// 			zipcode: "",
	// 			geo: {
	// 				lat: "",
	// 				lng: ""
	// 			}
	// 		},
	// 		phone: "",
	// 		website: "",
	// 		company: {
	// 			name: "",
	// 			catchPhrase: "",
	// 			bs: ""
	// 		}
	// 	}],
	// } as IUserState,
	reducers: {
		setUsers: (state, action) => {
			console.log(state.users)
			state.users.push(action.payload);
			console.log(state.users)
		},
	},
	// extraReducers: {
	// 	[getUsers.fulfilled as any]: (state, { payload }) => {
	// 		return { ...state, users: payload }
	// 	}
	// },
});

const reducer = combineReducers({
	user: Users.reducer
});

export const store = configureStore({
	reducer: reducer
});

export const actions = {
	Users: Users.actions
};

export default Users.reducer;
export const { setUsers } = Users.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;