import React, { useEffect, useState } from "react";
import withAuthHOC from "../../utils/HOC/withAuthHOC";
import { Skeleton } from "@mui/material";
import API from "../../utils/api";


const Admin = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoader(true);
      try {
        const results = await API.get("/api/resume/get");
        setData(Array.isArray(results?.data?.resume) ? results.data.resume : []);
      } catch (error) {
        console.error(error);
        setData([]);
      } finally {
        setLoader(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="flex-[0.8] h-screen p-12.5 bg-[whitesmoke] box-border">
      {/* ONLY admin content scrolls */}
      <div className="h-full overflow-y-auto pr-2">
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Loader */}
          {loader
            ? Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={400}
                  sx={{ borderRadius: "20px" }}
                />
              ))
            : null}

          {/* Data */}
          {(Array.isArray(data) ? data : []).map((item, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]
              rounded-[20px] p-5 box-border"
            >
              <div className="text-[28px] font-bold text-center">
                {item?.user?.name || "No Name"}
              </div>

              <p className="text-blue-500 break-all">
                {item?.user?.email || "No Email"}
              </p>

              <p className="py-3 text-[20px] font-semibold">
                Score: {item?.score ?? "N/A"}%
              </p>

              <p className="text-sm leading-relaxed max-h-40 overflow-auto">
                {item?.feedback || "No feedback"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withAuthHOC(Admin);
