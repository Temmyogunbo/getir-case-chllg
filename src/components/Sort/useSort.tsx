import { useState } from 'react';
import { SortBy } from '../../types';
import { useDispatch } from 'react-redux';
import { setSort, getProducts } from '../../actions';

export const useSort = () => {
  const [sortBy, setSortBy] = useState('');
  const dispatch = useDispatch();

  const handleSort = (selectedSortBy: SortBy) => {
    if (sortBy === selectedSortBy) {
      setSortBy('');
      dispatch(setSort(''));
    } else {
      setSortBy(selectedSortBy);
      dispatch(setSort(selectedSortBy));
    }
    dispatch(getProducts());
  };

  return { models: { sortBy }, operations: { handleSort } };
};
