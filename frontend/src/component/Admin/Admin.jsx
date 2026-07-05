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
    <div className="w-full min-h-screen p-5 sm:p-12.5 bg-[whitesmoke] box-border">
      <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {/* Loader */}
        {loader
          ? Array.from({ length: 4 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={300}
                sx={{ borderRadius: "20px" }}
              />
            ))
          : null}

        {/* Data */}
        {(Array.isArray(data) ? data : []).map((item, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)]
            rounded-[20px] p-5 box-border flex flex-col justify-between"
          >
            <div>
              <div className="text-[28px] font-bold text-center text-gray-800">
                {item?.user?.name || "No Name"}
              </div>

              <p className="text-blue-500 break-all text-center text-sm py-1">
                {item?.user?.email || "No Email"}
              </p>

              <p className="py-3 text-[18px] font-semibold text-center text-gray-700">
                Score: {item?.score ?? "N/A"}%
              </p>

              <div className="text-sm leading-relaxed max-h-40 overflow-auto text-gray-600 my-2 pr-1">
                {item?.feedback || "No feedback"}
              </div>
            </div>
            {item?.createdAt && (
              <p className="pt-4 text-xs text-gray-400 border-t border-gray-100 mt-2">
                Date: {item.createdAt.slice(0, 10)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withAuthHOC(Admin);
