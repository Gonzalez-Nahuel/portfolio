import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-4xl grid-cols-2  gap-3 mx-auto my-12 lg:flex lg:grid-cols-4 lg:gap-5">
      {dataCounter.map(({ id, title, text, lineRight, lineRightMobile }) => (
        <div key={id} className={`${lineRight && "ltr"}`}>
          <div
            className={`px-4 ${lineRight && " border-2 border-transparent lg:border-e-gray-100"} ${lineRightMobile && "border-e-gray-100"}`}
          >
            <div className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
              <h3>{title}</h3>
            </div>
            <p className="text-xs  uppercase max-w-[100px]">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;
