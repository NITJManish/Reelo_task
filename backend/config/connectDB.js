const mongoose=require('mongoose');

connectDB=async ()=>{
    
    mongoose.connect(process.env.DB).then((con)=>{
        console.log(`mongodb database connected to host : ${con?.connection?.host}`);
    });
}

module.exports=connectDB;