import Speaker from "./Speaker";
import {data} from "../../SpeakerData";
import Header from './Header'
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useState } from "react";

function Speakers(){
 const [theme, setTheme] = useState("light");

  return(
   <div className= {theme === "light" ? "container-fluid light" : "contaiiner-fluid dark"}>
    <Header/>
    <SpeakersToolbar theme={theme} setTheme={setTheme}/>
    <SpeakersList data={data} />

   </div>
  )
}

export default Speakers;