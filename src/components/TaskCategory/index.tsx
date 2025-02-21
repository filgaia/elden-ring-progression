import ProgressRow from 'components/ProgressRow';
import taskHash from 'pageConfig/tasks';
import { Task } from 'pageConfig/tasks/types';
import { useEffect, useState } from 'react';
import { TaskCategoryProps } from './types';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const TaskCategory = (props: TaskCategoryProps) => {
  const { title, subtitle, tasks, checkData, toggleCheckbox } = props;
  const [tasksData, setTasksData] = useState<(Task | undefined)[]>([]);
  const [tasksComplete, setTasksComplete] = useState<number>(0);
  const [dirty, setDirty] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const totalTasks = tasksData?.length;

  useEffect(() => {
    const data: (Task | undefined)[] = tasks.map((task): Task | undefined => {
      const item = taskHash.get(task);
      return (
        item && {
          ...item,
          title: item?.title || '',
          id: task,
        }
      );
    });
    setTasksData(data);
  }, [tasks]);

  useEffect(() => {
    setTasksComplete(
      tasksData.reduce(
        (prev, cur) =>
          prev + (checkData.find((item) => item === cur?.id || '') ? 1 : 0),
        0
      )
    );
  }, [tasksData, dirty]);

  useEffect(() => {
    setDirty(false);
  }, [dirty]);

  useEffect(() => {
    if (totalTasks !== 0 && tasksComplete === totalTasks) setCollapsed(true);
  }, [tasksComplete]);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const percentComplete = (tasksComplete / totalTasks) * 100;

  return (
    <div className="accordion-item bg-white border border-gray-200">
      <h2 className="accordion-header mb-0" id="headingOne5">
        <button
          className="accordion-button text-xl relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne5"
          aria-expanded="true"
          aria-controls="collapseOne5"
          onClick={handleCollapse}
        >
          {collapsed ? (
            <ChevronRightIcon className="h-5 w-5 mr-2 text-black-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 mr-2 text-black-500" />
          )}
          {title}
        </button>
        <p>
          {subtitle && (
            <span className="ml-5 text-xs text-grey-600">{subtitle}</span>
          )}
        </p>
      </h2>

      <div className="w-10/12 ml-4 bg-gray-200 rounded-full">
        <div
          className="mb-4 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${percentComplete}%` }}
        >
          <span className="text-black">
            {`${tasksComplete}`}/{`${totalTasks}`}
          </span>
        </div>
      </div>
      {!collapsed && (
        <div
          id="collapseOne5"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne5"
        >
          <div className="accordion-body py-4 px-5">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th>Done</th>
                  <th>Task</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {tasksData?.map((task: Task | undefined, index: number) => {
                  return (
                    task && (
                      <ProgressRow
                        index={index + 1}
                        id={task.id}
                        title={task.title}
                        image={task.image}
                        link={task.link}
                        longDesc={task.longDesc}
                        setDirty={setDirty}
                        checkedData={checkData}
                        toggleCheckbox={toggleCheckbox}
                        key={`task-${task.id}`}
                      />
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCategory;
