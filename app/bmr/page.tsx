"use client";

import { useState } from 'react';

// Main App component for the BMR calculator
const App = () => {
  // State variables for form inputs and calculation results
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState('0.00');
  const [error, setError] = useState('');

  // Function to handle the calculation logic
  const handleCalculate = () => {
    // Convert string inputs to numbers
    const weightVal = parseFloat(weight);
    const heightVal = parseFloat(height);
    const ageVal = parseFloat(age);

    // Basic input validation
    if (isNaN(weightVal) || isNaN(heightVal) || isNaN(ageVal) || weightVal <= 0 || heightVal <= 0 || ageVal <= 0) {
      setError('โปรดกรอกข้อมูลให้ครบถ้วนและถูกต้อง');
      setResult('0.00');
      return;
    }

    setError(''); // Clear any previous errors

    // Calculate BMR using the new formulas provided
    let bmr;
    if (gender === 'male') {
      // Formula for males: BMR = 66 + (13.7 x weight) + (5 x height) – (6.8 x age)
      bmr = 66 + (13.7 * weightVal) + (5 * heightVal) - (6.8 * ageVal);
    } else {
      // Formula for females: BMR = 665 + (9.6 x weight) + (1.8 x height) – (4.7 x age)
      bmr = 665 + (9.6 * weightVal) + (1.8 * heightVal) - (4.7 * ageVal);
    }

    // Update the result state, formatted to two decimal places
    setResult(bmr.toFixed(2));
  };

  // Function to reset the form
  const handleReset = () => {
    setWeight('');
    setHeight('');
    setAge('');
    setGender('male');
    setResult('0.00');
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      {/* Main BMR Calculator Card */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full space-y-6">

        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">คำนวณ BMR</h1>
          <p className="mt-2 text-lg text-gray-500">คำนวณอัตราการเผาผลาญพื้นฐานของคุณ</p>
        </div>

        {/* Placeholder Image for BMR */}
        <div className="flex justify-center">
          <img
            src="https://placehold.co/100x100/A0B9DE/000000?text=BMR"
            alt="BMR"
            className="mx-auto rounded-full"
          />
        </div>

        {/* Input Fields and Labels */}
        <div>
          <label htmlFor="weight" className="block text-gray-700 font-medium mb-1">
            น้ำหนัก (กิโลกรัม)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="กรอกน้ำหนัก"
            aria-label="น้ำหนัก"
          />
        </div>

        <div>
          <label htmlFor="height" className="block text-gray-700 font-medium mb-1">
            ส่วนสูง (เซนติเมตร)
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="กรอกส่วนสูง"
            aria-label="ส่วนสูง"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
            อายุ (ปี)
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="กรอกอายุ"
            aria-label="อายุ"
          />
        </div>

        {/* Gender Radios */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            เพศ
          </label>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center">
              <input
                id="gender-male"
                name="gender"
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={(e) => setGender(e.target.value)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label htmlFor="gender-male" className="ml-2 block text-sm text-gray-700">
                ชาย
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="gender-female"
                name="gender"
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={(e) => setGender(e.target.value)}
                className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
              />
              <label htmlFor="gender-female" className="ml-2 block text-sm text-gray-700">
                หญิง
              </label>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleCalculate}
            className="w-full py-3 px-4 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            คำนวณ BMR
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
            ค่า BMR ที่คำนวณได้: <span id="result-display">{result}</span>
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
};

export default App;
