import { Button } from "../../Atoms/Button";

export const HomeTemplate = () => {
  return (
    <div className="h-dvh">
      <div className="py-[48px] px-[16px] w-full max-w-[1440px] mx-auto md:py-[32px] ">
        <header className="flex justify-between items-center m-auto mb-[16px]">
          <img src="/assets/svg/logo.svg" alt="logo" />
          <Button iconleft="/assets/svg/icon-arrow-right-white.svg">
            Agendar Vistoria
          </Button>
        </header>

        <img
          src="/assets/img/banner.png"
          alt="banner"
          className="w-full block h-[630px] mb-[32px] lg:mb-[80px]"
        />

        <h2 className="title-section">Serviços</h2>

        <div className="flex justify-around flex-wrap gap-[32px] mb-[80px]">
          <div className="card">
            <h2 className="card-title">Nome do Serviço</h2>

            <p className="card-text">
              Lorem Ipsum has been the industrysstandarddummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <p className="card-title">Valor: R$ 00,00</p>
          </div>

          <div className="card">
            <h2 className="card-title">Nome do Serviço</h2>

            <p className="card-text">
              Lorem Ipsum has been the industrysstandarddummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <p className="card-title">Valor: R$ 00,00</p>
          </div>

          <div className="card">
            <h2 className="card-title">Nome do Serviço</h2>

            <p className="card-text">
              Lorem Ipsum has been the industrysstandarddummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <p className="card-title">Valor: R$ 00,00</p>
          </div>
        </div>

        <h2 className="title-section">Unidade de Atendimento</h2>

        <div className="flex flex-wrap gap-[32px] justify-center lg:gap-x-[40px] lg:gap-y-[80px] mb-[32px] lg:mb-[80px]">
          <div className="w-fit">
            <img
              src="/assets/svg/location.svg"
              alt="icone localizacao"
              className="mb-[24px]"
            />

            <h3 className="text-[20px] font-bold text-center mb-[24px]">
              Nome da Cidade{" "}
            </h3>

            <div className="flex gap-[16px]">
              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-phone.svg" alt="icone telefone" />
                (00) 00000-0000
              </p>

              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-whatsapp.svg" alt="icone whatsapp" />
                (00) 00000-0000
              </p>
            </div>
          </div>

          <div className="w-fit">
            <img
              src="/assets/svg/location.svg"
              alt="icone localizacao"
              className="mb-[24px]"
            />

            <h3 className="text-[20px] font-bold text-center mb-[24px]">
              Nome da Cidade{" "}
            </h3>

            <div className="flex gap-[16px]">
              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-phone.svg" alt="icone telefone" />
                (00) 00000-0000
              </p>

              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-whatsapp.svg" alt="icone whatsapp" />
                (00) 00000-0000
              </p>
            </div>
          </div>

          <div className="w-fit">
            <img
              src="/assets/svg/location.svg"
              alt="icone localizacao"
              className="mb-[24px]"
            />

            <h3 className="text-[20px] font-bold text-center mb-[24px]">
              Nome da Cidade{" "}
            </h3>

            <div className="flex gap-[16px]">
              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-phone.svg" alt="icone telefone" />
                (00) 00000-0000
              </p>

              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-whatsapp.svg" alt="icone whatsapp" />
                (00) 00000-0000
              </p>
            </div>
          </div>

          <div className="w-fit">
            <img
              src="/assets/svg/location.svg"
              alt="icone localizacao"
              className="mb-[24px]"
            />

            <h3 className="text-[20px] font-bold text-center mb-[24px]">
              Nome da Cidade{" "}
            </h3>

            <div className="flex gap-[16px]">
              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-phone.svg" alt="icone telefone" />
                (00) 00000-0000
              </p>

              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-whatsapp.svg" alt="icone whatsapp" />
                (00) 00000-0000
              </p>
            </div>
          </div>

          <div className="w-fit">
            <img
              src="/assets/svg/location.svg"
              alt="icone localizacao"
              className="mb-[24px]"
            />

            <h3 className="text-[20px] font-bold text-center mb-[24px]">
              Nome da Cidade{" "}
            </h3>

            <div className="flex gap-[16px]">
              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-phone.svg" alt="icone telefone" />
                (00) 00000-0000
              </p>

              <p className="flex gap-[8px]">
                <img src="/assets/svg/icon-whatsapp.svg" alt="icone whatsapp" />
                (00) 00000-0000
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-dark p-[16px]">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[20px]">
          <img
            src="/assets/svg/logo-white.svg"
            alt="logo"
            className="block w-fit"
          />

          <div className="text-white flex gap-[16px] items-center font-semibold">
            <button>Termos de Uso</button>
            <img src="/assets/svg/dot.svg" alt="dot" />
            <button>Política de Privacidade</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
