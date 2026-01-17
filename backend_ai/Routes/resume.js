const express=require("express");
const router = express.Router();
const ResumeController = require('../Controllers/resume');

router.post('/addResume',ResumeController.addResume)

module.exports=router