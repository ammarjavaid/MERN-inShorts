import { data } from "./constants/data.js";
import news from "./models/schema.js";


const DefaultData = async() => {
 try{
    await news.deleteMany({});
    await news.insertMany(data);
   console.log('data imported successfully')
 }catch(err){
    console.log(err);
 }
}

export default DefaultData;