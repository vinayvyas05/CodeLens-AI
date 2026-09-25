import "prismjs/themes/prism-tomorrow.css";
import EditorModule from "react-simple-code-editor";
import prism from "prismjs";
import { useState } from "react";

const Editor = (EditorModule as any).default || EditorModule;

const LeftPanel = () => {
  const [code, setCode] = useState("");

  return (
    <div className="relative h-full w-full">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) =>
          prism.highlight(
            code,
            prism.languages.javascript,
            "javascript"
          )
        }
        padding={16}
        style={{
          fontFamily: '"Fira Code", "Fira Mono", monospace',
          fontSize: 14,
          lineHeight: 1.5,
          minHeight: "100%",
          width: "100%",
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
        }}
      />

      <button
        type="button"
        className="absolute bottom-4 right-4 rounded-xl bg-white px-5 py-3 font-semibold text-black shadow-lg hover:bg-gray-200"
      >
        Review
      </button>
    </div>
  );
};

export default LeftPanel;