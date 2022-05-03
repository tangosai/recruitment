import Heading from "./Heading";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiPen } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { IoHeadsetOutline } from "react-icons/io5";
import { BsCamera } from "react-icons/bs";
import Item from "./Item";
export default function PopularJobs() {
  const data = [
    {
      icon: "HiOutlineSpeakerphone",
      title: "Markter",
      id: 1,
    },
    {
      icon: "BiPen",
      title: "Designer",
      id: 2,
    },
    {
      icon: "IoHeadsetOutline",
      title: "Anchor",
      id: 3,
    },
    {
      icon: "FiEdit",
      title: "CopyWriter",
      id: 4,
    },
    {
      icon: "BsCamera",
      title: "Photographer",
      id: 5,
    },
  ];
  return (
    <section className="ex-t-d py-5 md:py-10">
      <Heading title="Popular Category" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Item title="Markter" Icon={HiOutlineSpeakerphone} />
        <Item title="Designer" Icon={BiPen} />
        <Item title="Anchor" Icon={IoHeadsetOutline} />
        <Item title="CopyWriter" Icon={FiEdit} />
        <Item title="Photographer" Icon={BsCamera} />
        {/* {data.map((datas, index) => {
          return (
            <>
              <Item title={datas.title} Icon={datas.icon} key={index} />
            </>
          );
        })} */}
      </div>
    </section>
  );
}
