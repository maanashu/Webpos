import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebarCountData: {},
    loading: false,
};

export const shippingSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        getShippingsSidebarCount: (state) => {
            state.loading = true;
        },
        setSidebarCountData: (state, action) => {
            state.loading = false;
            state.sidebarCountData = action?.payload;
        },
        changeStatusOfOrder: (state) => {
            state.loading = true;
        },
        getShippingsStatus: (state) => {
            state.loading = true;
        },
        getShippingstodayStatus: (state) => {
            state.loading = true;
        },
        getShippingGraphData: (state) => {
            state.loading = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getShippingsSidebarCount,
    setSidebarCountData,
    changeStatusOfOrder,
    getShippingsStatus,
    getShippingstodayStatus,
    getShippingGraphData
} = shippingSlice.actions;

export const selectsShippingData = (state) => state.shipping;
export default shippingSlice.reducer;