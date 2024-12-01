import { Note } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NoteCard = ({ data }: { data: Note[] }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 min-h-screen">
      {data.map((note) => {
        return (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full"
            key={note._id}
          >
            <Image
              src={note.file}
              alt={note.title}
              width={400}
              height={200}
              style={{ padding: "20px" }}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {note.title}
              </h2>
              <h3>{note.subtitle}</h3>
              <p className="text-gray-700 leading-tight mb-4">
                {note.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <span className="text-gray-800 font-semibold">John Doe</span>
                </div>
                <span className="text-gray-600">2 hours ago</span>
              </div>
              <Link href={`/note/${note._id}`} className="text-slate-900">
                Read more
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoteCard;
