import { Product } from '../Product';
import { IProduct, ItemTypes } from '../../types';
import { useProducts } from './useProducts';
import { Loading } from '../common/Loader';
import isEmpty from 'lodash.isempty';

export const Products = () => {
  const { models, operations } = useProducts();
  const { products} = models;
  const { handleSetProduct, handleSetItemType } = operations;

  if(isEmpty(products)) return (<Loading />)

  return (
    <div className="px-2 py-4 ">
      <h3 className="p-2 mb-2 text-gray-700 font-normal text-lg">Products</h3>
      <div className="p-2 mb-2">
        <button className="bg-blue-400 mr-2 px-4 py-1 font-semibold rounded-sm text-white" onClick={() => handleSetItemType(ItemTypes.Mug)}>{ItemTypes.Mug}</button>
        <button className="bg-pink-100 px-4 py-1 font-normal rounded-sm text-blue-400" onClick={() => handleSetItemType(ItemTypes.Shirt)}>{ItemTypes.Shirt}</button>
      </div>
    <div className="flex flex-wrap justify-center align-center p-4 bg-white">

      {
      products?.map((product: IProduct, index: number) => {
      return (
        <div key={`${product.name}-${index}`} className="">
        <Product product={product}  />
        <div className="p-4">

        <button className="bg-blue-400 w-full rounded text-white font-medium" onClick={() => handleSetProduct(product)}>Add</button>
        </div>
        </div>
      )
    })
      }
    </div>
    </div>
  )
}