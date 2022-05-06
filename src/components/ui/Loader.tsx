/** Import React */
import React from 'react';

import { MdDownloading } from 'react-icons/md';

/** Init Loader component */
const Loader = () => {
  return (
    <div className="w-full flex justify-start items-center">
      <MdDownloading fontSize={20} className="text-[#474955] fill-[#474955]" />
      <span className="ml-[10px]">Loading...</span>
    </div>
  );
};

/** Export Loader */
export default Loader;
