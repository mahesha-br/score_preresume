import React from "react";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";
import API from "../../utils/api";

const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true);
      try {
        const results = await API.get(`/api/resume/get/${userInfo?._id}`);
        console.log(results.data.resumes);
        setData(results.data.resume);
      } catch (error) {
        console.log(error);
        alert("something went wrong");
      } finally {
        setLoader(false);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="w-full min-h-screen p-5 sm:p-12.5 bg-[whitesmoke] box-border">
      <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {loader && (
          <Skeleton
            variant="rectangular"
            height={300}
            sx={{ borderRadius: "20px" }}
          />
        )}

        {data.map((item, index) => {
          return (
            <div
              key={item._id}
              className="w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border flex flex-col justify-between"
            >
              <div>
                <div className="text-[28px] font-bold text-center text-gray-800">
                  Score: {item.score ?? "N/A"}%
                </div>
                <p className="py-3 text-[16px] font-semibold text-gray-700 break-all">
                  Resume: {item.resume_name}
                </p>
                <div className="text-sm leading-relaxed max-h-40 overflow-auto text-gray-600 my-2 pr-1">
                  {item.feedback || "No feedback"}
                </div>
              </div>
              <p className="pt-4 text-xs text-gray-400 border-t border-gray-100">
                Date: {item.createdAt ? item.createdAt.slice(0, 10) : "N/A"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withAuthHOC(History);
