import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../selectors/orders';
import { incrementOrder, decrementOrder } from '../../actions';
import { IOrder } from '.././../types';

export const useOrders = () => {
  const orders = useSelector(getOrders);
  const dispatch = useDispatch()

  const handleIncrementOrder = (order: IOrder) => dispatch(incrementOrder(order))
  const handleDecrementOrder = (order: IOrder) => dispatch(decrementOrder(order))

  const totalOrder = (orders: IOrder[]) => {
    return orders.reduce((accum, currVal) => accum + Number(currVal.price) * currVal.count!, 0)
  }
  return { models: { orders }, operations: { handleDecrementOrder, handleIncrementOrder, totalOrder }}
}