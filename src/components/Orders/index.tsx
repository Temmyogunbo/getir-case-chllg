import { Order } from '../Order';
import { useOrders } from './useOrders';
export const Orders = () => {
  const { models, operations } = useOrders();
  const { orders } = models;
  
  const  { handleDecrementOrder, handleIncrementOrder, totalOrder } = operations;

  if(orders.length === 0) return null;

  return (
    <div className="border-8 border-blue-400 bg-white p-2 ">

    <div className="h-80 overflow-y-scroll">
      {
        orders.map((order: any, index: number) => (
          <Order order={order} key={`ord-${index}`} handleDecrementOrder={handleDecrementOrder} handleIncrementOrder={handleIncrementOrder} />
        ))
      }
    </div>
    <div className="flex justify-end mb-2 mt-4">

    <button className="border-2 border-blue-400 p-3 text-blue-400 font-semibold">{totalOrder(orders)}</button>
    </div>
    </div>
  )
}