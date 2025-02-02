import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftContent = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])

    // category_id: "08"
    // category_name: "All News"
    return (
        <div className="join flex rounded-none join-vertical">
            {
                categories.map(category => <NavLink
                    to={`category/${category.category_id}`}
                    className="btn w-full bg-white join-item"
                    key={category.category_id}>
                    {category.category_name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftContent;