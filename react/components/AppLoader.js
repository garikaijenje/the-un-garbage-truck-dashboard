import React from 'react';
import PulseLoader from "react-spinners/PulseLoader";


const AppLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white">
      <PulseLoader color="#3D376B" loading={true} size={30} />
    </div>
  );
};

export default AppLoader;