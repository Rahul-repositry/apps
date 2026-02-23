import { useEffect, useState, type ChangeEvent } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Interest from "./components/Interest";
import Setting from "./components/Setting";

// 1. Define the shape of your form data
export interface FormData {
  name: string;
  gmail: string;
  pass: string;
  interest: string[]; // array of strings
  setting: "dark" | "light"; // union type
}

type Tabs = "Profile" | "Interest" | "Setting";

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    gmail: "",
    pass: "",
    interest: [],
    setting: "light",
  });

  const [tab, setTab] = useState<Tabs>("Profile");

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  // 2. Type the event as ChangeEvent from an HTMLInputElement
  const handleDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 3. Wrap the object return in parentheses ()
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className=" flex  gap-4">
        <button
          className="px-2 py-1  bg-gray-400 rounded"
          onClick={() => {
            setTab("Profile");
          }}
        >
          Profile
        </button>
        <button
          className="px-2 py-1  bg-gray-400 rounded"
          onClick={() => {
            setTab("Interest");
          }}
        >
          Interest
        </button>
        <button
          className="px-2 py-1  bg-gray-400 rounded"
          onClick={() => {
            setTab("Setting");
          }}
        >
          Setting
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-5">
        {tab === "Profile" && (
          <Profile formData={formData} handleDataChange={handleDataChange} />
        )}
        {tab === "Interest" && (
          <Interest formData={formData} setFormData={setFormData} />
        )}
        {tab === "Setting" && <Setting handleDataChange={handleDataChange} />}
      </form>
    </>
  );
}

export default App;
