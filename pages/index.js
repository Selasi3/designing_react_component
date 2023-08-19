import Speakers from "../src/components/Speakers";
import { data } from "../SpeakerData";

const IndexPage = () => {
    return (
      <Speakers data={data}/>
    )
}
export default IndexPage;