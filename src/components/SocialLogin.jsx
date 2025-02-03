import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold mb-3">Login With</h2>
            <div className="*:w-full space-y-4">
                <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;