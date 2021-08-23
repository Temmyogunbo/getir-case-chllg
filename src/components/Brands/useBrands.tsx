import {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ICompany } from '../../types';
import compact from 'lodash.compact';
import { setBrands, getProducts, setAllBrands } from '../../actions';
import { useDispatch } from 'react-redux'
import { getCompanies } from '../../selectors/companies';
import { getSelectedBrands } from '../../selectors/brand';
import { search } from '../../utils/search';

// export const searchBrands = (searchValue: string) => ( brands: ICompany[]) => {
//   if(!searchValue) return ([]);

//   return brands.map(brand => {
//     if(brand.name.toLowerCase().includes(searchValue.toLowerCase())) return brand;
//     return null;
//   });
// }

const getBrandsSlug = (companies: ICompany[]) => companies.map(({ slug }) => slug);


export const useBrands = () => {
  const companies = useSelector(getCompanies);
  const selectedBrands = useSelector(getSelectedBrands);

  const [brands, setBrandss] = useState<undefined | ICompany[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    if(companies) {
      setBrandss([{ slug: 'All', name: 'All'}, ...companies])
    }
  },[companies])

  const isBrandSelected = (brand: string) => selectedBrands.includes(brand)

  const handleBrand = (brand: ICompany) => {

    if(brand.slug === 'All') {
      dispatch(setAllBrands(getBrandsSlug(companies)))
    } else {
      dispatch(setBrands(brand.slug))
    }
    dispatch(getProducts())
  }

  const handleSearch = (event: any) => { 
    const value = event.target.value;

    setSearchValue(value);
    if(brands) {
      if(value) {
        const newBrands = search(value, 'name')(companies);
        // @ts-ignore
        setBrandss(compact([...newBrands]))
      } 
      else {
        setBrandss(companies)
      }
    } 
  }

  const countBrand = (brand: ICompany) =>  {
    const brands = companies.filter((company: ICompany) => company.slug === brand.slug)
    return brands.length
  }

  return { operations: { handleSearch, handleBrand , countBrand, isBrandSelected }, models: { brands, searchValue }}
}