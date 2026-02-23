import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { FormData } from "../App";

interface InterestProps {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}

const Interest = ({ formData, setFormData }: InterestProps) => {
  const handleCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const interestVal = e.target.name;

    if (isChecked && !formData.interest.includes(interestVal)) {
      setFormData((prev) => ({
        ...prev,
        interest: [...prev.interest, interestVal],
      }));
    }

    if (!isChecked && formData.interest.includes(interestVal)) {
      const newArr = formData.interest.filter((int) => int != interestVal);
      setFormData((prev) => ({
        ...prev,
        interest: [...newArr],
      }));
    }
  };
  return (
    <div className="flex gap-4">
      <label htmlFor="VolleyBall">
        VolleyBall :
        <input
          type="checkbox"
          name="VolleyBall"
          id="VolleyBall"
          onChange={handleCheckBox}
        />
      </label>

      <label htmlFor="music">
        Music :
        <input
          type="checkbox"
          name="music"
          id="music"
          onChange={handleCheckBox}
        />
      </label>
      <label htmlFor="dance">
        Dance :
        <input
          type="checkbox"
          name="dance"
          id="dance"
          onChange={handleCheckBox}
        />
      </label>
    </div>
  );
};

export default Interest;
