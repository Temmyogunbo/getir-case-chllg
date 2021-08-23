import { IProduct, IOrder, ItemTypes } from '../../types';
import { useSelector, useDispatch} from 'react-redux'
import { getProducts, getItemTypes } from '../../selectors/products';
import { getOrders } from '../../selectors/orders';
import { setOrder, incrementOrder, setItemType, getProducts as getProductsAction } from '../../actions';

export const useProducts = () => {
  const products = useSelector(getProducts);
  const orders = useSelector(getOrders);

  const dispatch = useDispatch();

  const handleSetProduct = (product: IProduct) => {
    if(orders.length !== 0) {
      const order = orders.filter(({ slug }: IOrder) => slug === product.slug);
      const hasOrder = order.length !== 0;

      if(hasOrder) {
        dispatch(incrementOrder(product));
        return
      }
    }
    dispatch(setOrder(product))
  }

  const handleSetItemType = (itemType: ItemTypes) => {
    dispatch(setItemType(itemType));
    dispatch(getProductsAction())
  }

  return { models: { products, }, operations: { handleSetProduct, handleSetItemType }}
}