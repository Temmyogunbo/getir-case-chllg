import { SearchInput } from '../common/SearchInput';
import { Tag } from '../Tag';
import React from 'react';
import { useTags } from './useTags';

export const Tags = () => {
  const {
    models: { tags, searchValue },
    operations: { handleSearch, handleTag, countTag, isTagSelected },
  } = useTags();

  return (
    <div className="px-2 py-4">
      <h3 className="p-2 mb-2 text-gray-700 font-normal text-base">Tags</h3>
      <div className="bg-white py-4">
        <SearchInput
          searchValue={searchValue}
          placeholder="Search Tag"
          handleChange={handleSearch}
        />
        <ul className="h-64 overflow-y-scroll">
          {tags.map((tag, index) => (
            <React.Fragment key={`${tag}-${index}`}>
              <Tag
                tag={tag}
                checked={isTagSelected(tag)}
                handleTag={handleTag}
                handleTagCount={countTag}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};
