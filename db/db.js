import mongoose from "mongoose";

export const Connection = async(USERNAME, PASSWORD)=>{

    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.s13vxbe.mongodb.net/inshortDatabase?retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log('Darabase connected')
    } catch(err){
        console.log('error', err);
    }
}