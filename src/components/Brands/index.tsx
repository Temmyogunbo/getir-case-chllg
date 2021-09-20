import { Brand } from '../Brand';
import React from 'react';
import { SearchInput } from '../common/SearchInput';
import { useBrands } from './useBrands';
import { Loading } from '../common/Loader';

export const Brands = () => {
  const { models, operations } = useBrands();

  const { brands, searchValue, hasError, errorMessage } = models;
  const { handleSearch, handleBrand, countBrand, isBrandSelected } = operations;

  if (hasError) return <div>{errorMessage}</div>;

  if (brands && brands?.length <= 1) return <Loading />;

  return (
    <div className=" px-2 py-4 mt-10">
      <h3 className="p-2 mb-2 text-gray-700 font-normal text-base">Brands</h3>
      <div className="bg-white py-4">
        <SearchInput
          searchValue={searchValue}
          placeholder="Search Brand"
          handleChange={handleSearch}
        />
        {brands && (
          <ul className="h-64 overflow-y-scroll">
            {brands?.map((brand, index) => (
              <React.Fragment key={`${brand}-${index}`}>
                <Brand
                  brand={brand}
                  checked={isBrandSelected(brand.slug)}
                  handleBrand={handleBrand}
                  handleBrandCount={countBrand}
                />
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
