import { useOrders } from '../../Orders/useOrders';

export const Header = ({ toggleMobileOrder }: { toggleMobileOrder: any }) => {
  const { models, operations } = useOrders();

  const { orders } = models;
  const { totalOrder } = operations;

  const showTotalOrder = totalOrder(orders) > 0;

  return (
    <>
      <div className="w-6/12 flex justify-end relative">
        <img className="Header-logo" src="/icons/market.svg" alt="Logo" />
      </div>
      {showTotalOrder && (
        <div
          className="flex justify-end absolute top-0 md:right-0 left-56"
          onClick={toggleMobileOrder}
        >
          <span
            className="font-sans  text-xs md:mr-32 flex py-5 px-4 cursor-pointer"
            style={{ backgroundColor: '#147594' }}
          >
            <span>
              <img className="Header-logo" src="/icons/lock.svg" alt="Logo" />
            </span>

            <span className="text-white font-semibold text-base">
              £ {totalOrder(orders).toFixed(2)}
            </span>
          </span>
        </div>
      )}
    </>
  );
};
