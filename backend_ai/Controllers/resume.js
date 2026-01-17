const ResumeModel=require('../Models/resume');
const multer =require('multer');
const pdfParse =require("pdf-parse");
const path =require("path");
const cohere=require("cohere-ai");


const storage=multer.diskStorage({
    destination:(req,file,cb)=>cb(null,"uploads"),
    filename:(req,file,cb)=>cb(null,Date.now()+path.extname(file.originalname))
});
const fileFilter=(req,file,cb)=>{
    if (file.mimetype==="application/pdf") cb(null,true);
    else cb(new Error("only PDF allowed"),false);
};

exports.addResume=async(req,res)=>{
    try {
        const {job_desc,user}=req.body;
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'server error',message:error.message})
        
    }
}