import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Input";

export const ForgotPasswordTemplate = () => {
  return (
    <div className="page flex">
      <div className="wrapper flex items-center justify-center py-[20px] px-[16px] rounded-[50px] flex-1">
        <form className="max-w-[730px] w-full bg-white rounded-[50px] px-[26px] py-[32px] lg:px-[72px] flex flex-col gap-[24px] ">
          <div className="mb-[24px]">
            <h1 className="text-[20px] font-bold text-center mb-[16px]">
              Recupere sua senha
            </h1>
            <p className="text-[14px] text-gray text-center">
              Por favor, informe seu endereço de e-mail associado a sua conta
              para que possamos enviar um link de redefinição de senha.
            </p>
          </div>
          <div>
            <Input
              label="Email"
              required
              placeholder="Digite seu e-mail aqui"
              type="email"
              iconright="/assets/svg/icon-email.svg"
            />
          </div>

          <div className="mt-[16px]">
            <Button theme="blue-light" className="w-full">
              Enviar
            </Button>
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
