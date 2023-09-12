import Speaker from "./Speaker"
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";


function SpeakersList({showSessions }){
    const {data:speakersData, requestStatus, error, updateRecord
    } = useRequestDelay(2000, data);

    if(requestStatus === REQUEST_STATUS.FAILURE){
        return (
            <div className="text-danger">
                ERROR: <b>Loading Speaker Data Failed {error}</b>
            </div>
        )
    }

    // if(requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>
    return (
        <div className="container speakers-list">
                <div className="row">
                    {speakersData.map(function(speaker){

                        return <Speaker
                        key={speaker.id}
                        speaker={speaker}
                        showSessions={showSessions}
                        onFavoriteToggle={(doneCallBack) => {
                        updateRecord({...speaker, favorite: !speaker.favorite}, doneCallBack)                        }}/>
                    })}

                </div>
        </div>
    )
}
export default SpeakersList;