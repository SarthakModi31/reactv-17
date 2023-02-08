import { Menu } from "antd";
import { useEffect } from "react";

interface sidebarprops {
  categorieData: any;
  setProducts:any;
  selectedProducts:any;
}

const Sidebar = (props:sidebarprops) => {
  const {categorieData, setProducts, selectedProducts} = props;  
  const onsiderbarClick = (event:any) =>{
    setProducts({...selectedProducts,categorie:event.key})
  };
  useEffect(() => {
    setProducts({...selectedProducts,categorie:categorieData[0]?._id})
  }, []);
  
  return (
    <div style={{ width: 256 }}>
      <Menu
        onClick={onsiderbarClick}
        defaultSelectedKeys={[categorieData[0]?._id]}
        mode="inline"
        theme="dark"
        items={categorieData.map((categorie: any) => {
          return { key: categorie._id, label: categorie.name };
        })}
      />
    </div>
  );
};

export default Sidebar;
