/** Import React & react dependencies */
import React from 'react';
import { Link } from 'react-router-dom';

/** Import Button Component */
import Button from './ui/Button';

/** Init App component */
const Controls = ({
  isFetching,
  pageNumbers,
  currentPageNumber,
  paginationButtonHandler
}: {
  isFetching: boolean;
  pageNumbers: any;
  currentPageNumber: number;
  paginationButtonHandler: any;
}) => {
  /** Return JSX */
  return (
    <>
      {!isFetching ? (
        <div className="w-full flex justify-between items-center">
          <Button
            type="button"
            name="back"
            content="Back"
            classProps=""
            paginationButtonHandler={() => paginationButtonHandler('prev')}
          />
          <div className="w-full m-0 p-0 flex justify-center items-start">
            <ul className="w-full list-none p-0 m-0 flex justify-center items-center">
              {pageNumbers.map((pageNumber: number) => (
                <li key={pageNumber}>
                  <Link
                    to={`/${pageNumber}`}
                    className={`
                                  italic font-bold text-sm mx-[10px]
                                  ${currentPageNumber === pageNumber && 'text-[#7EBC3C]'}
                                `}
                  >
                    {pageNumber}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Button
            type="button"
            name="next"
            content="Next"
            classProps=""
            paginationButtonHandler={() => paginationButtonHandler('next')}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

/** Export App component */
export default Controls;
