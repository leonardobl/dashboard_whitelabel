import Chrome from "@uiw/react-color-chrome";
import { Button } from "../../Atoms/Button";
import { InputFile } from "../../Atoms/InputFile";
import { PageTemplate } from "../PageTemplate";
import { useHome } from "./useHome";

export const HomeTemplate = () => {
  const { hsva, setHsva, GithubPlacement } = useHome();

  return (
    <PageTemplate>
      <div>
        <h2 className="text-blue text-xl">Logotipo</h2>
        <p className="text-gray">Insira o logotipo da sua empresa.</p>
        <section className="py-8 border-b border-gray">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-5">
              <div className="bg-gray-light rounded-[20px] w-24 h-24 flex items-center justify-center shadow-lg ">
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
                <Button theme="gray">Remover</Button>
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
      </div>
    </PageTemplate>
  );
};
