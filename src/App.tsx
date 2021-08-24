import { Header } from './components/common/layouts/Header';
import { Footer } from './components/common/layouts/Footer';
import { Sort } from './components/Sort';
import { Orders } from './components/Orders';
import { Products } from './components/Products';
import { getProducts, getCompanies } from './actions';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Brands } from './components/Brands';
import { Tags } from './components/Tags';
import Pagination from './components/common/Pagination';

function App() {
  const [showMobileOrder, setShowMobileOrder] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCompanies());
  }, []);

  const toggleMobileOrder = () => setShowMobileOrder(!showMobileOrder);

  return (
    <div className="grid grid-cols-12  bg-gray-50 relative">
      <header className="row-auto col-span-12 bg-blue-400 py-3 flex">
        <Header toggleMobileOrder={toggleMobileOrder} />
      </header>

      <aside className="col-span-3 row-span-4 px-4 hidden lg:block mt-4">
        <Sort />
        <Brands />
        <Tags />
      </aside>
      <main className="col-span-12 md:col-span-7 lg:col-span-6 bg-transparent row-span-4 flex flex-wrap align-center mt-4">
        <Products />
        <Pagination />
      </main>

      <aside className="col-span-5 hidden md:block lg:col-span-3  row-span-4 px-4 mt-8">
        <Orders />
      </aside>

      {showMobileOrder && (
        <aside className="col-span-6 block md:hidden row-span-4 px-4 absolute top-20 right-0">
          <Orders />
        </aside>
      )}
      <footer className="row-auto col-span-12 p-8">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
