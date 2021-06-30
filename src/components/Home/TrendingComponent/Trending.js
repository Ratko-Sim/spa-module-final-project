import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/productActions";
import { TrendingProductComponent } from "./TrendingProductComponent";
import "./Trending.scss";

//// All this is for Swiper ////
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import "swiper/components/scrollbar/scrollbar.min.css";
// import SwiperCore, { Scrollbar, Mousewheel } from "swiper/core";
// SwiperCore.use([Scrollbar, Mousewheel]);

const Trending = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products?limit=12")
      .catch((err) => {
        console.error(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="trending-section">
      <h1>Trending Products</h1>
      <div className="trending-section-wrapper">
        {products.map((product, i) => (
            <TrendingProductComponent
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
        ))}
      </div>
    </div>
  );
};

export default Trending;
