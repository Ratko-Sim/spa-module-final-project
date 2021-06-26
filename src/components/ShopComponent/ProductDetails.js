import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProducts } from '../../Redux/actions/productActions';
import "./ProductDetails.scss";

export const ProductDetails = () => {
  const product = useSelector((state) => state.product)
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId)

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log('Err', err)
      })
    console.log(response.data)
    dispatch(selectedProducts(response.data))
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProducts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])
  return (
    <div>
      {
        Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <>

            <div className="card-details">
              <div className="card-image-details-box">
                <img src={image} alt={title} />
              </div>
              <div className="card-product-color-details">
                <span></span>
                <span></span>
                <span></span>
              </div>


              <div className="card-content-details">
                <div className="card-category-details">{category}</div>
                <div className="card-title-details"><h4>{title}</h4></div>
                <div className="card-price-details"><h2>{price} €</h2></div>
                <div className="card-description-details">{description}</div>
              </div>

              <button className="card-link-details">Ad to Cart</button>

            </div>



          </>
        )
      }
    </div>
  )
}
