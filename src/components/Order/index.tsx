import { IOrder } from '../../types';

export const Order = ({ order, handleDecrementOrder, handleIncrementOrder }: {order: IOrder, handleDecrementOrder: any; handleIncrementOrder: any; }) => (
    <div className="flex flex-row p-2 justify-between border-b-2">
      <div className="p-2">
  <h3 className="text-gray-600 text-base font-medium">{order.slug}</h3>
      <span className="text-blue-400 font-semibold">£ {order.price}</span>

      </div>
      <div className="flex flex-row cursor-pointer">

      <img className="" src="/icons/minus.svg" alt="minus"   onClick={() => handleDecrementOrder(order)}/>

<button className="bg-blue-400 p-4 text-white font-semibold mx-2 ">{order.count}</button>

      <img className="" src="/icons/plus.svg" alt="plus"onClick={() => handleIncrementOrder(order)} />

      </div>
    </div>
)