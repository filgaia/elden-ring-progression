import { PageCategory } from 'pageConfig/page/types';

export interface TaskCategoriesProps {
  pageCategories: PageCategory[];
  checkData: string[];
  toggleCheckbox: (checked: boolean, id: string) => void;
}
