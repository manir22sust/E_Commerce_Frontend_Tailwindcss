import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./orderAPI";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.state = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.state = "idle";
        state.orders.push(action.payload);
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = orderSlice.actions;

export default orderSlice.reducer;

export const createOrderAsync = createAsyncThunk(
  "order/createOrder",
  async (order) => {
    const response = await createOrder(order);
    return response.data;
  }
);
