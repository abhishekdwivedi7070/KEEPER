import React from "react";
 import Header from "./heading";
 import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function createNotes(noteItem){
    return <Note
    key={noteItem.key}

    title={noteItem.title}
    content={noteItem.content}
    
    
    
    > </Note>
}

function App(){
   return (
    <div>
        <Header></Header>
       { notes.map(createNotes)}
        <Footer></Footer>
        
    </div>

   );
    
}
export default App;


















