import "prismjs/themes/prism-tomorrow.css";
import EditorModule from "react-simple-code-editor";
import prism from "prismjs";
import { useState } from "react";
import { fetchResponse } from "../services/ai.service";
import { PulseLoader } from "react-spinners";

const Editor = (EditorModule as any).default || EditorModule;

interface LeftPanelProps {
  setReview: React.Dispatch<React.SetStateAction<string>>;
}

const LeftPanel = ({ setReview }: LeftPanelProps) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code || !code.trim()) {
      alert("Textfield is empty");
      return;
    }
    setLoading(true);
    try {
      const response = await fetchResponse(code);
      setReview(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-full w-full">
      <Editor
        value={code}
        onValueChange={(code: string) => setCode(code)}
        highlight={(code: string) =>
          prism.highlight(code, prism.languages.javascript, "javascript")
        }
        padding={16}
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: 14,
          lineHeight: 1.5,
          minHeight: "100%",
          width: "100%",
          //   backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
        }}
      />

      <button
        type="button"
        onClick={handleReview}
        className="fixed bottom-10 left-160 rounded-xl bg-white px-5 py-3 font-semibold text-black shadow-lg hover:bg-gray-200"
      >
        {loading ? (
          <PulseLoader
            color="black"
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
          />
        ) : (
          "Review"
        )}
      </button>
    </div>
  );
};

export default LeftPanel;
