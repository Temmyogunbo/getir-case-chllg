import { search } from './search';
import compact from 'lodash.compact';

describe('Search', () => {
  const lists = ['Trees', 'Beach', 'Ocean'];

  it('should return an empty array when no match is found', () => {
    expect(compact(search('Oranges')(lists)).length).toBe(0);
  });

  it('should return items in  array when match is found', () => {
    expect(compact(search('e')(lists)).length).toBe(3);
  });
});
