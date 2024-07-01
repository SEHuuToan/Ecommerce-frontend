import React, {createContext} from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = {all_product};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;

// import React, {createContext, useState, useEffect} from "react";
// import all_product from "../components/assets/all_product";
// import { axiosGet } from "../utils/axiosUtils";

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//     const [product, setProduct] = useState([]);
//     const getAllProduct = async () => {
//         const res = await axiosGet('all-product')
//         setProduct(res.data);
//     }
//     const contextValue = product;
//     useEffect(() => {
//         getAllProduct();
//       }, []);
//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;