import React from "react";

import './rightSideBar.css'


export const RightSideBar = () => {

    return (
        <>
            <div className="right-side-bar">
                <div className="container">
                    <div className="object">
                    <span className={'objects-text-right'}>Invitations to friends</span>
                        <div className="user">
                            <div className="userData">
                                <img  className="img-right-bar" src={'https://avatars.githubusercontent.com/u/7489790?v=4'} alt={'Profile of your possible friend'}/>
                                <span className={'objects-text'}> Jakub Król</span>
                            </div>
                                <div className="buttons">
                                    <button className={'add-button'}>Add </button>
                                    <button className={'ignore-button'}>Ignore</button>
                                </div>

                        </div>
                        <div className="user">
                            <div className="userData">
                                <img  className="img-right-bar" src={'https://media.licdn.com/dms/image/C4E03AQEYRGDpd6iPZw/profile-displayphoto-shrink_400_400/0/1616593826832?e=1684972800&v=beta&t=4KECpxg3X2Y9_FDjAoPi8KEqEV-uZL-N7xgUM5K6FDc'} alt={'Profile of your possible friend'}/>
                                <span className={'objects-text'}> Bartłomiej Borowczyk</span>
                            </div>
                            <div className="buttons">
                                <button className={'add-button'}>Add </button>
                                <button className={'ignore-button'}>Ignore</button>
                            </div>
                        </div>
                        <div className="user">
                            <div className="userData">
                                <img  className="img-right-bar" src={'https://media.licdn.com/dms/image/C4E03AQGV8Abwtm9aWQ/profile-displayphoto-shrink_400_400/0/1517705827734?e=1684972800&v=beta&t=my3HqX0syAy9f0GOZg1YMV_5HXiOMCkoVCMrcuR_9LI'} alt={'Profile of your possible friend'}/>
                                <span className={'objects-text'}> Tomasz Czajka</span>
                            </div>
                            <div className="buttons">
                                <button className={'add-button'}>Add </button>
                                <button className={'ignore-button'}>Ignore</button>
                            </div>
                        </div>
                        <div className="user">
                            <div className="userData">
                                <img  className="img-right-bar" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg/800px-Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg'} alt={'Profile of your possible friend'}/>
                                <span className={'objects-text'}> Mark Zuckerberg</span>
                            </div>
                            <div className="buttons">
                                <button className={'add-button'}>Add </button>
                                <button className={'ignore-button'}>Ignore</button>
                            </div>
                        </div>

                    </div>

                <hr className={'hr-right'}/>
                <span className={'objects-text-right'}>Latest updates</span>
                <div className="object">


                </div>
                    <div className="object">

                        <div className="userDataDown">
                            <img  className="img-right-bar" src={'https://avatars.githubusercontent.com/u/7489790?v=4'} alt={'Profile of your possible friend'}/>
                            <span className={'objects-text'}> Jakub Król</span>
                            <p className={'des-color'}>
                                Add new photo
                            </p>
                            <div className='objects-text-right'>
                                <span className={'timeOfPost'}> 5 min ago</span>
                            </div>
                        </div>
                    </div>
                    <div className="object">

                        <div className="userDataDown">
                            <img  className="img-right-bar" src={'https://avatars.githubusercontent.com/u/7489790?v=4'} alt={'Profile of your possible friend'}/>
                            <span className={'objects-text'}> Jakub Król</span>
                            <p className={'des-color'}>
                                Add new profile
                            </p>
                            <div className='objects-text-right'>
                                <span className={'timeOfPost'}> 8 min ago</span>
                            </div>
                        </div>
                    </div>



                </div>
            </div>



        </>


    )
}