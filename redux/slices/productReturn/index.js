import { createSlice } from "@reduxjs/toolkit";
import { restAllData } from "../commonActions";

const initialState = {
  loading: false,
  invoiceByInvoiceId: null,
  searchBySKU: null,
  returnToInventory: "",
  invoiceData: "",
};

export const returnSlice = createSlice({
  name: "return",
  initialState,
  extraReducers: (builder) => builder.addCase(restAllData, () => initialState),
  reducers: {
    searchInvoiceByInvoiceId: (state) => {
      state.loading = true;
    },
    setSearchInvoiceByInvoiceId: (state, action) => {
      state.loading = false;
      state.invoiceByInvoiceId = action?.payload?.payload;
    },
    searchBySKU: (state) => {
      state.loading = true;
    },
    setSearchBySKU: (state, action) => {
      state.loading = false;
      state.searchBySKU = action?.payload?.payload;
    },
    returnToInventory: (state) => {
      state.loading = true;
    },
    setReturnToInventory: (state, action) => {
      state.loading = false;
      state.returnToInventory = action?.payload?.payload;
    },
    setInvoiceData: (state, action) => {
      state.invoiceData = action.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onErrorStopLoad,
  setSearchInvoiceByInvoiceId,
  searchBySKU,
  setSearchBySKU,
  searchInvoiceByInvoiceId,
  setReturnToInventory,
  returnToInventory,
  setInvoiceData,
} = returnSlice.actions;

export const selectReturnData = (state) => state.return;

export default returnSlice.reducer;
