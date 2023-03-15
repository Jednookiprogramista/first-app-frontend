import React, {useEffect} from 'react';

import './App.css'

export const  App = () =>  {
    useEffect(() => {
        document.title = "MyWall";
    }, []);

  return (
    <>
        <header>
        <h1>
            <strong>MyWall</strong>
        </h1>
            <div className="myprofile" >
                 <button>My profile</button>

            </div>
      </header>
    </>
  );
};
