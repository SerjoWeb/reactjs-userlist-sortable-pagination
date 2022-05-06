/** Import React */
import React from 'react';

/**
 * Init Button component with income props from outside
 * Set types for props
 **/
const Button = ({
  type,
  name,
  content,
  classProps,
  paginationButtonHandler
}: {
  type: any;
  name: string;
  content: string;
  classProps: string;
  paginationButtonHandler: any;
}) => {
  /** Return JSX */
  return (
    <button
      type={type}
      name={name}
      className={`
            w-full p-0 m-0 border-0 active:outline-0 
            focus:outline-0 bg-transparent text-lg font-medium
            ${classProps}
        `}
      onClick={paginationButtonHandler}
    >
      {content}
    </button>
  );
};

/** Export Button component */
export default Button;
