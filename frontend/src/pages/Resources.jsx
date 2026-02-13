import React, { useState } from "react";
import {

  Video,
  GraduationCap
} from "lucide-react";
import Videos from "./Videos";
import EResources from "./EResources";

const Resources = () => {
  const [page, setPage] = useState("home");
  const [activeVideo, setActiveVideo] = useState(null);

  const Home = () => (
    <div>
      <h1 className="text-3xl font-bold mb-6">Library Resources</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
        <div
          onClick={() => setPage("eres")}
          className="p-5 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer flex flex-col items-center"
        >
          <div className="p-4 bg-blue-600 text-white rounded-full mb-3">
            <GraduationCap size={35} />
          </div>
          <p className="text-lg font-semibold">E-Resources</p>
        </div>

        <div
          onClick={() => setPage("videos")}
          className="p-5 bg-white rounded-2xl shadow hover:shadow-lg cursor-pointer flex flex-col items-center"
        >
          <div className="p-4 bg-red-600 text-white rounded-full mb-3">
            <Video size={35} />
          </div>
          <p className="text-lg font-semibold">Videos</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {page === "home" && <Home />}
      {page === "eres" && <EResources />}
      {page === "videos" && <Videos />}
    </div>
  );
}


export default Resources
