import { IFileCustom, useInputFile } from "./useInputFile";
import { FileUploader } from "react-drag-drop-files";
import { useEffect } from "react";
import { Button } from "../Button";

type InputFileProps = {
  onChange: (file: IFileCustom) => void;
  fileTypes: string[];
};

export const InputFile = ({ onChange, fileTypes }: InputFileProps) => {
  const { dropHandler, file } = useInputFile();

  // const fileTypes = ["JPG", "PNG", "GIF"];
  // const fileTypes = ["pdf", "txt"];

  useEffect(() => {
    if (onChange && file) {
      onChange(file as IFileCustom);
    }
  }, [file, onChange]);

  return (
    <FileUploader
      dropMessageStyle={{
        backgroundColor: "#ECF0F8",
        borderRadius: 12,
        border: "none",
      }}
      handleChange={dropHandler}
      name="file"
      hoverTitle=" "
      types={fileTypes}
    >
      <Button type="button" theme="blue-light">
        Inserir
      </Button>
    </FileUploader>
  );
};
