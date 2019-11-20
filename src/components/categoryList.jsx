import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadData } from "../utils/loadData";

function CategoryList() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
    getCategories();
  });

  const getCategories = async () => {
    const categories = await loadData(
      `https://api.chucknorris.io/jokes/categories`
    );

    setCategories(categories);
  };

  return (
    <ul>
      {categories.map((category, id) => {
        return (
          <li key={`category-${id}`}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
