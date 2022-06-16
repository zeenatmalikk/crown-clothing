import React from "react";
import PreviewCollection from "../../Component/PreviewCollection/PreviewCollection";
import { SHOP_DATA } from "./Shopdata";

const Shop = () => {
    return <div className="shop-page">
    {
        SHOP_DATA.map(({id,...otherCollectionProps})=>(
            <PreviewCollection key={id} {...otherCollectionProps}/>
            ))
        }
        
  </div>;
};

export default Shop;
