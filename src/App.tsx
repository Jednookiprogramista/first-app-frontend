import React, {useEffect} from 'react';

import './App.css'

export const  App = () =>  {
    useEffect(() => {
        document.title = "MyWall";
    }, []);

  return (
    <>
        <header>
        <h1 className={"first-title "}>
            <strong>MyWall</strong>
        </h1>
            <div className="my profile" >
                 <button>My profile</button>

            </div>
      </header>
    </>
  );
};
