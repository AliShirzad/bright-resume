import { FC } from "react";
import { SliderProps } from "../types/index.type";

const Slider: FC<SliderProps> = (props) => {
  return <input type="range" {...props} />;
};

export { Slider };
