import React, { useEffect, useReducer } from "react";
import { getProductData, getlistData } from "./product.service";
import { Reducer } from "../../utils/reducer";
import {
  FETCH_START,
  FETCH_COMPLETE,
  FETCH_ERROR,
} from "../../utils/action.type";

const Product = () => {
  const INITIAL_STATE = {
    loading: false,
    data: [],
    error: false,
  };

  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [state2, dispatch2] = useReducer(Reducer, INITIAL_STATE);
  
  const getProductsData = async () => {
    try {
      dispatch({
        type: FETCH_START,
        payload: [],
      });

      const response = await getProductData();
      dispatch({
        type: FETCH_COMPLETE,
        payload: response?.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ERROR,
        payload: [],
      });
    }
  };
  
  const onBtnClick = async() =>{
    try {
        dispatch2({
          type: FETCH_START,
          payload: [],
        });
  
        const response = await getlistData();
        dispatch2({
          type: FETCH_COMPLETE,
          payload: response?.data,
        });
      } catch (error) {
        dispatch2({
          type: FETCH_ERROR,
          payload: [],
        });
      }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  console.log("state", state ,'state2', state2);

  return (
    <>
      <h2>Products Data</h2>
      <button onClick={onBtnClick}>Press me!</button>
      {state.loading ? (
        <h2>Loading</h2>
      ) : (
        <>
          {state.data.map((item: any) => {
            return <h3 key={item.id}>{item?.title}</h3>;
          })}
        </>
      )}
    </>
  );
};

export default Product;
