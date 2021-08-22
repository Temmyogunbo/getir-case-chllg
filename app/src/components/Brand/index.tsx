import {  Checkbox} from '../CheckBox';
import { CheckBoxType, ICompany } from '../../types';

export const Brand = ({ brand, checked, handleBrand, handleBrandCount }: { brand: ICompany; count?: number; checked: boolean; handleBrand: any; handleBrandCount: any}) => (
    <li className="p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none" onClick={() => handleBrand(brand)}>
          <span className="m-2 ">
            <Checkbox checked={checked} type={CheckBoxType.Square} />
          </span> 
          <span>
          {brand.name} ({handleBrandCount(brand)})
          </span>
        </li>
  )