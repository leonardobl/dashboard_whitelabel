import { hsvaToHex } from "@uiw/color-convert";
import { GithubPlacement } from "@uiw/react-color-github";
import { useState } from "react";

export const useHome = () => {
  const [modalServiceOpen, setModalServiceOpen] = useState(false);
  const [hsva, setHsva] = useState({ h: 0, s: 25.71, v: 82.35, a: 0.32 });
  const hex = hsvaToHex(hsva);

  return {
    hex,
    hsva,
    setHsva,
    GithubPlacement,
    modalServiceOpen,
    setModalServiceOpen,
  };
};
