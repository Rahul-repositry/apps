import type { ChangeEvent } from "react";
import type { FormData } from "../App";

interface ProfileProps {
  formData: FormData;
  handleDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Profile = ({ formData, handleDataChange }: ProfileProps) => {
  return (
    <div className="flex flex-col place-items-start gap-4">
      <label htmlFor="name">
        Name :
        <input
          type="text"
          name="name"
          id="name"
          className="border border-2 border-gray-500 rounded text-gray-700"
          value={formData.name}
          onChange={handleDataChange}
        />
      </label>
      <label htmlFor="gmail">
        gmail :
        <input
          type="text"
          name="gmail"
          id="gmail"
          className="border border-2 border-gray-500 rounded text-gray-700"
          value={formData.gmail}
          onChange={handleDataChange}
        />
      </label>
      <label htmlFor="pass">
        Password :
        <input
          type="text"
          name="pass"
          id="pass"
          className="border border-2 border-gray-500 rounded text-gray-700"
          value={formData.pass}
          onChange={handleDataChange}
        />
      </label>
    </div>
  );
};

export default Profile;
