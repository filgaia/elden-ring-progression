import React, { useEffect, useState } from 'react';
import { ProgressRowProps } from './types';
import {
  InformationCircleIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import Modal from 'components/Modal';

const ProgressRow = (props: ProgressRowProps) => {
  const {
    index,
    id,
    title,
    checkedData,
    image,
    link,
    longDesc,
    setDirty,
    toggleCheckbox,
  } = props;
  const [checked, setChecked] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const item = !!checkedData.find((i) => i === id);
    if (checked !== item) {
      setChecked(item);
    }
  }, [checkedData, checked, id]);

  const handleCheck = () => {
    setDirty(true);
    toggleCheckbox(!checked, id);
  };

  const buildImgAction = () => {
    return image && image !== '' ? (
      <img
        src={image}
        onError={(event) => {
          event.currentTarget.src =
            'https://eldenring.wiki.fextralife.com/file/Elden-Ring/whetstone_knife-elden-ring-wiki-guide-200px.png';
        }}
        className="object-scale-down h-20 w-20 p-1 bg-white border rounded shadow-lg max-w-full hover:bg-grey-600 transition duration-500 hover:scale-150"
        alt={title}
      />
    ) : (
      longDesc && (
        <InformationCircleIcon className="bg-white h-10 w-10 text-blue-500 rounded shadow-lg transition duration-500 hover:scale-150" />
      )
    );
  };

  return (
    <tr
      id={id}
      className="odd:bg-white even:bg-gray-50 border-b transition duration-300 ease-in-out hover:bg-gray-100"
    >
      <td
        className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:cursor-pointer"
        onClick={handleCheck}
      >
        <input
          className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          onChange={handleCheck}
          checked={checked}
          id={id}
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4">
        {index}.{' '}
        {link ? (
          <a
            href={link}
            target="_blank"
            className="no-underline"
            rel="noreferrer"
          >
            {title}{' '}
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-black-500 inline-block" />
          </a>
        ) : (
          title
        )}
      </td>
      <td className="text-sm text-gray-900 font-light">
        <div className="flex flex-wrap justify-center">
          {longDesc ? (
            <button
              className="outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              {buildImgAction()}
            </button>
          ) : (
            buildImgAction()
          )}
        </div>
        <Modal
          isOpen={showModal}
          longDesc={longDesc}
          setIsOpen={setShowModal}
          title={title}
        />
      </td>
    </tr>
  );
};

export default ProgressRow;
