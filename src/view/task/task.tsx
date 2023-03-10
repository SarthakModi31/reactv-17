import React, { useEffect, useReducer, useRef, useState } from "react";
// import { getProductData } from "./task.service";
import { Reducer } from "../../utils/reducer";
import { reducerTypes } from "../../utils/action.type";
import Sidebar from "./sidebar";
import CategorieData from '../../utils/database/db.json';
import ModalWrapper from "../../utils/modelwrapper";
import Categories from "./categories";

const INITIAL_STATE = {
  loading: true,
  data: [],
  error: false,
};

const Task: React.FC = () => {
  const modelRef: any = useRef(null);
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [selectedProducts, setProducts] = useState({
    Products:[],
    categorie:'',
    subcategoriename: ''
  });

  const productsModel = () => (
    <ModalWrapper ref={modelRef} title={selectedProducts?.subcategoriename}>
        {   
         selectedProducts?.Products.map((product:any)=>{
            return(
                <h2>{product.name}</h2>
            );
         })   
        }
    </ModalWrapper>
  );
  const getProductsData = async () => {
    try {
      dispatch({
        type: reducerTypes.FETCH_START,
        payload: [],
      });

      // const response = await getProductData();
      dispatch({
        type: reducerTypes.FETCH_COMPLETE,
        payload: CategorieData.taskData,
      });
    } catch (error) {
      dispatch({
        type: reducerTypes.FETCH_ERROR,
        payload: [],
      });
    }
  };
  useEffect(() => {
    getProductsData();  
  }, []);
  
  return (
    <>
      <h2>Task</h2>
      { state.loading && state.data.length === 0? (
        <h2> Loading....</h2>
        ) : (
          <>
          {productsModel()}
          <Sidebar categorieData={state.data} setProducts={setProducts} selectedProducts={selectedProducts}/>
          <Categories categorieData={state.data} modelRef={modelRef} setProducts={setProducts} selectedProducts={selectedProducts}/>
        </>
      )}
    </>
  );
};

export default Task;