import { Appointment } from "../CustomTypings";
import { csrfFetch } from "./csrf";

const GET_APPOINTMENTS = "appointments/getAppointments";

const GET_USER_APPOINTMENTS = "appointments/getUserAppointments";

const getAllAppointments = (appointments: Appointment[]) => {
    return {
        type: GET_APPOINTMENTS,
        payload: appointments,
    };
};

const getAUserAppointments = (appointments: Appointment[]) => {
    return {
        type: GET_USER_APPOINTMENTS,
        payload: appointments,
    };
};

export const getAppointments = () => async (dispatch: any) => {
    const response = await csrfFetch("/api/appointments");
    const data = await response.json();
    dispatch(getAllAppointments(data.appointments));
    return data.appointments;
};

export const getUserAppointments = (email: string) => async (dispatch: any) => {
    const response = await csrfFetch(`/api/appointments/${email}`);
    const data = await response.json();
    dispatch(getAUserAppointments(data.appointments));
    return data.appointments;
};

const initialState: { allAppointments: []; userAppointments: [] } = { allAppointments: [], userAppointments: [] };

const appointmentReducer = (state = initialState, action: any) => {
    let newState;
    switch (action.type) {
        case GET_APPOINTMENTS:
            newState = { ...state };
            newState.allAppointments = action.payload;
            return newState;
        case GET_USER_APPOINTMENTS:
            newState = { ...state };
            newState.userAppointments = action.payload;
            return newState;
        default:
            return state;
    }
};

export default appointmentReducer;
