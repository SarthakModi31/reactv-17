import { Card, Col, Row } from 'antd';
import React from 'react';

interface categorieprops {
    categorieData: any;
    modelRef:any;
    setProducts:any;
    selectedProducts:any;
  }
const Categories = (props:categorieprops) => {
  const {categorieData , modelRef, setProducts, selectedProducts} = props;  

  return (
    <>
    {categorieData.map((categories: any) => {
        return (
              <React.Fragment key={categories._id}>
                <Row gutter={16}>
                {categories.subcategories.map((subcategorie: any) => {
                    return (
                    <React.Fragment key={subcategorie.id}>
                        <Col span={6}>
                            <div style={{marginBottom:'100px'}}>
                            <span onClick={() => {
                                if (modelRef.current) {
                                  setProducts({...selectedProducts, Products:subcategorie?.products,subcategoriename:subcategorie.name});
                                  modelRef.current.openModal();
                                }
                              }} >
                          <Card
                            className={`${categories._id=== selectedProducts.categorie && 'active' } `}
                            title={`subcategorie :- ${subcategorie.name}`}
                            bordered={true}
                          > Product :- {subcategorie?.products[0]?.name}
                          </Card>
                            </span>
                            </div>
                        </Col>
                    </React.Fragment>
                  );
                })}
                </Row>
              </React.Fragment>
            );
          })}
    </>
  )
}

export default Categories;