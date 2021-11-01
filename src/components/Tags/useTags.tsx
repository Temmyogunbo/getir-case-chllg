import { useSelector } from 'react-redux';
import { IProduct, Tags } from '../../types';
import { useState } from 'react';
import compact from 'lodash.compact';
import flatten from 'lodash.flatten';
import uniq from 'lodash.uniq';
import { useDispatch } from 'react-redux';
import { setTags, getProducts, setAllTags } from '../../actions';
import { getSelectedTags } from '../../selectors/tag';
import { getProducts as getStateProducts } from '../../selectors/products';
import { search } from '../../utils/search';

const TagLists = Object.values(Tags);

export const useTags = () => {
  const selectedTags = useSelector(getSelectedTags);
  const products = useSelector(getStateProducts);

  const [tags, setTagss] = useState<string[]>(TagLists);
  const [searchValue, setSearchValue] = useState<string>('');

  const dispatch = useDispatch();

  const isTagSelected = (tag: string) => selectedTags?.includes(tag);

  const handleTag = (tag: string) => {
    if (tag === 'All') {
      dispatch(setAllTags(TagLists));
    } else {
      dispatch(setTags(tag));
    }
    dispatch(getProducts());
  };

  const handleSearch = (event: any) => {
    const value = event.target.value;

    setSearchValue(value);
    if (tags) {
      if (value) {
        const newBrands = search(value)(TagLists);
        setTagss(compact([...newBrands]));
      } else {
        setTagss(TagLists);
      }
    }
  };

  const countTag = (tag: string) => {
    const productTags = flatten(
      products.map((product: IProduct) => product.tags),
    );

    const tags = productTags.filter((productTag) => productTag === tag);

    if (tag === 'All') return productTags.length - uniq(productTags).length;

    return tags.length;
  };

  return {
    models: { tags, searchValue },
    operations: { handleSearch, handleTag, countTag, isTagSelected },
  };
};
