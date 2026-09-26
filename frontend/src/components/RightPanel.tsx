import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RightPanelProps {
  review: string;
}

const RightPanel = ({ review }: RightPanelProps) => {
  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="prose prose-invert max-w-none text-white">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{review}</ReactMarkdown>
      </div>
    </div>
  );
};

export default RightPanel;
