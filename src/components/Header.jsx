import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center py-5 space-y-2 ">
            <img src={logo} className="w-96" alt="" />
            <h2 className="text-lg font-semibold">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;