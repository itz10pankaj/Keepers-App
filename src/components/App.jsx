import React, { useEffect,useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";
function App() {
   const[notes,setNotes]=useState([])
   useEffect(() => {
      const savedNotes = JSON.parse(
        localStorage.getItem('react-notes-app-data')
      );
      if (savedNotes) {
        setNotes(savedNotes);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(
        'react-notes-app-data',
        JSON.stringify(notes)
      );
    }, [notes]);
  
   function addNote(newNote){
         setNotes(prevNotes=>{
            return [...prevNotes ,newNote];
         })
   }

   function deleteNote(id){
      setNotes(prevNotes=>{
         return prevNotes.filter((noteItem,index )=>{
            return index!==id;
         })
      })
   }
   return (
     <div>
       <Header />
       <CreateArea onADD={addNote}/>
         {notes.map((noteItem,index) => {
            return <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content} 
            onDelete={deleteNote}/>

         })}
       {/* <Note key={1} title="Note title" content="Note content" /> */}
       <Footer />
     </div>
   );
 }
export default App;