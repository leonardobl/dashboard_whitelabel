import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Input";

export const LoginTemplate = () => {
  return (
    <div className="page flex">
      <div className="wrapper flex items-center justify-center py-[20px] px-[16px] rounded-[50px] flex-1">
        <form className="max-w-[430px] w-full bg-white rounded-[50px] px-[42px] py-[32px] flex flex-col gap-[24px] ">
          <div className="mb-[24px]">
            <h1 className="text-[48px] font-bold">Login</h1>
            <p className="text-[14px] text-gray">
              Faça login para acessar sua conta.
            </p>
          </div>
          <div>
            <Input
              label="CPF"
              required
              placeholder="00.000.000-00"
              iconright="/assets/svg/icon-person.svg"
            />
          </div>

          <div>
            <Input label="Senha" required type="password" />
          </div>

          <div className="mt-[16px]">
            <Button theme="blue-light" className="w-full">
              Entrar
            </Button>
          </div>

          <div>
            <a href="#" className="text-[14px] text-gray text-center block">
              Esqueceu sua senha?
            </a>
          </div>

          <div className="mt-[48px]">
            <img
              className="block m-auto"
              src="/assets/svg/icon-paguex.svg"
              alt="logo paguex"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
