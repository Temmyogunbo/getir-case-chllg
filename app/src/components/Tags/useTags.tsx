import { useSelector } from 'react-redux'
import {  Tags } from '../../types';
import { useState } from 'react'
import compact from 'lodash.compact';
import { useDispatch } from 'react-redux'
import { setTags, getProducts, setAllTags} from '../../actions';
import { getSelectedTags } from '../../selectors/tag';
import { search } from '../../utils/search';
const TagLists = Object.values(Tags);

// export const searchTags = (searchValue: string) => ( tags: string[]) => {
//   if(!searchValue) return ([]);

//   return tags.map(tag => {
//     if(tag.toLowerCase().includes(searchValue.toLowerCase())) return tag
//   });
// }

export const useTags = () => {
  const selectedTags = useSelector(getSelectedTags);

  const [tags, setTagss] = useState<string[]>(TagLists);
  const [searchValue, setSearchValue] = useState<string>('')

  const dispatch = useDispatch()

  const isTagSelected = (tag: string) => selectedTags.includes(tag);

  const handleTag = (tag: string) => {
    if(tag === 'All') {
      dispatch(setAllTags(TagLists))
    } else {
      dispatch(setTags(tag))
    }
    dispatch(getProducts())

  }

  const handleSearch = (event: any) => { 
    const value = event.target.value;

    setSearchValue(value);
    if(tags) {
      if(value) {
        const newBrands = search(value)(TagLists);
        setTagss(compact([...newBrands]))
      } 
      else {
        setTagss(TagLists)
      }
    } 

  }

  const countTag = (tag: string) => {
    const tags = TagLists.filter((list: string) => list === tag)
    return tags.length
  }

  return {models: { tags, searchValue }, operations: { handleSearch, handleTag, countTag, isTagSelected }}
}