import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import * as sessionActions from "./store/session";
import Home from "./components/Home";
import { useAppDispatch, RootState } from "./store/index";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MainCalendar from "./components/MainCalendar";
import { User } from "./CustomTypings";
import Dev from "./components/Dev";
import FormCommander from "./components/FormCommander";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/index";
import AppointmentList from "./components/AppointmentList";

function App(props: { user: User | null }) {
    const dispatch = useAppDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    const user = props.user;

    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<LoginForm />} />

                    <Route path="/signup" element={<SignupForm />} />

                    <Route path="/calendar" element={<MainCalendar />} />

                    <Route path="/dev" element={<Dev />} />

                    <Route path="/appointment" element={<FormCommander name="Appointment" />} />

                    {user?.admin ? (
                        <Route path="/admin" element={<Admin></Admin>}>
                            <Route path="/admin/appointments" element={<AppointmentList />} />
                        </Route>
                    ) : (
                        <></>
                    )}

                    <Route path="*" element={<Home />} />
                </Routes>
            )}
        </>
    );
}

export default connect((state: RootState) => ({ user: state.session.user }))(App);
