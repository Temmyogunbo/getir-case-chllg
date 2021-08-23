import { Checkbox } from '../CheckBox';
import { CheckBoxType } from '../../types';

export const Tag = ({
  tag,
  checked,
  handleTag,
  count,
  handleTagCount,
}: {
  tag: string;
  checked: boolean;
  handleTag: any;
  count?: number;
  handleTagCount: any;
}) => (
  <li
    className="p-2 text-gray-700 font-normal text-base cursor-pointer focus:outline-none"
    onClick={() => handleTag(tag)}
  >
    <span className="m-2 ">
      <Checkbox checked={checked} type={CheckBoxType.Square} />
    </span>{' '}
    {tag} ({handleTagCount(tag)})
  </li>
);
