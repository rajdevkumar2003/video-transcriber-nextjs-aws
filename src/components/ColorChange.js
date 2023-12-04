import { useEffect } from "react";


export default function ColorChange({
  primaryColor,
  setPrimaryColor,
  outlineColor,
  setOutlineColor,
  setFontSize,
  setMargin,
  margin,
  fontSize,
}) {

 
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex gap-4 ">
        <label className="text-md font-semibold capitalize">
          primary color:
          <input
            className=""
            type="color"
            value={primaryColor}
            onChange={(ev) => setPrimaryColor(ev.target.value)}
          />
        </label>

        <label className="text-md font-semibold capitalize">
          outline color:
          <input
            type="color"
            value={outlineColor}
            onChange={(ev) => setOutlineColor(ev.target.value)}
          />
        </label>
      </div>

      <div className="flex gap-4">
        <label className="text-md font-semibold capitalize">
        Text align:
          <select name="margin" onChange={(ev)=>setMargin(ev.target.value)}>
            
            <option value="90">center</option>
            <option value="30">bottom</option>
          </select>
        </label>

        <label className="text-md font-semibold capitalize">
        Font size:
          <select name="font" onChange={(ev)=>setFontSize(ev.target.value)}>
            <option value="15">Small</option>
            <option value="30">Medium</option>
            <option value="45">Large</option>
          </select>
        </label>
      </div>
    </div>
  );
}
