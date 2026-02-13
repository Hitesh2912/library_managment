import React, { useState } from "react";
import { ArrowLeft, Play } from "lucide-react";

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

  if (activeVideo) {
    return (
      <div>
        <button
          onClick={() => setActiveVideo(null)}
          className="mb-4 flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft /> Back
        </button>

        <h1 className="text-2xl font-bold mb-4">{activeVideo.title}</h1>

        <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
          <iframe
            src={activeVideo.url}
            className="w-full h-full"
            title="video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={goBack}
        className="mb-4 flex items-center gap-2 text-blue-600"
      >
        <ArrowLeft /> Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Educational Videos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {videoList.map((vid) => (
          <div
            key={vid.id}
            onClick={() => setActiveVideo(vid)}
            className="bg-white rounded-xl shadow cursor-pointer hover:shadow-lg"
          >
            <img
              src={vid.thumbnail}
              alt=""
              className="rounded-t-xl w-full"
            />

            <div className="p-4 flex items-center gap-3">
              <Play size={24} className="text-blue-600" />
              <p className="font-semibold">{vid.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
