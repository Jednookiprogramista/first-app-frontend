import React, {useContext, useEffect} from 'react';
import './tittleBar.css'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {Authentication} from "../authentication/authentication";










export const TittleBar = () => {

    useEffect(() => {
        document.title = "MyWall";
    }, []);



    const {currUser} :any  = useContext(Authentication)

    //TODO





    // @ts-ignore
    return (
    <header className={'bar'}>
        <div className={'left-tittle'}>
        <Link to={'/'} style={{textDecoration:'none'}}>
        <h3 className={"first-title "}>
            <strong>MyWall</strong>
        </h3>
        </Link>
            <HomeIcon/>
            <DarkModeIcon />
            <div className="search">
                <SearchIcon/>
                <input className={'search-space'} type={"text"} placeholder={'Search'}/>
            </div>


        </div>

        <div className={'right-tittle'}>

            <AccountBoxIcon/>

            <div className="profile-picture">


                <span className={'my-name'}> {currUser.name}  </span>


                <div className={'green-circle'}/>
                <img  className={'profile'} src={currUser.profilePicture} alt={'Main profile'}/>
            </div>








        </div>




    </header>
    )
}