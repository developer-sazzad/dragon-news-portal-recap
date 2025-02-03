import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightContent from "../layouts/layoutContents/RightContent";

const NewsDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="container mx-auto">
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-10">
                <section className="col-span-9">
                 <h2 className="font-semibold">Dragon News</h2>

                </section>
                <aside className="col-span-3">
                    <RightContent></RightContent>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;