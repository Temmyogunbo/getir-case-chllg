import {  Checkbox} from '../CheckBox';
import { CheckBoxType } from '../../types';
import { useSort } from './useSort';
import { SortBy } from '../../types';

export const Sort = () => {
  const { models, operations} = useSort();
  
  const { sortBy } = models;
  const { handleSort } = operations;

  return (
    <div className="px-2 py-4">
      <h3 className="p-2 mb-2 text-gray-700 font-normal text-base">Sorting</h3>
      <ul className="bg-white py-4">
        <li className="p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none" onClick={() => handleSort(SortBy.PRICE_LOW_TO_HIGH)}>
          <span className="m-2">
            <Checkbox checked={SortBy.PRICE_LOW_TO_HIGH === sortBy} type={CheckBoxType.Radio} />
          </span> Price low to high
        </li>
        <li  className="p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none" onClick={() => handleSort(SortBy.PRICE_HIGH_TO_LOW)}>
        <span className="m-2">
            <Checkbox checked={SortBy.PRICE_HIGH_TO_LOW === sortBy} type={CheckBoxType.Radio} />
          </span> Price high to low
        </li>
        <li  className="p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none" onClick={() => handleSort(SortBy.NEW_TO_OLD)}>
        <span className="m-2">
            <Checkbox checked={SortBy.NEW_TO_OLD === sortBy} type={CheckBoxType.Radio} />
          </span> New to old
        </li>
        <li  className="p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none" onClick={() => handleSort(SortBy.OLD_TO_NEW)}>
        <span className="m-2">
            <Checkbox checked={SortBy.OLD_TO_NEW === sortBy} type={CheckBoxType.Radio} />
          </span> Old to new
        </li>
      </ul>
    </div>
  )
}