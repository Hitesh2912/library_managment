import React, { useState } from "react";
import { Video, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Videos from "./Videos";
import EResources from "./EResources";

const Resources = () => {
  const [page, setPage] = useState("home");

  const Home = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center text-slate-800">
        Library Resources
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* E-Resources Card */}
        <motion.div
          whileHover={{ y: -8 }}
          onClick={() => setPage("eres")}
          className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-slate-200 cursor-pointer flex flex-col items-center transition-all hover:shadow-indigo-300/40"
        >
          <div className="p-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-full mb-5 shadow-lg">
            <GraduationCap size={40} />
          </div>
          <p className="text-xl font-semibold text-slate-800">
            E-Resources
          </p>
          <p className="text-slate-500 text-sm mt-2 text-center">
            Access digital academic platforms & research tools
          </p>
        </motion.div>

        {/* Videos Card */}
        <motion.div
          whileHover={{ y: -8 }}
          onClick={() => setPage("videos")}
          className="p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-slate-200 cursor-pointer flex flex-col items-center transition-all hover:shadow-red-300/40"
        >
          <div className="p-5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full mb-5 shadow-lg">
            <Video size={40} />
          </div>
          <p className="text-xl font-semibold text-slate-800">
            Educational Videos
          </p>
          <p className="text-slate-500 text-sm mt-2 text-center">
            Watch curated learning and academic content
          </p>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-8">
      <AnimatePresence mode="wait">
        {page === "home" && <Home key="home" />}
        {page === "eres" && (
          <EResources key="eres" goBack={() => setPage("home")} />
        )}
        {page === "videos" && (
          <Videos key="videos" goBack={() => setPage("home")} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Resources;