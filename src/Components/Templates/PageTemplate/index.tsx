import { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import { usePageTemplate } from "./usePageTemplate";

type IPageTemplateProps = ComponentProps<"div">;

export const PageTemplate = (props: IPageTemplateProps) => {
  const { isOpen, setIsOpen, isMobile } = usePageTemplate();
  return (
    <div
      {...props}
      className="bg-blue-bg pt-9 min-h-dvh flex relative md:pr-[72px]"
    >
      <nav
        className={`bg-blue-bg left-[-100%] px-8 absolute transition-all min-h-full w-full md:max-w-[235px]  md:left-0 ${
          isOpen && isMobile && "left-[0%]"
        } md:relative`}
      >
        <div className="flex items-center gap-2 mb-8">
          <img src="/assets/svg/circle-yellow.svg" alt="avatar user" />
          <div className="flex flex-col gap-1">
            <p className="text-white">Empresa</p>
            <button className="flex gap-2 items-center text-gray cursor-pointer text-xs">
              Sair
              <img src="/assets/svg/icon-exit.svg" alt="icon sair" />
            </button>
          </div>
        </div>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex gap-2 px-4 py-2 w-full ${
                  isActive && "bg-blue rounded-[10px]"
                }`
              }
            >
              <img src="/assets/svg/icon-colors.svg" alt="icon colors" />
              <span className="text-white font-bold">Aparência</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="bg-white rounded-t-[60px] flex-1 py-5 px-4 md:py-8 md:px-5">
        {props.children}
      </main>

      <div
        className="fixed bg-yellow max-w-[320px] w-full flex justify-center items-center rounded-[40px] h-[60px] right-[50%] translate-x-[50%] bottom-4 sm:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p className="text-white text-xs flex flex-col items-center justify-center">
          <img src="/assets/svg/icon-square-menu.svg" alt="icone menu" />
          Menu
        </p>
      </div>
    </div>
  );
};
