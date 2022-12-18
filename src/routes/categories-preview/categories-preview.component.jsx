import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
      <div className='shop-container'>
      {
         Object.keys(categoriesMap).map((title)=>{
          const products = categoriesMap[title];
          return (
            <CategoryPreview title={title} products={products}/>
          )
         })

      }
      </div>
        
    )
}
export default CategoriesPreview;