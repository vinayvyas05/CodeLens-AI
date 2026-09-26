import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import { useState } from "react";

function App() {
  const [review, setReview] = useState<string>(''); 
  return (
    <main className="flex h-screen gap-3 bg-[#242424] p-5">
      <div className="basis-1/2 rounded-2xl bg-black overflow-hidden">
        <LeftPanel setReview={setReview}/>
      </div>

      <div className="basis-1/2 rounded-2xl bg-[#343434] overflow-hidden">
        <RightPanel review={review}/>
      </div>
    </main>
  );
}

export default App;