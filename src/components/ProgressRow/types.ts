import { Dispatch, SetStateAction } from 'react';

export interface ProgressRowProps {
  index: number;
  id: string;
  title: string;
  image?: string;
  link?: string;
  longDesc?: string;
  checkedData: string[];
  setDirty: Dispatch<SetStateAction<boolean>>;
  toggleCheckbox: (checked: boolean, id: string) => void;
}
