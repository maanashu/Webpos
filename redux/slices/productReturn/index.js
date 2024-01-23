import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 loading:false,
 invoiceByInvoiceId:null,
 searchBySKU:null,
};

export const returnSlice = createSlice({
  name: "return",
  initialState,
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
} = returnSlice.actions;

export const selectReturnData = (state) => state.return;

export default returnSlice.reducer;
