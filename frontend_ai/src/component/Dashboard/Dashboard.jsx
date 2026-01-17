import React, { useState, useContext } from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Skeleton from "@mui/material/Skeleton";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import { AuthContext } from "../../utils/AuthContext";
import axios from "../../utils/axios";

const Dashboard = () => {
  const [uploadFiletext, setUploadFileText] = useState("Upload your resume");
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);

  const { userInfo } = useContext(AuthContext);

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name);
  };

  const handleUpload = async () => {
    setResult(null);

    if (!jobDesc || !resumeFile) {
      alert("Please fill Job Description & Upload Resume");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_desc", jobDesc);
    formData.append("user", userInfo._id);

    setLoading(true);

    try {
      const response = await axios.post("/api/resume/addResume", formData);
      setResult(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-5 lg:p-12.5 gap-7.5 bg-[whitesmoke] box-border">
      {/* Main Card */}
      <div className="w-full lg:w-[70%] bg-[#f4f6fa] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] p-5 lg:p-7.5 flex flex-col box-border">
        <div className="text-[26px] font-semibold">
          Smart Resume Screening
        </div>

        <div className="text-[40px] sm:text-[50px] mt-2">
          Resume Match Score
        </div>

        {/* Instructions */}
        <div className="w-full bg-white rounded-[30px] shadow-[0_4px_6px_rgba(0,0,0,0.1)] px-5 py-3.75 my-5 text-[16px]">
          <div className="flex items-center gap-2 font-semibold">
            <span>🔔</span>
            <span>Important Instruction:</span>
          </div>

          <div className="flex items-start gap-2 ml-6 mt-2">
            <span>📋</span>
            <span>
              Please paste the complete job description in the
              <strong> "Job description" </strong>
              field before submitting.
            </span>
          </div>

          <div className="flex items-center gap-2 ml-6 mt-2">
            <span>🔗</span>
            <span>Only PDF format (.pdf) resumes are accepted.</span>
          </div>
        </div>

        {/* Upload Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-5">
          <div className="w-full lg:w-[60%] bg-white rounded-[30px] px-5 py-3.75 shadow-[0_4px_6px_rgba(0,0,0,0.1)] text-[22px]">
            {uploadFiletext}
          </div>

          <div className="flex items-center">
            <label
              htmlFor="inputField"
              className="text-[18px] cursor-pointer px-10 py-5 text-white font-bold
              bg-linear-to-r from-[#fca326] to-[#f94a6b]
              rounded-[30px] border-[3px] border-black"
            >
              Upload Resume
            </label>

            <input
              type="file"
              accept=".pdf"
              id="inputField"
              className="hidden"
              onChange={handleOnChangeFile}
            />
          </div>
        </div>

        {/* Textarea + Analyze */}
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-5">
          <textarea
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
            placeholder="Paste Your Job Description"
            className="outline-none rounded-[20px] border-2 border-[rgb(14,14,97)]
            px-5 py-2.5 box-border w-full lg:w-[65%] resize-none"
            rows={10}
          />

          <div
            onClick={handleUpload}
            className="w-37.5 h-37.5 border-[3px] border-black flex justify-center items-center
            rounded-full bg-linear-to-r from-[#fca326] to-[#f94a6b]
            text-[22px] text-white cursor-pointer mt-4 lg:mt-10"
          >
            Analyze
          </div>
        </div>
      </div>

      {/* Side Card */}
      <div className="w-full lg:w-[25%] flex flex-col gap-5">
        {/* Top Card */}
        <div className="rounded-[20px] p-5 flex flex-col items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
          <div className="text-[22px] font-bold text-center">
            Analyze with AI
          </div>

          <img
            className="w-21.25 h-21.25 rounded-full my-5 object-cover"
            src={
              userInfo?.photoUrl
                ? userInfo.photoUrl
                : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt="Profile"
          />

          <div className="text-[22px] font-bold">
            {userInfo?.name}
          </div>
        </div>

        {/* Bottom Card */}
        {result && (
          <div className="rounded-[20px] p-5 flex flex-col items-center justify-start shadow-[0_10px_20px_rgba(0,0,0,0.2)]
          mt-4 lg:mt-10 overflow-auto max-h-100 w-full">
            <div className="text-[22px] font-bold mb-2 text-center">
              Result
            </div>

            <div className="flex justify-center items-center gap-5 mb-4">
              <div className="text-[22px] font-bold">
                {result?.score}%
              </div>
              <CreditScoreIcon className="text-[22px]" />
            </div>

            <div className="w-full">
              <div className="text-[22px] font-bold mb-2">
                Feedback
              </div>
              <div className="text-sm sm:text-[16px] leading-relaxed">
                {result?.feedback}
              </div>
            </div>
          </div>
        )}

        {loading && (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "20px" }}
            width={280}
            height={280}
          />
        )}
      </div>
    </div>
  );
};

export default withAuthHOC(Dashboard);
