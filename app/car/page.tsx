"use client";
import { useState } from 'react';
import Image from "next/image";
import car from "../images/CarInstallment.png";

// Main App component for the car installment calculator
const App = () => {
  // State variables for form inputs and calculation results
  const [name, setName] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [downPayment, setDownPayment] = useState('15'); // Default to 15%
  const [loanTerm, setLoanTerm] = useState('12'); // Default to 12 months
  const [result, setResult] = useState('0.00');
  const [error, setError] = useState('');

  // Function to handle the calculation logic
  const handleCalculate = () => {
    // Convert string inputs to numbers
    const price = parseFloat(carPrice);
    const rate = parseFloat(interestRate);
    const down = parseFloat(downPayment);
    const term = parseInt(loanTerm, 10);

    // Basic input validation
    if (isNaN(price) || isNaN(rate) || price <= 0 || rate < 0 || term <= 0) {
      setError('โปรดกรอกข้อมูลให้ครบถ้วนและถูกต้อง');
      setResult('0.00');
      return;
    }

    setError(''); // Clear any previous errors

    // Calculate the principal loan amount after down payment
    const downPaymentAmount = price * (down / 100);
    const principal = price - downPaymentAmount;

    // Calculate the monthly interest rate
    const monthlyInterestRate = (rate / 100) / 12;

    let monthlyPayment;

    // Use a simplified formula for zero interest rate
    if (monthlyInterestRate === 0) {
      monthlyPayment = principal / term;
    } else {
      // Use the standard fixed-rate loan formula
      const termPower = Math.pow(1 + monthlyInterestRate, term);
      monthlyPayment = principal * (monthlyInterestRate * termPower) / (termPower - 1);
    }

    // Update the result state, formatted to two decimal places
    setResult(monthlyPayment.toFixed(2));
  };

  // Function to reset the form
  const handleReset = () => {
    setName('');
    setCarPrice('');
    setInterestRate('');
    setDownPayment('15');
    setLoanTerm('12');
    setResult('0.00');
    setError('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Main Car Installment Card */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full space-y-6">

        {/* Title and Subtitle */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">คำนวณค่างวดรถยนต์</h1>
          <p className="mt-2 text-lg text-gray-500">คำนวณค่าผ่อนรถยนต์ของคุณ</p>
        </div>

        {/* Placeholder Image for Car */}
        <div className="flex justify-center">
          <Image
                src={car}
                alt="Car" width={100} height={100} className="mx-auto rounded-full" />
        </div>

        {/* Input Fields and Labels */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            ชื่อ
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="กรอกชื่อของคุณ"
            aria-label="ชื่อ"
          />
        </div>

        <div>
          <label htmlFor="car-price" className="block text-gray-700 font-medium mb-1">
            ราคารถ (บาท)
          </label>
          <input
            type="number"
            id="car-price"
            name="car-price"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="กรอกราคารถ"
            aria-label="ราคารถ"
          />
        </div>

        <div>
          <label htmlFor="interest-rate" className="block text-gray-700 font-medium mb-1">
            ดอกเบี้ยต่อปี (%)
          </label>
          <input
            type="number"
            id="interest-rate"
            name="interest-rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="กรอกอัตราดอกเบี้ย"
            aria-label="ดอกเบี้ยต่อปี"
          />
        </div>

        {/* Down Payment Radios */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            เงินดาวน์ (%)
          </label>
          <div className="flex flex-wrap gap-3">
            {[15, 20, 25, 30, 35].map(percent => (
              <div key={percent} className="flex items-center">
                <input
                  id={`down-payment-${percent}`}
                  name="down-payment"
                  type="radio"
                  value={String(percent)}
                  checked={downPayment === String(percent)}
                  onChange={(e) => setDownPayment(e.target.value)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                />
                <label htmlFor={`down-payment-${percent}`} className="ml-2 block text-sm text-gray-700">
                  {percent}%
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Loan Term Dropdown */}
        <div>
          <label htmlFor="loan-term" className="block text-gray-700 font-medium mb-1">
            จำนวนเดือน
          </label>
          <select
            id="loan-term"
            name="loan-term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            aria-label="จำนวนเดือน"
          >
            {[12, 24, 36, 48, 60, 72, 84].map(term => (
              <option key={term} value={term}>
                {term} เดือน
              </option>
            ))}
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleCalculate}
            className="w-full py-3 px-4 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            คำนวณ
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
            ค่าค่างวดรถยนต์: <span id="result-display">{result}</span>
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
