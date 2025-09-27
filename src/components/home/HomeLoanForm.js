"use client"
import React, { useState } from 'react';

const HomeLoanForm = () => {
  const [formData, setFormData] = useState({
    totalAmount: '10000',
    downPayment: '2000',
    downPaymentPercent: '20',
    interestRate: '0',
    amortizationPeriod: 'Select Amortization Period',
    propertyTax: '$3000',
    homeInsurance: '$1000'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="min-h-screen  p-8 flex items-center">
      <div className="max-w-7xl mx-auto flex gap-12 items-center w-full">
        
        {/* Left Form Section */}
        <div className="w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">
            Do you need a home loan?
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get pre-approved
          </h2>
          <p className="text-gray-600 mb-8 text-sm leading-snug">
            Find a lender who can offer competitive mortgage rates and help you with pre-approval.
          </p>

          <div className="space-y-6">
            {/* Total Amount and Down Payment Row */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Total Amount
                </label>
                <input
                  type="text"
                  value={formData.totalAmount}
                  onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Down Payment
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.downPayment}
                    onChange={(e) => handleInputChange('downPayment', e.target.value)}
                    className="flex-1 px-3 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={formData.downPaymentPercent}
                    onChange={(e) => handleInputChange('downPaymentPercent', e.target.value)}
                    className="w-14 px-2 py-3 border border-gray-300 rounded-lg text-center focus:border-orange-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Interest Rate and Amortization Row */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Interest Rate
                </label>
                <input
                  type="text"
                  value={formData.interestRate}
                  onChange={(e) => handleInputChange('interestRate', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-orange-400 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Amortization Period (months)
                </label>
                <select
                  value={formData.amortizationPeriod}
                  onChange={(e) => handleInputChange('amortizationPeriod', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-500 focus:border-orange-400 focus:outline-none appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.25em 1.25em'
                  }}
                >
                  <option>Select Amortization Period</option>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36">36 months</option>
                  <option value="60">60 months</option>
                  <option value="360">360 months</option>
                </select>
              </div>
            </div>

            {/* Property Tax and Home Insurance Row */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Property Tax
                </label>
                <input
                  type="text"
                  value={formData.propertyTax}
                  onChange={(e) => handleInputChange('propertyTax', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-500 focus:border-orange-400 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-medium mb-2">
                  Home Insurance
                </label>
                <input
                  type="text"
                  value={formData.homeInsurance}
                  onChange={(e) => handleInputChange('homeInsurance', e.target.value)}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-500 focus:border-orange-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Monthly Payment */}
            <div className="pt-4">
              <p className="text-gray-600 mb-6 text-sm leading-snug">
                Your estimated monthly payment:
              </p>
              
              <div className="flex gap-4">
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-lg transition-colors">
                  Calculate now
                </button>
                <button className="border border-orange-400 text-orange-500 hover:bg-orange-50 font-medium px-6 py-3 rounded-lg transition-colors">
                  Start Over
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full w-full flex items-center justify-center">
            <img
              src="https://proty.autodealwordpress.com/wp-content/uploads/2024/11/thumb.webp"
              alt="Modern living room interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLoanForm;
