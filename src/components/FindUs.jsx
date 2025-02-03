import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3 mt-10">Find Us On</h2>
            <div className="join flex join-vertical">
                <button className="btn border-gray-200 btn-outline join-item justify-start">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn border-gray-200 btn-outline join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
                <button className="btn border-gray-200 btn-outline join-item justify-start">
                    <FaTwitter></FaTwitter> Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUs;