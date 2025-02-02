import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const SingleNews = ({ news }) => {
    console.log(news)
    return (
        <div className="border-gray-200 border-2 rounded-md mb-5">
            <div className="bg-gray-200 flex justify-between items-center px-5 py-3">
                <div className="flex gap-3 items-center">
                    <div className="">
                        <img className="w-16 rounded-full" src={news.author.img} alt="" />
                    </div>
                    <div>
                        <h4 className="text-xl font-medium">{news.author.name}</h4>
                        <p>{news.author.published_date}</p>
                    </div>
                </div>
                <div className="flex gap-5 text-3xl">
                    <Link><CiBookmark></CiBookmark></Link>
                    <Link><CiShare2></CiShare2> </Link>
                </div>
            </div>
            <div className="p-5 space-y-5">
                <h2 className="text-2xl font-semibold">
                    {news.title}
                </h2>
                <img src={news.image_url} alt="" />
                <p>{news.details.slice(0, 300)}</p>
                <div className="*:text-yellow-500 font-semibold">
                    <Link>Read More</Link>
                </div>
            </div>
            <hr />
            <div>

            </div>
        </div>
    );
};

export default SingleNews;

SingleNews.propTypes = {
    news: PropTypes.object
}

//  {
//     "_id": "7f5b80c1cdd4df0111918883eae07349",
//     "others_info": {
//         "is_todays_pick": false,
//         "is_trending": true
//     },
//     "category_id": "03",
//     "rating": {
//         "number": 4.5,
//         "badge": "Excellent"
//     },
//     "total_view": 1870,
//     "title": "Ukraine receives more military aid from allies on its independence day",
//     "author": {
//         "name": "system",
//         "published_date": "2022-08-24 23:15:00",
//         "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//     },
//     "thumbnail_url": "https://i.ibb.co/1vcgPzg/unsplash-Eh-Tc-C9s-YXsw-12.png",
//     "image_url": "https://i.ibb.co/PxC67LV/unsplash-Eh-Tc-C9s-YXsw-1.png",
//     "published_date": "2022-08-24 18:00:00",
//     "details": "U.S. President Joe Biden announced Wednesday that he is sending $2.98 billion US in new... readfullstory"
// }
//  *
//  *
//  */