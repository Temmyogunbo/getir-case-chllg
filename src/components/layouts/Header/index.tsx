import { useOrders } from '../../Orders/useOrders';

export const Header = () => {
  const { models, operations } = useOrders();

  const { orders } = models;
  const  { totalOrder } = operations;
  
  return (
    <>
      <div className="w-6/12 flex justify-end">
      <img className="Header-logo" src="/icons/market.svg" alt="Logo" />
      </div>
      <div className="w-6/12 flex justify-end ">
        <span className="font-sans text-xs mr-32 flex">
          <span>

      <img className="Header-logo" src="/icons/lock.svg" alt="Logo" />
          </span>
          
<span className="text-white font-semibold text-lg">
      {totalOrder(orders)}

</span>
        </span>
      </div>
    </>
  )
}