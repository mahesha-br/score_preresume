import React from "react";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import withAuthHOC from "../../utils/HOC/withAuthHOC";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-5 lg:p-12.5 gap-7.5 bg-[whitesmoke] box-border">
      
      {/* Main Card */}
      <div className="w-full lg:w-[70%] bg-[#f4f6fa] rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] p-5 lg:p-7.5 flex flex-col box-border">
        
        <div className="text-[26px] font-semibold">Smart Resume Screening</div>
        <div className="text-[40px] sm:text-[50px] mt-2">Resume Match Score</div>

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
            Upload Your Resume
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
            <input type="file" accept=".pdf" id="inputField" className="hidden" />
          </div>
        </div>

        {/* Textarea + Analyze */}
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-5">
          <textarea
            placeholder="Paste Your Job Description"
            className="outline-none rounded-[20px] border-2 border-[rgb(14,14,97)]
                       px-5 py-2.5 box-border w-full lg:w-[65%] resize-none"
            rows={10}
          />
          <div
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
          <div className="text-[22px] font-bold text-center">Analyze with AI</div>
          <img
            className="w-21.25 h-21.25 rounded-full my-5 object-cover"
            src="https://cdn.pixabay.com/photo/2024/11/30/15/55/eiffel-tower-9235220_1280.jpg"
            alt="Profile"
          />
          <div className="text-[22px] font-bold">mahehsa.dev</div>
        </div>

        {/* Bottom Card */}
        <div className="rounded-[20px] p-5 flex flex-col items-center justify-start shadow-[0_10px_20px_rgba(0,0,0,0.2)]
                        mt-4 lg:mt-10 overflow-auto max-h-100 w-full">
          <div className="text-[22px] font-bold mb-2 text-center">Result</div>
          <div className="flex justify-center items-center gap-5 mb-4">
            <div className="text-[22px] font-bold">75%</div>
            <CreditScoreIcon className="text-[22px]" />
          </div>

          <div className="w-full">
            <div className="text-[22px] font-bold mb-2">Feedback</div>
            <div className="text-sm sm:text-[16px] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, cumque. Sequi, delectus odit sint tempore obcaecati
              sunt consequuntur magnam repudiandae ab id illum esse fugiat,
              tempora necessitatibus. Consectetur quaerat rem, eos mollitia a
              dolore earum repellat saepe laudantium qui distinctio doloremque,
              neque labore vitae, voluptate aut tempore dolores odio repudiandae
              accusantium. Saepe blanditiis quis perferendis sed, quisquam
              impedit facere mollitia atque necessitatibus deleniti, quo quia
              vel dolorum. Quidem reiciendis, in nihil repudiandae sapiente
              aperiam eaque numquam magnam facilis unde! In beatae, explicabo
              nemo numquam, praesentium tempora provident, perspiciatis
              perferendis sed laboriosam molestias odio quidem consequuntur.
              Impedit sapiente quidem nesciunt dignissimos?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuthHOC(Dashboard);
