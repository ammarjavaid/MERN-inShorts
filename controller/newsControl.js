import news from "../models/schema.js"


export const getNews = async(req, res) =>{
    try{
        let data = await news.find();
        return res.status(200).json(data);
    } catch(err){
        return res.status(500).json({ message: data.error });
    }
}