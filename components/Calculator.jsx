"use Client"
import React, { useState } from 'react'; // Make sure to import useState

// Assuming 'a' is defined elsewhere, e.g., const a = '32'; or a utility class
const a = '32'; // Example, replace with your actual 'a' value or class

function HalfYearlyNumberCalculator() {
  const [CT, setCT] = useState(0);
  const [MT, setMT] = useState(0); // This will be calculated from raw MT input
  const [rawMTInput, setRawMTInput] = useState(0); // New state to hold the raw MT input value
  const [CQ, setCQ] = useState(0);
  const [MCQ, setMCQ] = useState(0);
  const [Prac, setPrac] = useState(0);

  const handleMTChange = (e) => {
    const rawValue = parseFloat(e.target.value);
    setRawMTInput(rawValue); // Store the raw input value
    setMT(Math.ceil(rawValue * 0.66)); // Calculate and set the processed MT value
  };

  const handleReset = () => {
    setCT(0);
    setRawMTInput(0); // Reset the raw MT input
    setMT(0); // Also reset the calculated MT
    setCQ(0);
    setMCQ(0);
    setPrac(0);
  };

  return (
    <div className="w-[100vw] bg-background flex flex-col items-center">
      <h1 className="text-2xl my-5">Half Yearly Number Calculator</h1>

      <div className="main flex flex-wrap gap-2 w-90% mx-auto">
        <div className="flex flex-col items-center justify-center">
          <label className="" htmlFor="CT">CT</label>
          <input
            onChange={e => { setCT(Math.ceil(parseFloat(e.target.value) || 0)); }}
            type="number"
            className={`w-${a} text-center`}
            id="ct"
            value={CT === 0 ? '' : CT} // Display empty string for 0 to make it clean
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <label className="" htmlFor="MT">MT</label>
          <input
            onChange={handleMTChange}
            type="number"
            className={`w-${a} text-center`}
            id="MT"
            value={rawMTInput === 0 ? '' : rawMTInput} // Use rawMTInput for the input field
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <label className="" htmlFor="CQ">CQ</label>
          <input
            onChange={e => { setCQ(parseFloat(e.target.value) || 0); }}
            type="number"
            className={`w-${a} text-center`}
            id="CQ"
            value={CQ === 0 ? '' : CQ}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <label className="" htmlFor="MCQ">MCQ</label>
          <input
            onChange={e => { setMCQ(parseFloat(e.target.value) || 0); }}
            type="number"
            className={`w-${a} text-center`}
            id="MCQ"
            value={MCQ === 0 ? '' : MCQ}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <label className="" htmlFor="Prac.">Prac.</label>
          <input
            onChange={e => { setPrac(parseFloat(e.target.value) || 0); }}
            type="number"
            className={`w-${a} text-center`}
            id="Prac."
            value={Prac === 0 ? '' : Prac}
          />
        </div>
      </div>

      <div className="my-3 mt-10 text-3xl">
        Calculated Fields
      </div>

      <div className="flex gap-5 w-full justify-center">
        <div className={` rounded-md gap-2 text-lg p flex flex-col justify-center items-center `}>
          <label>MT 2/3</label>
          <div className="border px-5 rounded-lg py-1 ">{MT}</div>
        </div>

        <div className={`rounded-md gap-2 text-lg p flex flex-col justify-center items-center `}>
          <label>TOTAL</label>
          <div className="border px-5 rounded-lg py-1">{CQ + MCQ + Prac}</div>
        </div>

        <div className={`rounded-md gap-2 text-lg p flex flex-col justify-center items-center `}>
          <label>TOTAL-70%</label>
          <div className="border px-5 rounded-lg py-1">{Math.ceil((CQ + MCQ + Prac) * 0.7)}</div>
        </div>

        <div className={` rounded-md gap-2 text-lg p flex flex-col justify-center items-center `}>
          <label>G.TOTAL</label>
          <div className="border px-5 rounded-lg py-1">{Math.ceil(CT + MT + (CQ + MCQ + Prac) * 0.7)}</div>
        </div>
      </div>

      <Button onClick={handleReset} className="mt-10">Reset Calculator</Button>
    </div>
  );
}

export default HalfYearlyNumberCalculator; // Don't forget to export your component