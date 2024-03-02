import React from 'react';
import Link from 'next/link';

const PageNotAvailable = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Available</h1>
        <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for is currently not available.</p>
        <p className="text-sm text-gray-500">Please check back later or contact support for assistance.</p>
        <Link href="/">
          <div className="inline-block mt-2 bg-lime-400 hover:bg-neutral-900 text-white font-semibold py-2 px-4 rounded">
            Go Back Home
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PageNotAvailable;
