import { Button } from "../../Atoms/Button";
import { Input } from "../../Atoms/Input";
import { PageTemplate } from "../PageTemplate";

export const BasicDataTemplate = () => {
  return (
    <PageTemplate>
      <h1 className="font-semibold text-xl mb-6">Dados Básicos</h1>

      <form className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <div>
          <Input required label="Razão Social" />
        </div>
        <div>
          <Input required label="CNPJ" placeholder="00.000.000/0000-00" />
        </div>{" "}
        <div className="md:col-span-2">
          <Input required label="Endereço" />
        </div>{" "}
        <div>
          <Input required label="Telefone" placeholder="55+ (00) 00000-0000" />
        </div>{" "}
        <div>
          <Input required label="Email" />
        </div>
        <div>
          <Button theme="blue-light" className="ml-auto mt-4">
            Salvar
          </Button>
        </div>
      </form>
    </PageTemplate>
  );
};
