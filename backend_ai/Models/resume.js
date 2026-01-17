const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true,
    },
    resume_name:{
        type:String,
        require:true
    },
    job_desc:{
        type:String,
        require:true
    },
    feedback:{
        type:String
    },
},{timestamps:true});

const resumeModel=mongoose.model("resume",ResumeSchema);

module.exports=resumeModel;