import { useState } from "react";

export const useHome = () => {
  const [hex, setHex] = useState("#fff");
  const [disableAlpha, setDisableAlpha] = useState(false);

  return { hex, setHex, disableAlpha, setDisableAlpha };
};
