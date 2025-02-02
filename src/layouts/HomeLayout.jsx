import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftContent from "./layoutContents/LeftContent";
import RightContent from "./layoutContents/RightContent";

const HomeLayout = () => {
    return (
        <div>
            <header className="container mx-auto">
                <Header></Header>
            </header>
            <nav className="container mx-auto bg-gray-200">
                <Navbar></Navbar>
            </nav>
            <main className="container mx-auto grid md:grid-cols-12 gap-5 py-5">
                <aside className="col-span-3">
                    <LeftContent></LeftContent>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightContent></RightContent>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;