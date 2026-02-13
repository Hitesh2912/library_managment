import React, { useState } from "react";
import { ArrowLeft, ExternalLink, Globe, Search } from "lucide-react";
import { motion } from "framer-motion";

const EResources = ({ goBack }) => {
  const [search, setSearch] = useState("");

  const links = [
    {
      title: "NPTEL Courses",
      desc: "Free IIT & IISc online learning portal.",
      url: "https://nptel.ac.in/",
      tag: "Education",
    },
    {
      title: "Coursera Free Courses",
      desc: "Skill-based online courses from top universities.",
      url: "https://www.coursera.org/courses?query=free",
      tag: "Courses",
    },
    {
      title: "Google Scholar",
      desc: "Search academic papers & publications.",
      url: "https://scholar.google.com/",
      tag: "Research",
    },
    {
      title: "Digital Library of India",
      desc: "Books & manuscripts available online.",
      url: "https://www.dli.gov.in/",
      tag: "Library",
    },
    {
      title: "ResearchGate",
      desc: "Research papers & journals (login required).",
      url: "https://www.researchgate.net/",
      tag: "Journals",
    },
    {
      title: "Free eBooks Library",
      desc: "Free computer science & engineering books.",
      url: "https://www.pdfdrive.com/",
      tag: "eBooks",
    },
  ];

  const filteredLinks = links.filter((res) =>
    res.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-violet-100 p-8"
    >
      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-6 flex items-center gap-2 text-indigo-600 font-medium hover:text-violet-600 transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Digital E-Resources Portal
        </h1>
        <p className="text-slate-600 mt-2">
          Access trusted academic platforms and research tools
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-12 relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {filteredLinks.map((res, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-6 border border-slate-200 hover:shadow-indigo-300/40 transition-all"
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-600 mb-4">
              {res.tag}
            </span>

            <h2 className="text-xl font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Globe size={18} className="text-indigo-500" />
              {res.title}
            </h2>

            <p className="text-slate-600 mb-5">{res.desc}</p>

            <a
              href={res.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300"
            >
              Visit Resource <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="mt-16 max-w-4xl mx-auto">
        <div className="h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-8"></div>

        <div className="text-center px-6">
          <p className="text-lg font-medium text-slate-700 italic">
            "Knowledge shared is knowledge multiplied."
          </p>
          <p className="text-slate-500 mt-2">
            Empowering students through accessible digital learning resources.
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent mt-8"></div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Library Management System</p>
        <p className="mt-1">Digital Academic Resource Portal</p>
      </footer>
    </motion.div>
  );
};

export default EResources;