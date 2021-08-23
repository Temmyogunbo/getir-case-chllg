import { useOrders } from '../../Orders/useOrders';

export const Header = () => {
  const { models, operations } = useOrders();

  const { orders } = models;
  const  { totalOrder } = operations;
  
  const showTotalOrder = totalOrder(orders) > 0

  return (
    <>
      <div className="w-6/12 flex justify-end relative">
      <img className="Header-logo" src="/icons/market.svg" alt="Logo" />
      </div>
      {
        showTotalOrder &&
      <div className="w-6/12 flex justify-end absolute top-0 right-0" >
        <span className="font-sans  text-xs mr-32 flex py-5 px-4" style={{ backgroundColor: '#147594'}}>
          <span>

      <img className="Header-logo" src="/icons/lock.svg" alt="Logo" />
          </span>
          
<span className="text-white font-semibold text-base">
      £ {totalOrder(orders)}

</span>
        </span>
      </div>}
    </>
  )
}