import { Input } from "../../Atoms/Input";

export const LoginTemplate = () => {
  return (
    <div className="wrapper">
      <form>
        <Input
          label="Label"
          required
          placeholder="placeholder"
          iconright="/assets/svg/icon-cancel.svg"
        />
      </form>
    </div>
  );
};
