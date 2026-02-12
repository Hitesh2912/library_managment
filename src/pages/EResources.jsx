import React, { useState } from "react";
import {
  ArrowLeft,
  ExternalLink
} from "lucide-react";

  const EResources = ({goBack}) => {
    const links = [
      {
        title: "NPTEL Courses",
        desc: "Free IIT & IISc online learning portal.",
        url: "https://nptel.ac.in/",
      },
      {
        title: "Coursera Free Courses",
        desc: "Skill-based online courses from top universities.",
        url: "https://www.coursera.org/courses?query=free",
      },
      {
        title: "Google Scholar",
        desc: "Search academic papers & publications.",
        url: "https://scholar.google.com/",
      },
      {
        title: "Digital Library of India",
        desc: "Books & manuscripts available online.",
        url: "https://www.dli.gov.in/",
      },
      {
        title: "ResearchGate",
        desc: "Research papers & journals (login required).",
        url: "https://www.researchgate.net/",
      },
      {
        title: "Free eBooks Library",
        desc: "Free computer science & engineering books.",
        url: "https://www.pdfdrive.com/",
      },
    ];

    return (
      <div>
        <button
          onClick={goBack}
          className="mb-4 flex items-center gap-2 text-blue-600"
        >
          <ArrowLeft /> Back
        </button>

        <h1 className="text-2xl font-bold mb-4">E-Resources</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((res, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-xl font-bold">{res.title}</h2>
              <p className="text-gray-600 mt-1">{res.desc}</p>

              <a
                href={res.url}
                target="_blank"
                className="mt-3 inline-flex items-center gap-2 text-blue-600 font-semibold"
              >
                Visit <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default EResources
