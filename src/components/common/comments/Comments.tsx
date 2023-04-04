import React, { useContext } from "react";
import './comments.css'
import { Authentication } from "../../main/authentication/authentication";

export interface CommBuild {
    id: number;
    name: string;
    userId: number;
    description: string;
    image?: string;
    profilePicture:string;
}

export const Comments = () => {
    const { currUser } : any = useContext(Authentication); // move the useContext call inside the function component

    const comments: CommBuild[] = [
        {
            id: 2,
            name: "Jakub Król",
            profilePicture: 'https://avatars.githubusercontent.com/u/7489790?v=4',
            userId: 1,
            description: "Świetna praca,dostajesz się do 9 etapu❗",
            image: "",
        },
        {
            id: 1,
            name: "Bartłomiej Borowczyk",
            userId: 1,
            profilePicture: 'https://media.licdn.com/dms/image/C4E03AQEYRGDpd6iPZw/profile-displayphoto-shrink_400_400/0/1616593826832?e=1684972800&v=beta&t=4KECpxg3X2Y9_FDjAoPi8KEqEV-uZL-N7xgUM5K6FDc',
            description:
                "Ale was dobrze nauczyłem tego front-endu 😲",
            image: "",
        },
    ];

    return (
        <>
            <div className={'comments'}>
                <div className="put-comm">
                    <img src={currUser.profilePicture}  className={'comm-picture'} alt={'main user'} />
                    <input type={'text'}  className={'write-comm'} placeholder={'Hey you! What\'s your opinion?'}/>
                    <button className={'button-comm'}>Send</button>
                </div>
                {comments.map((comment: CommBuild) => (
                    <div className={'comment'} key={comment.id}>
                        <img src={comment.profilePicture} alt={'user who commented'} className={'comm-picture'} />
                        <div className="information-comm">
                            <span className={'user-comm'}>{comment.name}</span>
                            <p className={'comm-description'}>{comment.description}</p>
                        </div>
                        <span className={'comm-time'}>7 min </span>
                    </div>
                ))}
            </div>
        </>
    )
}
