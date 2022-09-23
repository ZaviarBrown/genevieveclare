import { Appointment } from "../CustomTypings";
import { csrfFetch } from "./csrf";

const GET_APPOINTMENTS = "appointments/getAppointments";

const getAllAppointments = (appointments: Appointment[]) => {
    return {
        type: GET_APPOINTMENTS,
        payload: appointments,
    };
};

export const getAppointments = () => async (dispatch: any) => {
    const response = await csrfFetch("/api/appointments");
    const data = await response.json();
    dispatch(getAllAppointments(data.appointments));
    return data.appointments;
};

const initialState: [] = [];

const appointmentReducer = (state = initialState, action: any) => {
    let newState;
    switch (action.type) {
        case GET_APPOINTMENTS:
            newState = { ...state };
            newState = action.payload;
            return newState;
        default:
            return state;
    }
};

export default appointmentReducer;
