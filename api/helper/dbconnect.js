const mongoose=require('mongoose')

async function connectDb(uri){ 
try {
   const result= await mongoose.connect(uri);
   console.log('Connection with the mongodb is sucess')
  } catch (error) {
    console.log(error);
  }
}
module.exports=connectDb