import { dataStackIcons } from "@/data";
import Image from "next/image";

export const TechstackBacground = () => {
  return (
    <div className="grid grid-cols-3 w-auto h-auto absolute right-12 top-1/4">
      <div className="flex flex-col items-center justify-center gap-6">
        {dataStackIcons.left.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl p-[2.5px] bg-gradient-to-br from-[#4DA3FF] via-[#9B7DCC] to-[#FF5D73] shadow-[0_0_15px_rgba(255,93,115,0.15)]"
          >
            <div className="flex flex-col items-center justify-between gap-2 text-sm font-bold rounded-2xl w-40 pt-2 pb-1 bg-[#1f1934]">
              <Image
                alt={data.title}
                src={data.logo}
                width={data.width}
                height={data.height}
              />
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {" "}
        {dataStackIcons.center.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl p-[2.5px] bg-gradient-to-br from-[#4DA3FF] via-[#9B7DCC] to-[#FF5D73] shadow-[0_0_15px_rgba(255,93,115,0.15)]"
          >
            <div className="flex flex-col items-center justify-between gap-2 text-sm font-bold rounded-2xl w-40 pt-[6px] pb-1 bg-[#1f1934]">
              <Image
                alt={data.title}
                src={data.logo}
                width={data.width}
                height={data.height}
              />
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        {" "}
        {dataStackIcons.right.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl p-[2.5px] bg-gradient-to-br from-[#4DA3FF] via-[#9B7DCC] to-[#FF5D73] shadow-[0_0_15px_rgba(255,93,115,0.15)]"
          >
            <div className="flex flex-col items-center justify-between gap-2 text-sm font-bold rounded-2xl w-40 pt-[6px] pb-1 bg-[#1f1934]">
              <Image
                alt={data.title}
                src={data.logo}
                width={data.width}
                height={data.height}
              />
              <span>{data.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
