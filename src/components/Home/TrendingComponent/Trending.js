import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/productActions";
import { TrendingProductComponent } from "./TrendingProductComponent";
import "./Trending.scss";

//// All this is for Swiper ////
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

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
      <div className="title-underline"></div>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "#515054",
        }}
        slidesPerView={5}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
          },
          "@0.50": {
            slidesPerView: 2,
          },
          "@0.90": {
            slidesPerView: 3,
          },
          "@1.25": {
            slidesPerView: 4,
          },
          "@1.50": {
            slidesPerView: 5,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {products.map((product, i) => (
          <SwiperSlide key={i} className="swiper-slide">
            <TrendingProductComponent
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trending;
