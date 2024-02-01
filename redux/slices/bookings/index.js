import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getAppointment: [],
  geAppointmentById: [],
  appointmentStatus: null,
  staffUsers: [],
  posUserRole: null,
  loading: false,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    getAppointments: (state) => {
      state.loading = true;
    },
    setGetAppointments: (state, action) => {
      const { getAppointment } = state;

      const responseData = action?.payload?.payload;

      const currentPages = responseData?.current_page;
      const totalPages = responseData?.total_pages;
      const pages = { currentPages: currentPages, totalPages: totalPages };
      const appointments = responseData?.data;

      let updatedAppointments;

      // Check if the page number is 1
      if (pages?.currentPages === 1) {
        // If it's page 1, replace the existing data with the new data
        updatedAppointments = appointments;
      } else {
        // If it's not page 1, merge the existing data with the new data based on 'id'
        const mergedAppointments = getAppointment.map(
          (existingItem) =>
            appointments.find((newItem) => existingItem.id === newItem.id) ||
            existingItem
        );

        // Add any new unique appointments that were not in the existing data
        const newUniqueAppointments = appointments.filter(
          (newItem) =>
            !getAppointment.some(
              (existingItem) => existingItem.id === newItem.id
            )
        );

        updatedAppointments = [...mergedAppointments, ...newUniqueAppointments];
      }

      state.loading = false;
      state.getAppointment = updatedAppointments;
      state.pages = pages;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAppointments, setGetAppointments, onErrorStopLoad } =
  bookingsSlice.actions;

export const bookingsDetails = (state) => state.bookings;

export default bookingsSlice.reducer;
