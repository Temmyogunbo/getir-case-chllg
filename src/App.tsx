import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { Sort } from './components/Sort';
import { Orders } from './components/Orders';
import { Products } from './components/Products';
import { getProducts, getCompanies } from './actions';
import {  useEffect} from 'react';
import { useDispatch } from 'react-redux'
import { Brands } from './components/Brands';
import { Tags } from './components/Tags';
import Pagination from './components/Pagination';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCompanies())
  }, [])

  return ( 
    <div className="grid grid-cols-12 gap-2  bg-gray-50">
      <header className="row-auto col-span-12 bg-blue-400 py-3 flex">

      <Header />
      </header>

          <aside className="col-span-3 xl:col-span-3 row-span-4 px-4 hidden lg:block">
            <Sort />
            <Brands />
            <Tags />
            </aside>
          <main className="col-span-2 md:col-span-7 lg:col-span-6 xl:col-span-6 bg-transparent row-span-4 flex flex-wrap align-center">
            <Products />
            <Pagination />
        </main>

          <aside className="col-span-5 lg:col-span-3 xl:col-span-3  row-span-4 px-4">
            <Orders />
          </aside>
      <footer className="row-auto col-span-12 p-8">

      <Footer />
      </footer>
      </div>
    );
}

export default App;
