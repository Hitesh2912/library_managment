import React from "react";
import { Book, Users, FileText, Search } from "lucide-react";

export default function Dashboard() {
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Library Dashboard</h1>

      <div className="flex items-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search..."
          className={"w-full p-3 rounded-xl bg-white"
          }
        />
        <button className="p-3 bg-blue-600 text-white rounded-xl shadow">
          <Search />
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={"bg-white p-5 rounded-xl"}>
          <div className="flex gap-3 items-center">
            <Book size={40} />
            <div>
              <p>Total Books</p>
              <h2 className="text-2xl font-bold">3200</h2>
            </div>
          </div>
        </div>

        <div className={"bg-white p-5 rounded-xl"}>
          <div className="flex gap-3 items-center">
            <Users size={40} />
            <div>
              <p>Active Members</p>
              <h2 className="text-2xl font-bold">850</h2>
            </div>
          </div>
        </div>

        <div className={"bg-white p-5 rounded-xl"}>
          <div className="flex gap-3 items-center">
            <FileText size={40} />
            <div>
              <p>Issued Today</p>
              <h2 className="text-2xl font-bold">72</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
