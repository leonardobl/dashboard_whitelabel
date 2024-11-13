import { Button } from "../../Atoms/Button";
import { InputFile } from "../../Atoms/InputFile";
import { PageTemplate } from "../PageTemplate";

export const HomeTemplate = () => {
  return (
    <PageTemplate>
      <div>
        <h2 className="text-blue text-xl">Logotipo</h2>
        <p className="text-gray">Insira o logotipo da sua empresa.</p>

        <div className="flex items-center gap-4 py-8 border-b border-gray">
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
          <div>
            <InputFile onChange={(file) => console.log(file)} fileTypes={[]} />
          </div>
          <div>
            <Button theme="gray">Remover</Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
