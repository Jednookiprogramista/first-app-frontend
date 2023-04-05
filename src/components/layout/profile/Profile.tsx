import React from "react";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import './profile.css'



export const Profile = () => {

    return (
        <>
            <div className="profile">
                <div className=".profile-images">
                    <img src={'https://avatars.githubusercontent.com/u/98560465?s=400&u=232ddfdf7573f8dd2d04c9f78a49c7b9fd930768&v=4'} alt={'Main user'} className={'profile-page-picture'}/>
                    <img src={'https://scontent-fra5-1.xx.fbcdn.net/v/t1.6435-9/93995815_3076993555691750_4410251536848912384_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=4NqgIsPAbWoAX-oIvpn&_nc_ht=scontent-fra5-1.xx&oh=00_AfD3in1ZFJnfMR6T1e7-mZu2QBEnw2wgdNyuLb2bGkdzvA&oe=6454FEE8'} alt={'layout of profile'} className={'profile-layout'}/>
                </div>
                <div className="profile-container">
                    <div className="user-info">
                        <div className="left-side-profile">
                        <a href={'https://www.facebook.com/bruno.braghierivittorio/'} target="_blank" rel="noreferrer">
                                <FacebookIcon  className={'icons-profile'} color="primary" fontSize={'large'}/>
                        </a>
                            <a href={'https://www.instagram.com/tortellinni__/?hl=it'} target="_blank" rel="noreferrer">
                                    <InstagramIcon  className={'icons-profile'} color="primary" fontSize={'large'}/>
                            </a>
                            <a href={'https://twitter.com/BrunoBraghieri'} target="_blank" rel="noreferrer">
                                    <TwitterIcon  className={'icons-profile'} color="primary" fontSize={'large'}/>
                            </a>
                            <a href={'https://github.com/Jednookiprogramista'} target="_blank" rel="noreferrer">
                                    <GitHubIcon className={'icons-profile'} color="primary" fontSize={'large'}/>
                            </a>
                            <a href={'https://www.linkedin.com/in/bruno-braghieri/'} target="_blank" rel="noreferrer">
                                <LinkedInIcon className={'icons-profile'} color="primary" fontSize={'large'}/>
                            </a>
                        </div>
                        <div className="center-profile">
                            <span className={'profile-name'} >Bruno Braghieri</span>
                            <div className="profile--">
                                <div className="basic-info">
                                    <MyLocationIcon   fontSize={'medium'}/>
                                    <span className={'basic-info-text'}>Poznań,Poland</span>
                                    <WorkIcon fontSize={'medium'}/>
                                    <span className={'basic-info-text'}>Armatis</span>
                                    <SchoolIcon fontSize={'medium'}/>
                                    <span className={'basic-info-text'}>I Liceum  im. Tadeusza Kościuszki w Koninie</span>
                                    <Diversity1Icon fontSize={'medium'}/>
                                    <span className={'basic-info-text'}>In relationship</span>
                                    <button className={'profile-button'}>Add to friends</button>
                                </div>

                            </div>
                        </div>
                        <div className="right-side-profile">
                            <EmailIcon fontSize={'large'}/>
                            <MoreHorizIcon fontSize={'large'}/>
                        </div>

                    </div>

                </div>

            </div>

        </>


    )
}