import { useAppDispatch, RootState } from "../../store/index";
import { useEffect, useState } from "react";
import { getAppointments, getUserAppointments } from "../../store/appointments";
import { connect } from "react-redux";
import { Appointment } from "../../CustomTypings";

const AppointmentList = ({
    appointments,
    userAppointments,
}: {
    appointments: Appointment[];
    userAppointments: Appointment[];
}) => {
    const dispatch = useAppDispatch();
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        dispatch(getAppointments());
    }, [dispatch]);

    const getUserAppointmentFormSubmitHandler = () => {
        dispatch(getUserAppointments(userEmail));
        setUserEmail("");
    };

    return (
        <>
            {appointments &&
                appointments.map((appointment) => {
                    return (
                        <div key={appointment.id}>
                            <div>{`id: ${appointment.id}`}</div>
                            <div>{`userId: ${appointment.userId}`}</div>
                            <div>{`dateTime: ${appointment.dateTime}`}</div>
                            <div>{`status: ${appointment.status}`}</div>
                            <div>{`type: ${appointment.type}`}</div>
                            <div>{`createdAt: ${appointment.createdAt}`}</div>
                            <div>{`updatedAt: ${appointment.updatedAt}`}</div>
                        </div>
                    );
                })}

            <div>
                <label>
                    User Email
                    <input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
                </label>
                <button onClick={() => getUserAppointmentFormSubmitHandler()}>Get User Appointments</button>
            </div>

            {userAppointments &&
                userAppointments.map((appointment) => {
                    return (
                        <div key={appointment.id}>
                            <div>{`id: ${appointment.id}`}</div>
                            <div>{`userId: ${appointment.userId}`}</div>
                            <div>{`dateTime: ${appointment.dateTime}`}</div>
                            <div>{`status: ${appointment.status}`}</div>
                            <div>{`type: ${appointment.type}`}</div>
                            <div>{`createdAt: ${appointment.createdAt}`}</div>
                            <div>{`updatedAt: ${appointment.updatedAt}`}</div>
                        </div>
                    );
                })}
        </>
    );
};

export default connect((state: RootState) => ({
    appointments: state.appointments.allAppointments,
    userAppointments: state.appointments.userAppointments,
}))(AppointmentList);
