import { useEffect, useState } from 'react';
import { ICompany, IProduct } from '../../types';
import compact from 'lodash.compact';
import { setBrands, getProducts, setAllBrands } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies , getCompaniesError, hasCompaniesError} from '../../selectors/companies';
import { getProducts as getStateProducts } from '../../selectors/products';
import { getSelectedBrands } from '../../selectors/brand';
import { search } from '../../utils/search';

const getBrandsSlug = (companies: ICompany[]) =>
  companies.map(({ slug }) => slug);

export const useBrands = () => {
  const companies = useSelector(getCompanies);
  const hasError = useSelector(hasCompaniesError);
  const errorMessage = useSelector(getCompaniesError);

  const selectedBrands = useSelector(getSelectedBrands);
  const products = useSelector(getStateProducts);

  const [brands, setBrandss] = useState<undefined | ICompany[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (companies) {
      setBrandss([{ slug: 'All', name: 'All' }, ...companies]);
    }
  }, [companies]);

  const isBrandSelected = (brand: string) => {
    return selectedBrands?.includes(brand);
  };

  const handleBrand = (brand: ICompany) => {
    if (brand.slug === 'All') {
      dispatch(
        setAllBrands(
          getBrandsSlug([{ slug: 'All', name: 'All' }, ...companies]),
        ),
      );
    } else {
      dispatch(setBrands(brand.slug));
    }
    dispatch(getProducts());
  };

  const handleSearch = (event: any) => {
    const value = event.target.value;

    setSearchValue(value);
    if (brands) {
      if (value) {
        const newBrands = search(value, 'name')(companies);
        // @ts-ignore
        setBrandss(compact([...newBrands]));
      } else {
        setBrandss(companies);
      }
    }
  };

  const countBrand = (brand: ICompany) => {
    const brands = products.filter(
      (product: IProduct) => product.manufacturer === brand.slug,
    );

    if (brand.slug === 'All') return products.length;

    return brands.length;
  };

  return {
    operations: { handleSearch, handleBrand, countBrand, isBrandSelected },
    models: { brands, searchValue, hasError, errorMessage },
  };
};
