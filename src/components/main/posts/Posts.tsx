import React from "react";
import './posts.css';
import {Post} from "../post/Post";


export interface PostBuild {
    id: number;
    name: string;
    userId: number;
    description: string;
    image?: string;
    profilePicture:string;
}

export const Posts = () => {
    const posts: PostBuild[] = [
        {

            id: 2,
            name: "Bruno Braghieri",
            profilePicture:'https://avatars.githubusercontent.com/u/98560465?s=400&u=232ddfdf7573f8dd2d04c9f78a49c7b9fd930768&v=4',
            userId: 1,
            description: "Look that's my boy!😍",
            image: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074__340.jpg",
        },
        {
            id: 1,
            name: "Bruno Braghieri",
            userId: 1,
            profilePicture:'https://avatars.githubusercontent.com/u/98560465?s=400&u=232ddfdf7573f8dd2d04c9f78a49c7b9fd930768&v=4',
            description:
                "Welcome on Social Media App where you can admire my programming skills.👨‍💻",
            image:
                "https://media.istockphoto.com/id/1360380430/photo/welcome-neon-banner-light-signboard.jpg?b=1&s=170667a&w=0&k=20&c=7LIp7Rg-36WdQbMb6I0AISTVJ6c4OKZRHszwFl49fE8=",
        },

    ];


    return (
        <>
            <div className="posts">
                {posts.map((post: PostBuild) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </>
    );
};
