import { createSlice, configureStore } from "@reduxjs/toolkit";

const intialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter", // identifier
  intialState: intialState,
  reducer: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authInitialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    authInitialState,
    reducer: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({ reducer: { counter: counterSlice.reducer, auth: authSlice.actions } });
export const counterActions = counterSlice.actions();
export const authActions = authSlice.actions();

export default store;
