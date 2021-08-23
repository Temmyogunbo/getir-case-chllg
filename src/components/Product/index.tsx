import { IProduct } from '../../types';

export const Product = ({ product }: { product: IProduct }) => (
  <div className="w-32 p-4">
    <div className="p-4 bg-gray-100 rounded-md">
      <img className="" src="/icons/product.jpeg" alt="Product" />
    </div>
    <div>
      <div className=" p-2">
        <span className="text-blue-400 font-semibold">£ {product.price}</span>
      </div>
      <div>
        <span className="text-gray-900 font-semibold leading-3 text-sm">
          {product.name}
        </span>
      </div>
    </div>
  </div>
);
