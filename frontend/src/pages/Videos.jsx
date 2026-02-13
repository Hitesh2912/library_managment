import React, { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Videos({ goBack }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videoList = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      thumbnail: "https://img.youtube.com/vi/92S4zgXN17o/hqdefault.jpg",
      url: "https://www.youtube.com/embed/92S4zgXN17o",
    },
    {
      id: 2,
      title: "Operating System Basics",
      thumbnail: "https://img.youtube.com/vi/9YFIAcfQ9wU/hqdefault.jpg",
      url: "https://www.youtube.com/embed/9YFIAcfQ9wU",
    },
  ];

  // 🎬 Active Video View
  if (activeVideo) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-6"
      >
        <button
          onClick={() => setActiveVideo(null)}
          className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-violet-600 transition"
        >
          <ArrowLeft size={18} /> Back to Videos
        </button>

        <h1 className="text-3xl font-bold mb-6 text-slate-800">
          {activeVideo.title}
        </h1>

        <div className="w-full max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <iframe
            src={activeVideo.url}
            className="w-full h-full"
            title="video"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    );
  }

  // 📚 Video List View
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-8"
    >
      <button
        onClick={goBack}
        className="mb-6 flex items-center gap-2 text-indigo-600 hover:text-violet-600 transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <h1 className="text-4xl font-bold mb-10 text-center text-slate-800">
        Educational Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {videoList.map((vid) => (
          <motion.div
            key={vid.id}
            whileHover={{ y: -8 }}
            onClick={() => setActiveVideo(vid)}
            className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-slate-200 cursor-pointer overflow-hidden transition-all hover:shadow-indigo-300/40"
          >
            <div className="relative">
              <img
                src={vid.thumbnail}
                alt={vid.title}
                className="w-full h-56 object-cover"
              />

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <div className="p-4 bg-white rounded-full shadow-lg">
                  <Play size={28} className="text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="p-5">
              <p className="text-lg font-semibold text-slate-800">
                {vid.title}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Click to watch full lecture
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Bottom Section */}
      <div className="mt-16 text-center">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-6"></div>
        <p className="text-slate-600 italic">
          Learn visually. Understand deeply. Succeed academically.
        </p>
        <div className="h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mt-6"></div>
      </div>
    </motion.div>
  );
}