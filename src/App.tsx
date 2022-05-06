/** Import React, useState, useEffect, useLocation hook */
import React, { useState, useEffect } from 'react';

/** Import react dependencies as a react router dom use params */
import { useParams, useLocation, useNavigate } from 'react-router-dom';

/** Import Input ui custom component */
import Input from './components/ui/Input';

/** Input Controls component */
import Controls from './components/Controls';

/** Input Table component */
import Table from './components/Table';

/** Import a global store */
import useUsers from './store/Users';

/** Init App component */
const App = () => {
  /** Init Search state for search input component */
  const [search, setSearch] = useState('');

  /** Set state for fetching data */
  const [isFetching, setIsFetching] = useState(false);

  /** Init User Store */
  const { users, fetch, sort } = useUsers((state) => state);

  /** Set state for sorting */
  const [isIDSort, setIsIDSort] = useState(false);
  const [isTitleSort, setIsTitleSort] = useState(false);
  const [isBodySort, setIsBodySort] = useState(false);

  /** Fetch data one time component did mount */
  useEffect(() => {
    setIsFetching(true);
    fetch('https://jsonplaceholder.typicode.com/posts');
    setIsFetching(false);
    setCurrentPage(currentPageNumber);
  }, []);

  /** Apply pagination if page are changing  */
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(currentPageNumber);
  }, [location]);

  /** Set states for pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  /** Constants for paginations */
  const indexOfLastUser: number = currentPage * usersPerPage;
  const indexOfFirstUser: number = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  /** Init params from URL (string default) */
  const { pageNumber } = useParams();
  const pn: any = pageNumber;
  const _pn: number = parseInt(pn);
  const currentPageNumber: number = _pn ? _pn : 1;

  /** Crrate page numbers */
  const pageNumbers: any = [];

  /** init and fill the array of the pagination */
  for (let i: number = 1; i < Math.ceil(users.length / usersPerPage + 1); i++) {
    pageNumbers.push(i);
  }

  /** Button navigation handler */
  const paginationButtonHandler = (button: string) => {
    if (button === 'prev') {
      if (currentPageNumber > 1) {
        setCurrentPage(currentPageNumber - 1);
        navigate(`/${currentPageNumber - 1}`);
      }
    } else if (button === 'next') {
      if (currentPageNumber < pageNumbers.length) {
        setCurrentPage(currentPageNumber + 1);
        navigate(`/${currentPageNumber + 1}`);
      }
    } else {
      return;
    }
  };

  /** Sort data */
  const sortData = () => {
    sort();
    setIsIDSort(!isIDSort);
    setIsTitleSort(!isTitleSort);
    setIsBodySort(!isBodySort);
  };

  /** Return JSX */
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-start m-0 p-[30px]">
      <div className="max-w-[1232px] w-full py-[23px] px-[78px] bg-white shadow-xl">
        <Input
          type="text"
          name="search"
          placeholder="Search"
          value={search}
          classProps=""
          onChangeHandler={setSearch}
        />
        <Table
          users={!isFetching ? currentUsers : []}
          isFetching={isFetching}
          sortData={sortData}
          sortStates={{ isIDSort, isTitleSort, isBodySort }}
          search={search}
        />
        <Controls
          isFetching={isFetching}
          pageNumbers={pageNumbers}
          currentPageNumber={currentPageNumber}
          paginationButtonHandler={paginationButtonHandler}
        />
      </div>
    </div>
  );
};

/** Export App component */
export default App;
