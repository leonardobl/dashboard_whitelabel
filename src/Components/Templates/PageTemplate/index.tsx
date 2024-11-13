import { ComponentProps } from "react";
import { NavLink } from "react-router-dom";
import { usePageTemplate } from "./usePageTemplate";

type IPageTemplateProps = ComponentProps<"div">;

export const PageTemplate = (props: IPageTemplateProps) => {
  const { isOpen, setIsOpen, isMobile } = usePageTemplate();
  return (
    <div
      {...props}
      className="bg-blue-bg pt-9 flex relative h-dvh md:pr-[72px] overflow-y-auto"
    >
      <nav
        className={`bg-blue-bg left-[-100%] top-0 pt-9 z-40 px-6 fixed transition-all h-full w-full  md:max-w-[235px]  md:left-0 ${
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

        <ul className="flex flex-col gap-5">
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

          <li>
            <NavLink
              to="/dados-basicos"
              className={({ isActive }) =>
                `flex gap-2 px-4 py-2 w-full ${
                  isActive && "bg-blue rounded-[10px]"
                }`
              }
            >
              <img src="/assets/svg/icon-avatar-menu.svg" alt="icon colors" />
              <span className="text-white font-bold whitespace-nowrap">
                Dados Básicos
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="bg-white rounded-t-[60px] h-fit min-h-full flex-1 py-8 px-4 pb-16 md:px-8">
        {props.children}
      </main>

      <div
        className="fixed z-50 bg-yellow max-w-[320px] w-full flex justify-center items-center rounded-[40px] h-[60px] right-[50%] translate-x-[50%] bottom-4 md:hidden"
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
