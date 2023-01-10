import TaskCategory from 'components/TaskCategory';
import { PageCategory } from 'pageConfig/page/types';
import { TaskCategoriesProps } from './types';

const TaskCategories = (props: TaskCategoriesProps) => {
  const { pageCategories, checkData, toggleCheckbox } = props;

  const content = pageCategories?.map((cat: PageCategory, index: number) => {
    return (
      <div
        className="accordion"
        id={`acc-id-${cat.title}`}
        key={`acc-${cat.title}`}
      >
        <TaskCategory
          index={index + 1}
          title={cat.title}
          subtitle={cat.subtitle}
          tasks={cat.tasks}
          key={`cat-${cat.title}`}
          checkData={checkData}
          toggleCheckbox={toggleCheckbox}
        />
      </div>
    );
  });

  return <>{content}</>;
};

export default TaskCategories;
