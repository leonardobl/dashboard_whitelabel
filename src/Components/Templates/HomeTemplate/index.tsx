import Chrome from "@uiw/react-color-chrome";
import { Button } from "../../Atoms/Button";
import { InputFile } from "../../Atoms/InputFile";
import { PageTemplate } from "../PageTemplate";
import { useHome } from "./useHome";
import { Input } from "../../Atoms/Input";
import { Modal } from "../../Atoms/Modal";
import { TextArea } from "../../Atoms/TextArea";
import { InputMoney } from "../../Atoms/InputMoney";

export const HomeTemplate = () => {
  const {
    hsva,
    setHsva,
    GithubPlacement,
    modalServiceOpen,
    setModalServiceOpen,
    modalLocationOpen,
    setModalLocationOpen,
  } = useHome();

  return (
    <PageTemplate>
      <form>
        <h2 className="text-blue text-xl">Logotipo</h2>
        <p className="text-gray">Insira o logotipo da sua empresa.</p>
        <section className="py-8 border-b border-gray">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-5">
              <div className="bg-gray-light rounded-[20px] w-24 h-24 flex items-center justify-center shadow-lg border-dashed border-[1px] border-gray">
                <div className="w-9 h-9 bg-gray-light flex justify-center items-center rounded-md shadow-lg">
                  <img
                    src="/assets/svg/icon-cloud-upload.svg"
                    alt="icone input file"
                  />
                </div>
              </div>
              <p className="text-gray">SVG. / 4MB / 100x100</p>
            </div>
            <div className="flex gap-4">
              <div>
                <InputFile
                  onChange={(file) => console.log(file)}
                  fileTypes={[]}
                />
              </div>
              <div>
                <Button type="button" theme="gray">
                  Remover
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-gray">
          <div className="mb-8">
            <h2 className="text-blue text-xl">Cor Principal</h2>
            <p className="text-gray">
              Selecione a cor principal da sua empresa.
            </p>
          </div>
          <div className="m-auto w-fit  md:w-full">
            <Chrome
              color={hsva}
              style={{
                padding: "32px 24px",
                borderRadius: "8px",
                width: "100%",
                maxWidth: "270px",
              }}
              placement={GithubPlacement.Right}
              onChange={(color) => {
                setHsva(color.hsva);
              }}
            />
          </div>
        </section>

        <section className="py-8 border-b border-gray">
          <div className="mb-8">
            <h2 className="text-blue text-xl">Link Mapa</h2>
            <p className="text-gray">
              Adicione o link do mapa referente a sua empresa.
            </p>
          </div>

          <div>
            <Input
              placeholder="https://..."
              iconright="/assets/svg/icon-link.svg"
            />
          </div>
        </section>

        <section className="py-8 border-b border-gray ">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-5 w-full md:w-fit">
              <div className="bg-gray-light rounded-[20px] w-full  h-72 flex items-center justify-center shadow-lg border-dashed border-[1px] border-gray lg:w-[530px]">
                <div className="w-9 h-9 bg-gray-light flex justify-center items-center rounded-md shadow-lg">
                  <img
                    src="/assets/svg/icon-cloud-upload.svg"
                    alt="icone input file"
                  />
                </div>
              </div>
              <p className="text-gray">PNG./ ING. / 10MB / 1292x600</p>
            </div>
            <div className="flex gap-4">
              <div>
                <InputFile
                  onChange={(file) => console.log(file)}
                  fileTypes={[]}
                />
              </div>
              <div>
                <Button type="button" theme="gray">
                  Remover
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-gray ">
          <div className="mb-8">
            <h2 className="text-blue text-xl">Serviços</h2>
            <p className="text-gray">
              Adicione os serviços oferecidos pela sua empresa.
            </p>
          </div>

          <div>
            <Button
              theme="text"
              type="button"
              iconright="/assets/svg/icon-plus-blue-light.svg"
              className="text-blue-btn"
              onClick={() => setModalServiceOpen(true)}
            >
              Adicionar serviço
            </Button>
          </div>

          <div>
            <div className="p-3 flex flex-col gap-3 bg-gray-light mt-6 md:grid md:grid-flow-col justify-between items-center">
              <p className="text-gray font-semibold">
                Serviços: <span className="font-normal">Nome do serviço</span>
              </p>
              <p className="text-gray font-semibold">
                Descrição:
                <span className="font-normal">
                  Lorem Ipsum has been the industry text ever since....
                </span>
              </p>

              <div className="flex gap-4">
                <Button type="button" theme="text">
                  Editar
                </Button>

                <button type="button">
                  <img src="/assets/svg/icon-trash.svg" alt="icone lixo" />
                </button>
              </div>
            </div>

            <div className="p-3 flex flex-col gap-3 bg-gray-light mt-6 md:grid md:grid-flow-col justify-between items-center">
              <p className="text-gray font-semibold">
                Serviços: <span className="font-normal">Nome do serviço</span>
              </p>
              <p className="text-gray font-semibold">
                Descrição:
                <span className="font-normal">
                  Lorem Ipsum has been the industry text ever since....
                </span>
              </p>

              <div className="flex gap-4">
                <Button type="button" theme="text">
                  Editar
                </Button>

                <button type="button">
                  <img src="/assets/svg/icon-trash.svg" alt="icone lixo" />
                </button>
              </div>
            </div>

            <div className="p-3 flex flex-col gap-3 bg-gray-light mt-6 md:grid md:grid-flow-col justify-between items-center">
              <p className="text-gray font-semibold">
                Serviços: <span className="font-normal">Nome do serviço</span>
              </p>
              <p className="text-gray font-semibold">
                Descrição:
                <span className="font-normal">
                  Lorem Ipsum has been the industry text ever since....
                </span>
              </p>

              <div className="flex gap-4">
                <Button type="button" theme="text">
                  Editar
                </Button>

                <button type="button">
                  <img src="/assets/svg/icon-trash.svg" alt="icone lixo" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b border-gray ">
          <div className="mb-8">
            <h2 className="text-blue text-xl">Unidades de Atendimento</h2>
            <p className="text-gray">
              Adicione os serviços oferecidos pela sua empresa.h
            </p>
          </div>

          <div>
            <Button
              theme="text"
              type="button"
              iconright="/assets/svg/icon-plus-blue-light.svg"
              className="text-blue-btn"
              onClick={() => setModalLocationOpen(true)}
            >
              Adicionar localização
            </Button>
          </div>

          <div>
            <div className="p-3 flex flex-col gap-3 bg-gray-light mt-6 md:grid md:grid-flow-col justify-between items-center">
              <p className="text-gray font-semibold">
                Cidade: <span className="font-normal">Nome da Cidade</span>
              </p>
              <p className="text-gray font-semibold">
                Contato:
                <span className="font-normal">55+ (00) 00000-0000</span>
              </p>

              <div className="flex gap-4">
                <Button type="button" theme="text">
                  Editar
                </Button>

                <button type="button">
                  <img src="/assets/svg/icon-trash.svg" alt="icone lixo" />
                </button>
              </div>
            </div>

            <div className="p-3 flex flex-col gap-3 bg-gray-light mt-6 md:grid md:grid-flow-col justify-between items-center">
              <p className="text-gray font-semibold">
                Cidade: <span className="font-normal">Nome da Cidade</span>
              </p>
              <p className="text-gray font-semibold">
                Contato:
                <span className="font-normal">55+ (00) 00000-0000</span>
              </p>

              <div className="flex gap-4">
                <Button type="button" theme="text">
                  Editar
                </Button>

                <button type="button">
                  <img src="/assets/svg/icon-trash.svg" alt="icone lixo" />
                </button>
              </div>
            </div>

            <div className="p-3 flex flex-col gap-3 bg-gray-light mt-6 md:grid md:grid-flow-col justify-between items-center">
              <p className="text-gray font-semibold">
                Cidade: <span className="font-normal">Nome da Cidade</span>
              </p>
              <p className="text-gray font-semibold">
                Contato:
                <span className="font-normal">55+ (00) 00000-0000</span>
              </p>

              <div className="flex gap-4">
                <Button type="button" theme="text">
                  Editar
                </Button>

                <button type="button">
                  <img src="/assets/svg/icon-trash.svg" alt="icone lixo" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Modal
          isOpen={modalServiceOpen}
          onRequestClose={() => setModalServiceOpen(false)}
        >
          <div className="p-8">
            <button
              type="button"
              className="ml-auto block"
              onClick={() => setModalServiceOpen(false)}
            >
              X
            </button>
            <form className="flex flex-col gap-6">
              <div>
                <Input label="Serviço" required />
              </div>

              <div>
                <TextArea placeholder="Descrição" required />
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <InputMoney label="Valor" required placeholder="R$ 0,00" />
                </div>
                <Button theme="blue-light" className="mt-auto">
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        <Modal
          isOpen={modalLocationOpen}
          onRequestClose={() => setModalLocationOpen(false)}
        >
          <div className="p-8">
            <button
              type="button"
              className="ml-auto block"
              onClick={() => setModalLocationOpen(false)}
            >
              X
            </button>
            <form className="flex flex-col gap-6">
              <div>
                <Input
                  label="Geolocalização"
                  required
                  iconright="/assets/svg/icon-link.svg"
                  placeholder="https://..."
                />
              </div>{" "}
              <div>
                <Input label="Cidade" required />
              </div>{" "}
              <div>
                <Input
                  label="Contato"
                  required
                  iconright="/assets/svg/icon-phone.svg"
                  placeholder="55+ (00) 00000-0000"
                />
              </div>
              <div>
                <Button theme="blue-light" className="ml-auto">
                  Salvar
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      </form>
    </PageTemplate>
  );
};
