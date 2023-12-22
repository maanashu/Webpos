import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
};

export const settingSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        getSecurityScanerCode: (state) => {
            state.loading = true;
        },
        setGetSecurityScanerCode: (state, action) => {
            state.loading = false;
        },
        onErrorStopLoad: (state) => {
            state.loading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getSecurityScanerCode,
    setGetSecurityScanerCode,
    onErrorStopLoad
} = settingSlice.actions;

export const settingInfo = (state) => state.setting;

export default settingSlice.reducer;



