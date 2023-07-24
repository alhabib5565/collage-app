import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex h-[calc(100vh-200px)] w-full justify-center items-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#fb5200"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loader;