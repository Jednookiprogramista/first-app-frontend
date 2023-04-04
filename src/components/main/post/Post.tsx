import React from "react";
import "./post.css";
import { PostBuild } from "../posts/Posts";
import {Link} from "react-router-dom";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface PostProps {
    post: PostBuild;
}

export const Post = ({ post }: PostProps) => {

    const liked = false;
    return (
        <div className="post">
            <div className="container__">
                <div className="user__">
            <div className="userInformation">
                <img  className={'profile-image__'} src={post.profilePicture} alt={'author post'}/>
                <div className="details">

                    <Link to={`profile/${post.userId}`} className={'main-user'} >
                        <span className={'name__'}>{post.name}</span>

                    </Link>
                    <span className={'time__'}> 5 min ago</span>
                </div>

            </div>
                    <MoreHorizIcon/>
                </div>
            <div className="content__">

                <p className={'description'}>{post.description}</p>
                <img className={'.image-post'} src={post.image}  alt={'User content'}/>
            </div>
            <div className="information">
                <div className="object__">
                    {liked ?   <ThumbUpAltIcon/> :   <ThumbUpOffAltIcon/>} 20
                    <CommentIcon/> 0
                    <SendIcon/> 30
                </div>
            </div>

            </div>
        </div>
    );
};
