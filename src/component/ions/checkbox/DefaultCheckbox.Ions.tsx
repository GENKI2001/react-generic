import React from 'react';
import CheckboxAtoms from '../../atoms/checkbox/Checkbox.Atoms';
import { CheckboxAtomsProps } from '../../atoms/checkbox/Checkbox.type';

const DefaultCheckboxIons: React.FC<CheckboxAtomsProps> = (props) => {
  return <CheckboxAtoms {...props} />;
};

export default DefaultCheckboxIons;
