import React from "react";

export default function CheckBoxCustomized({ isActive, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { isActive: boolean }) {
  return (
    <>
      <div className={`w-2 h-2 rounded-xs ${isActive ? "bg-amber-500" : ""} outline-3 outline-offset-2 outline-amber-500`}>    
      </div>
      <input type="radio" checked={isActive} className="hidden" {...props} />
    </>
  );
}