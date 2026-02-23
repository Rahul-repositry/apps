import type { ChangeEvent } from "react";

interface SettingProps {
  handleDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Setting = ({ handleDataChange }: SettingProps) => {
  return (
    <>
      <div className="flex gap-4">
        <label htmlFor="dark">
          Dark :
          <input
            type="radio"
            name="setting"
            id="dark"
            value="dark"
            onChange={handleDataChange}
          />
        </label>

        <label htmlFor="light">
          Light :
          <input
            type="radio"
            name="setting"
            id="light"
            value="light"
            onChange={handleDataChange}
          />
        </label>
      </div>
    </>
  );
};

export default Setting;
