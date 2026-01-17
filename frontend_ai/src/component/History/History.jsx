import React from "react";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import { Skeleton } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../utils/axios";
import { useContext } from "react";
import { AuthContext } from "../../utils/AuthContext";

const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true);
      try {
        const results = await axios.get(`/api/resume/get/${userInfo?._id}`);
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
    <div className="flex-[0.8] h-screen overflow-auto p-12.5 bg-[whitesmoke] box-border">
      <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {loader && (
          <Skeleton
            variant="rectangular"
            width={266}
            height={200}
            sx={{ borderRadius: "20px" }}
          />
        )}

        {data.map((item, index) => {
          return (
            <div key={item._id}
            className="w-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-[20px] p-5 box-border">
              <div className="text-[34px] text-center">{item.score}</div>
              {/* <h2 className="text-center text-[30px]">Frontend developer</h2> */}
              <p className="py-5">Resume Name:{item.resume_name}</p>
              <p>
                {item.feedback}
              </p>
              <p className="py-5">Date:{item.createdAt.slice(0,10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withAuthHOC(History);
