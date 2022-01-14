// console.log("hello world!");
const express= require("express");
const { executeCpp } = require("./executeCpp");
const app=express();
const {generateFile}=require('./generatefile');
const cors =require('cors');

app.use(express.urlencoded({extended:true}));//issue is the key and value are not saving in json on postman
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
   return res.json({"hello":"world!"})
});


app.post("/run",async(req,res)=>{
//    console.log(req.body);
//    const language= req.body.language;
//    const code = req.body.code;

   const{language,code}=req.body;
   if(code===undefined){
       return res.status(400).json({success:false,error:"empty code body!"})
   }
   
     const filepath= await generateFile(language,code);
    const output= await executeCpp(filepath);
 //    console.log(filepath,"filepath"); => /mnt/e/compilers/backend/codes/571104a3-5bc5-4926-b741-5e1256530c64.cpp filepath
 //    console.log(output,"output"); =>/mnt/e/compilers/backend/outputs/571104a3-5bc5-4926-b741-5e1256530c64.out outpath
    return res.json({filepath,output});

  
});

app.listen(5000,()=>{
    console.log("its working bro, its run on 5000 port!");
});
