import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightContent from "../layouts/layoutContents/RightContent";

const NewsDetails = () => {
    const data = useLoaderData();
    const newsData = data.data[0];
    console.log(newsData);
    return (
        <div className="container mx-auto">
            <header>
                <Header></Header>
            </header>
            <main className="grid grid-cols-12 gap-10">
                <section className="col-span-9">
                    <h2 className="font-semibold">Dragon News</h2>


                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={newsData.thumbnail_url}
                                alt="Shoes"
                                className="rounded-xl w-full h-[500px]" />
                        </figure>
                        <div className="px-10 py-10 items-center">
                            <h2 className="card-title">{newsData.title}</h2>
                            <p className="text-justify">{newsData.details}</p>
                            <div className="card-actions mt-5">
                                <Link to={`/category/${newsData.category_id}`} className="btn btn-primary">Back to Category</Link>
                            </div>
                        </div>
                    </div>


                </section>
                <aside className="col-span-3">
                    <RightContent></RightContent>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;