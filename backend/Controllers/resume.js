const ResumeModel = require("../Models/resume");
const pdfParse = require("pdf-parse");
const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

exports.addResume = async (req, res) => {
  try {
    const { job_desc, user } = req.body;

    // Validation
    if (!req.file) {
      return res.status(400).json({ message: "Resume PDF is required" });
    }

    if (!job_desc || !user) {
      return res.status(400).json({ message: "Job description and user are required" });
    }

    // Parse PDF directly from memory (Vercel-safe)
    const pdfData = await pdfParse(req.file.buffer);

    const prompt = `
You are a resume screening assistant.
Compare the resume text with the Job Description (JD)
and return a match score (0–100) with feedback.

Resume:
${pdfData.text}

Job Description:
${job_desc}

Return strictly in this format:
Score: XX
Reason: ...
`;

    const response = await cohere.chat({
      model: "command-a-03-2025",
      message: prompt,
    });

    const result = response.text || "";

    // Extract score
    const scoreMatch = result.match(/score\s*:\s*(\d+)/i);
    const score = scoreMatch ? parseInt(scoreMatch[1], 10) : null;

    // Extract reason
    const reasonMatch = result.match(/reason\s*:\s*([\s\S]*)/i);
    const reason = reasonMatch ? reasonMatch[1].trim() : null;

    const newResume = new ResumeModel({
      user,
      resume_name: req.file.originalname,
      job_desc,
      score,
      feedback: reason,
    });

    await newResume.save();

    return res.status(200).json({
      message: "Resume analyzed successfully",
      data: newResume,
    });

  } catch (err) {
    console.error("Resume Upload Error:", err);
    return res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};

exports.getAllResumesForUser = async (req, res) => {
  try {
    const { user } = req.params;

    const resumes = await ResumeModel
      .find({ user })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Your previous history",
      resume: resumes,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};

exports.getResumeForAdmin = async (req, res) => {
  try {
    const resumes = await ResumeModel
      .find({})
      .sort({ createdAt: -1 })
      .populate("user");

    return res.status(200).json({
      message: "Fetched all resumes",
      resume: resumes,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};
