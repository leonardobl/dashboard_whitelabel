import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const usePageTemplate = () => {
  const isMobile = useMediaQuery({ maxWidth: "760px" });
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    }
  }, [isMobile]);

  return { isOpen, setIsOpen, isMobile };
};
