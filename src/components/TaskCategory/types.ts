export interface TaskCategoryProps {
  index?: number;
  title: string;
  subtitle?: string;
  tasks: string[];
  checkData: string[];
  toggleCheckbox: (checked: boolean, id: string) => void;
}
