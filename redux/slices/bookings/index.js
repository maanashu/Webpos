import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getAppointment: [],
  geAppointmentById: [],
  appointmentStatus: null,
  staffUsers: [],
  posUserRole: null,
  loading: false,
  timeSlots: null,
  timeSlotInterval: null,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    getAppointments: (state, action) => {
      if (!action?.payload?.params?.search) {
        state.loading = true;
      }
    },
    getStaffUsers: (state) => {
      state.staffUsersLoading = true;
    },
    setGetStaffUsers: (state, action) => {
      // state.loading = false;
      state.staffUsersLoading = false;
      const responseData = action?.payload?.payload;

      if (!responseData) {
        state.staffUsers = [];
        state.staffPages = null;
        return;
      }

      const currentPages = responseData?.current_page;
      const totalPages = responseData?.total_pages;
      const staffPages = { currentPages: currentPages, totalPages: totalPages };
      const staffUsersList = responseData?.pos_staff;

      state.staffUsers = staffUsersList;
      state.staffPages = staffPages;
    },
    updateAppointmentStatus: (state) => {
      state.loading = true;
    },
    setUpdateAppointmentStatus: (state, action) => {
      state.loading = false;
    },
    setGetAppointments: (state, action) => {
      const { getAppointment } = state;

      const responseData = action?.payload?.payload;

      if (!responseData) {
        state.loading = false;
        state.getAppointment = [];
        state.pages = null;

        return;
      }
      const currentPages = responseData?.current_page;
      const totalPages = responseData?.total_pages;
      const pages = { currentPages: currentPages, totalPages: totalPages };
      const appointments = responseData?.data;

      let updatedAppointments = [];

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
    getServiceTimeSlots: (state) => {
      state.serviceTimeSlotsLoading = true;
    },
    setGetServiceTimeSlots: (state, action) => {
      state.serviceTimeSlotsLoading = false;
      const responseData = action?.payload;

      if (!responseData) {
        state.timeSlots = null;
        state.timeSlotInterval = null;
        return;
      }

      state.timeSlots = responseData?.payload?.slots;
      state.timeSlotInterval = responseData?.payload?.interval;
    },
    reScheduleAppointment: (state) => {
      state.serviceRescheduling = true;
    },
    setReScheduleAppointment: (state, action) => {
      state.serviceRescheduling = false;
      const responseData = action?.payload;
    },
    onErrorStopLoad: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAppointments,
  setGetAppointments,
  onErrorStopLoad,
  updateAppointmentStatus,
  setUpdateAppointmentStatus,
  setGetStaffUsers,
  getStaffUsers,
  getServiceTimeSlots,
  setGetServiceTimeSlots,
  reScheduleAppointment,
  setReScheduleAppointment,
} = bookingsSlice.actions;

export const bookingsDetails = (state) => state.bookings;

export default bookingsSlice.reducer;
