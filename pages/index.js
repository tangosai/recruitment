import Layouts from "..//components/Layouts";
import PopularJobs from "../components/PopularJobs";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layouts>
      <Slider />
      <PopularJobs />
    </Layouts>
  );
}
