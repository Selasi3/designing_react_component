import Speaker from "./Speaker"
import useRequestSpeakers, {REQUEST_STATUS} from "../hooks/useRequestSpeaker";

function SpeakersList({showSessions }){
    const {speakersData, requestStatus, error, onFavoriteToggle
    } = useRequestSpeakers(2000);

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
                        onFavoriteToggle={() => {
                            onFavoriteToggle(speaker.id)
                        }}/>
                    })}

                </div>
        </div>
    )
}
export default SpeakersList;