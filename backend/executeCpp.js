const {exec} = require("child_process");
const path =require('path');
const outputPath= path.join(__dirname,"outputs");
// console.log(outputPath,"outputPath");=>\mnt\e\compilers\backend\outputs
const fs =require('fs');
const { rejects } = require("assert");

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive:true}); 
}

const executeCpp =(filepath)=>{
    const jobId=path.basename(filepath).split(".")[0];
    // console.log(jobId,"JobId");=>571104a3-5bc5-4926-b741-5e1256530c64 JobId
    const outpath= path.join(outputPath,`${jobId}.out`);
    // console.log(outpath,"outpath");
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filepath} -o ${outpath} && cd ${outputPath} &&./${jobId}.out `,
        (error,stdout,stderr)=>{
           error && reject({error,stderr});
           stderr && reject(stderr);
           resolve(stdout);
        });
    });
}

module.exports={
    executeCpp
}