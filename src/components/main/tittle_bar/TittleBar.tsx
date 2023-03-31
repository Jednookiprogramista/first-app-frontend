import React, {useEffect} from 'react';
import './tittleBar.css'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';









export const TittleBar = () => {

    useEffect(() => {
        document.title = "MyWall";
    }, []);




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


                <span className={'my-name'}> Bruno Braghieri  </span>


                <div className={'green-circle'}/>
                <img  className={'profile'} src={"https://avatars.githubusercontent.com/u/98560465?v=4"} alt={'Main profile'}/>

            </div>








        </div>




    </header>
    )
}