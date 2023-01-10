import { useEffect, useRef, useState } from 'react';
import TaskCategories from 'components/TaskCategories';
import { progression } from 'pageConfig/page';
import cloneDeep from 'lodash.clonedeep';
import debounce from 'lodash.debounce';
import Header from 'components/Header';
import useLocalStorage from 'hooks/useLocalstorage';

const initialCheckData: string[] = [];

const TaskCategoriesContainer = () => {
  const [checkData, setCheckData] = useState<string[]>(initialCheckData);
  const [dataToSave, setDataToSave] = useState<string[]>();
  const [isDirty, setIsDirty] = useState<boolean>();
  const [savedCheckData, setSavedCheckData] = useLocalStorage(
    'savedCheckData',
    ''
  );

  useEffect(() => {
    // onload, check localStorage and set checked
    if (savedCheckData) {
      setCheckData(savedCheckData);
    }
  }, []);

  useEffect(() => {
    if (dataToSave) {
      setSavedCheckData(dataToSave);
    }
  }, [dataToSave]);

  const debouncedSave = useRef(
    debounce((data) => {
      setDataToSave(data);
      setIsDirty(false);
    }, 2000)
  ).current;

  const toggleCheckbox = (checked: boolean, id: string) => {
    let newCheckData = cloneDeep(checkData);

    if (checked) {
      newCheckData.push(id);
    } else {
      newCheckData = newCheckData.filter((item) => item !== id);
    }
    setCheckData(newCheckData);
    setIsDirty(true);
    debouncedSave(newCheckData);
  };

  return (
    <>
      <Header isDirty={isDirty} />
      <TaskCategories
        pageCategories={progression}
        checkData={checkData}
        toggleCheckbox={toggleCheckbox}
      />
    </>
  );
};

export default TaskCategoriesContainer;
