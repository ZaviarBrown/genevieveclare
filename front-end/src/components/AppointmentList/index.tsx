import { useAppDispatch, RootState } from "../../store/index";
import { useEffect } from "react";
import { getAppointments } from "../../store/appointments";
import { connect } from "react-redux";
import { Appointment } from "../../CustomTypings";

const AppointmentList = ({ appointments }: { appointments: Appointment[] }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAppointments());
    }, [dispatch]);

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
        </>
    );
};

export default connect((state: RootState) => ({ appointments: state.appointments }))(AppointmentList);
