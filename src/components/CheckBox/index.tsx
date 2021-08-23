import { CheckBoxType } from '../../types';

export const RadioCheckBox = ({ checked }: {checked: boolean }) => {
  return (
    <div>
      {checked ?  <img className="Header-logo" src="/icons/radio-check-box-on.svg" alt="Logo" /> 
        : <img className="Header-logo" src="/icons/radio-check-box-off.svg" alt="Logo" />}
    </div>
  )
}

export const SquareCheckBox = ({ checked }: {checked: boolean }) => {
  return (
    <div>
        {checked ?  <img className="Header-logo" src="/icons/square-check-box-on.svg" alt="Logo" />
        : <img className="Header-logo" src="/icons/square-check-box-off.svg" alt="Logo" />}
    </div>
  )
}

export const Checkbox = ({ checked, type }: { checked: boolean; type: CheckBoxType }) => {
  return (
    <div className="inline-block align-middle">
      {type === CheckBoxType.Radio ? <RadioCheckBox checked={checked} /> : <SquareCheckBox checked={checked} />}
    </div>
  );
};
