"use client";

import { useState } from 'react';

// The main App component for the BMI Calculator
const App = () => {
  // State variables for form inputs and calculation results
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('0.00');
  const [error, setError] = useState('');

  // Function to handle the calculation logic
  const handleCalculate = () => {
    // Convert string inputs to numbers
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);

    // Basic input validation
    if (isNaN(weightVal) || isNaN(heightVal) || weightVal <= 0 || heightVal <= 0) {
      setError('โปรดกรอกข้อมูลน้ำหนักและส่วนสูงให้ถูกต้อง');
      setBmiResult('0.00');
      return;
    }

    setError(''); // Clear any previous errors

    // Convert height from centimeters to meters for the BMI formula
    const heightInMeters = heightVal / 100;

    // Calculate BMI using the formula: weight (kg) / (height (m))^2
    const bmi = weightVal / (heightInMeters * heightInMeters);

    // Update the result state, formatted to two decimal places
    setBmiResult(bmi.toFixed(2));
  };

  // Function to reset the form
  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmiResult('0.00');
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      {/* Main BMI Card */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full space-y-6">

        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">เครื่องคำนวณ BMI</h1>
          <p className="mt-2 text-lg text-gray-500">คำนวณ BMI ของคุณ</p>
        </div>

        {/* Placeholder Image for BMI Chart */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/200x200/4F46E5/ffffff?text=BMI+Chart"
            alt="แผนภูมิ BMI"
            className="rounded-xl shadow-md w-40 h-40"
          />
        </div>

        {/* Weight Input Field */}
        <div>
          <label htmlFor="weight" className="block text-gray-700 font-medium mb-1">
            ป้อนน้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="เช่น 65"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            aria-label="ป้อนน้ำหนัก"
          />
        </div>

        {/* Height Input Field */}
        <div>
          <label htmlFor="height" className="block text-gray-700 font-medium mb-1">
            ป้อนส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="เช่น 175"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            aria-label="ป้อนส่วนสูง"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleCalculate}
            className="w-full py-3 px-4 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            คำนวณ BMI
          </button>
          <button
            onClick={handleReset}
            className="w-full py-3 px-4 rounded-full font-semibold text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-colors duration-300"
          >
            รีเซ็ท
          </button>
        </div>

        {/* Result and Error Display */}
        <div className="text-center text-xl font-bold text-gray-700 pt-2">
          <p>
            ค่า BMI ที่คำนวณได้ : <span id="bmiResult">{bmiResult}</span>
          </p>
        </div>

        {error && (
          <div className="mt-4 text-center text-red-500 font-medium">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
