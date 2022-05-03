export default function Slider() {
  return (
    <div className="relative z-10">
      <div className="px-5 bottom-3 sm:bottom-10 lg:bottom-24 lg:w-5/12 absolute text-white">
        <h1 className="text-sm lg:text-3xl">Next Generation</h1>
        <h4 className="text-xl text-sky-400 sm:text-3xl lg:text-5xl font-semibold sm:mt-1">
          Hiring Solutions
        </h4>
      </div>
      <div className="sa-img w-full relative -z-10">
        <img src="/img_1.png" className="w-full" />
      </div>
    </div>
  );
}
