import React from "react";
import { useState, useEffect } from "react";

interface RightPanelProps {
  review: string; 
}

const RightPanel = ({review}: RightPanelProps) => {
  
  return <div>
    {review}; 
  </div>;
};

export default RightPanel;
