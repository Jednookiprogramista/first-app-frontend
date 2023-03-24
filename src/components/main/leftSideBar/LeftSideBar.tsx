import React from "react";

import './leftSideBar.css'
import PeopleIcon from '@mui/icons-material/People';
import GamesIcon from '@mui/icons-material/Games';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';


export const LeftSideBar = () => {

    return (
        <>
            <div className="left-side-bar">
                <div className="container">
                    <div className="menu">
                        <div className="objects">
                            <img  className={'img-left-bar'} src={"https://avatars.githubusercontent.com/u/98560465?v=4"} alt={'My profile picture '}/>
                            <span className="objects-text">Bruno Braghieri</span>
                        </div>
                        <div className="objects">
                            <PeopleIcon className={'icons'}/>
                            <span className="objects-text">Friends</span>
                        </div>
                        <div className="objects">
                            <GamesIcon className={'icons'}/>
                            <span className="objects-text">Games</span>
                        </div>
                        <div className="objects">
                            <CelebrationIcon className={'icons'}/>
                            <span className="objects-text">Events</span>
                        </div>
                        <div className="objects">
                            <CalendarMonthIcon className={'icons'}/>
                            <span className="objects-text">Calendar</span>
                        </div>
                    </div>
                    <hr className={'hr-left'}/>

                    <div className="menu">
                        <span className="objects-text">Quick access</span>
                        <div className="objects">
                            <EmailIcon className={'icons'}/>
                            <span className="objects-text">Messages</span>
                        </div>
                        <div className="objects">
                            <ImageIcon className={'icons'}/>
                            <span className="objects-text">Photos</span>
                        </div>
                        <div className="objects">
                            <VideoLibraryIcon className={'icons'}/>
                            <span className="objects-text">Videos</span>
                        </div>


                    </div>
                </div>
            </div>


        </>


    )
}