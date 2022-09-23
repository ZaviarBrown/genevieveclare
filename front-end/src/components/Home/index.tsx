import "./Home.css";
import { RootState } from "../../store/index";
import { connect } from "react-redux";
import FormCommander from "../FormCommander";
import { User } from "../../CustomTypings";

const Home = ({ user }: { user: User | null }) => {
    return (
        <>
            {
                !user || user.firstTime ? <FormCommander name="NewClient" /> : <div>Home</div>
                // Any upcoming appointments
                // No? Click here to make one

                // Past appointments
            }
        </>
    );
};

export default connect((state: RootState) => ({ user: state.session.user }))(Home);
