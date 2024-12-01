import Image from "next/image";
import NoteCard from "./components/NoteCard";

export default async function Home() {


  // console.log(`${process.env.BACKEND_URL}`)
  const response = await fetch("http://localhost:8000/api/notes/getnotes");
  if(!(response.status ===200)){
    throw new Error("error occurred while fetching note data")
  }
  const {data} = await response.json(); // here we need to convert the data into json type first
  // console.log(data)

  return (
    <>
   <NoteCard data = {data}/>
   
   </>

    
  );
}
