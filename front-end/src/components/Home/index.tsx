import './Home.css'
import { RootState } from "../../store/index";
import { connect } from "react-redux";
import NewUserForm from "../NewUserForm";
import { User } from "../../CustomTypings";

const Home = ({ user }: { user: User | null }) => {
  return (
    <>
      {user?.firstTime ? (
        <NewUserForm></NewUserForm>
      ) :
        <div>Home</div>
      }
    </>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  Home
);