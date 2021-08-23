import { API_URL, PAGE_SIZE } from '../config/env';
import { SortBy } from '../types';

const getSortOder = (sort: string) => {
  if (sort) {
    if (sort === SortBy.PRICE_HIGH_TO_LOW) {
      return ['price', 'desc'];
    } else if (sort === SortBy.PRICE_LOW_TO_HIGH) {
      return ['price', 'asc'];
    } else if (sort === SortBy.NEW_TO_OLD) {
      return ['added', 'desc'];
    } else if (sort === SortBy.OLD_TO_NEW) {
      return ['added', 'asc'];
    }
  }
  return '';
};

export const generateProductURL = ({
  tags,
  brands,
  page,
  sort,
  itemType,
}: {
  tags: string[];
  brands: string[];
  page: number;
  sort: string;
  itemType: string;
}) => {
  const sortOrder = getSortOder(sort);

  const jointTags = tags
    .filter((tag) => tag !== 'All')
    .map((tag) => `&tags_like=${tag}`)
    .join('');
  const jointBrands = brands
    .filter((brand) => brand !== 'All')
    .map((brand) => `&manufacturer=${brand}`)
    .join('');

  const sortQuery = sortOrder
    ? `&_sort=${sortOrder[0]}&_order=${sortOrder[1]}`
    : '';
  const tagQuery = tags.length === 0 ? '' : jointTags;
  const brandsQuery = brands.length === 0 ? '' : jointBrands;
  const itemTypeQuery = itemType ? `&itemType_like=${itemType}` : '';

  return `${API_URL}/products?_page=${
    page ?? 1
  }&_limit=${PAGE_SIZE}${sortQuery}${tagQuery}${brandsQuery}${itemTypeQuery}`;
};
