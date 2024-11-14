import { twMerge } from "tailwind-merge";

export const ButtonTW = twMerge(
  "rounded-[20px] px-[18px] h-[42px] text-[16px] font-semibold flex items-center gap-[8px] justify-center"
);

export const ButtonTWBlue = twMerge("bg-blue text-white");

export const ButtonTWBlueLight = twMerge("bg-blue-light text-white");

export const ButtonTWGray = twMerge("bg-gray-light text-blue");

export const ButtonTWText = twMerge("underline h-fit max-w-fit px-1");
