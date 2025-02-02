import { useLoaderData } from "react-router-dom";
import SingleNews from "./SingleNews";

const CategoryNews = () => {
    const { data: news } = useLoaderData();
    console.log(news)
    return (
        <div>
            <h2 className="text-xl font-semibold mb-3">Dragon News</h2>
            <p className="font-medium text-gray-300">{news.length} News Found in this Category.</p>
            <div>
                {
                    news.map(singleNews => <SingleNews key={singleNews._id} news={singleNews}></SingleNews>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;