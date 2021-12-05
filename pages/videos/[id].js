import React from 'react';
import { URL } from '../../environment/index'
 const VideoDetail = ({video}) => {
    return (<div>
        <h3>{video.name}</h3>
        <p>{video.content}</p>
    </div>);
    };

    export const getServerSideProps= async (context) =>{
        const res=await fetch(`${URL}/api/videos/${context.params.id}`)

        const video= await res.json();

        return {
            props : {
                video
            }
        };
    }

    export default VideoDetail;
