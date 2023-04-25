const NoProduct = () => {
  return (
    <div className="flex w-full items-center justify-center ">
      <div className="flex flex-col items-center">
        <svg
          className="w-16 h-16 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10 10-4.478 10-10S17.522 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            fill="currentColor"
          ></path>
          <path
            d="M14.707 9.293a1 1 0 00-1.414-1.414L12 10.586l-1.293-1.707a1 1 0 00-1.414 1.414L10.586 12l-1.707 1.293a1 1 0 001.414 1.414L12 13.414l1.293 1.707a1 1 0 001.414-1.414L13.414 12l1.707-1.293z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="text-gray-600">No product found.</p>
      </div>
    </div>
  );
};

export default NoProduct;
