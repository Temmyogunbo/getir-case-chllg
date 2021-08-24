import { generateProductURL } from './generateProductUrl';
import { API_URL, PAGE_SIZE } from '../config/env';

describe('Product URL', () => {
  it('should return product url without queries', () => {
    expect(
      generateProductURL({
        tags: [],
        brands: [],
        page: 2,
        sort: '',
        itemType: '',
      }),
    ).toBe(`${API_URL}/products?_page=2&_limit=${PAGE_SIZE}`);
  });

  it('should return product url with tag query', () => {
    expect(
      generateProductURL({
        tags: ['Trees'],
        brands: [],
        page: 2,
        sort: '',
        itemType: '',
      }),
    ).toBe(`${API_URL}/products?_page=2&_limit=${PAGE_SIZE}&tags_like=Trees`);
  });

  it('should return product url with multiple queries', () => {
    expect(
      generateProductURL({
        tags: ['Trees'],
        brands: ['Getir'],
        page: 2,
        sort: '',
        itemType: '',
      }),
    ).toBe(
      `${API_URL}/products?_page=2&_limit=${PAGE_SIZE}&tags_like=Trees&manufacturer=Getir`,
    );
  });
});
