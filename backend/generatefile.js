const fs=require('fs');
const path= require('path');
const {v4:uuid}=require('uuid');
const dircodes= path.join(__dirname,"codes");


if(!fs.existsSync(dircodes))
{
    fs.mkdirSync(dircodes,{recursive:true});
}
const generateFile= async(format,content)=>{
    const jobId=uuid();
    const fileName=`${jobId}.${format}`;
    const filepath=path.join(dircodes,fileName);
    await fs.writeFileSync(filepath,content);
    return filepath;

};

module.exports={
    generateFile,
};