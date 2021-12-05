import { videos } from '../../../videos';

export default (req,res) =>{
    const {id} = req.query;
    const video = videos.find((video)=>video.id.toString()===1);

    if (video){
        res.status(200).json(video);
    }else{
        res.status(404).json({
            message : "No Such video",
        });
    }
    
};