/** Import React */
import React from 'react';

/** Import react icons */
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

/** Import Loader Component */
import Loader from './ui/Loader';

/** Init Table component */
const Table = ({
  users,
  isFetching,
  sortData,
  sortStates,
  search
}: {
  users: any;
  isFetching: boolean;
  sortData: any;
  sortStates: any;
  search: string;
}) => {
  /** Return JSX */
  return (
    <div className="w-full mt-[16px] mb-[24px] p-0">
      {!isFetching ? (
        <table className="table-auto border-collapse border border-[#E3E6EC] w-full">
          <thead className="bg-[#474955]">
            <tr>
              <th className="py-[19px] px-[23px] font-semibold">
                <div
                  className="w-full flex justify-center items-center cursor-pointer"
                  onClick={sortData}
                >
                  <span className="mr-[40px]">ID</span>
                  {!sortStates.isIDSort ? (
                    <MdKeyboardArrowDown fontSize={20} />
                  ) : (
                    <MdKeyboardArrowUp fontSize={20} />
                  )}
                </div>
              </th>
              <th className="py-[19px] px-[23px] font-semibold">
                <div
                  className="w-full flex justify-center items-center cursor-pointer"
                  onClick={sortData}
                >
                  <span className="mr-[40px]">Title</span>
                  {!sortStates.isTitleSort ? (
                    <MdKeyboardArrowDown fontSize={20} />
                  ) : (
                    <MdKeyboardArrowUp fontSize={20} />
                  )}
                </div>
              </th>
              <th className="py-[19px] px-[23px] font-semibold">
                <div
                  className="w-full flex justify-center items-center cursor-pointer"
                  onClick={sortData}
                >
                  <span className="mr-[40px]">Description</span>
                  {!sortStates.isBodySort ? (
                    <MdKeyboardArrowDown fontSize={20} />
                  ) : (
                    <MdKeyboardArrowUp fontSize={20} />
                  )}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user: any) => {
                console.log(search);
                if (search == '') {
                  return user;
                } else if (user.title.toLowerCase().includes(search.toLowerCase())) {
                  return user;
                } else if (user.body.toLowerCase().includes(search.toLowerCase())) {
                  return user;
                }
              })
              .map((user: any) => (
                <tr key={user.id}>
                  <td className="border border-[#E3E6EC] font-medium text-center text-sm py-[15px] px-[11px]">
                    {user.id}
                  </td>
                  <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                    {user.title}
                  </td>
                  <td className="border border-[#E3E6EC] font-medium text-sm py-[15px] px-[11px]">
                    {user.body}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <Loader />
      )}
    </div>
  );
};

/** Export Table component */
export default Table;
