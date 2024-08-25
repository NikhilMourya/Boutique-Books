import React, { useState } from 'react';

export default function PricingSlider() {
  const [rated, setRated] = useState(16);
  const [toggle, setToggle] = useState(false);

  const price = (amt) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amt);
  };
  return (
    <div className="p-3 pb-0 sm:p-12 sm:pb-0">
      <div className="grid text-grayish-blue sm:grid-cols-2">
        <span>
          <p className="mt-5 text-xs tracking-widest sm:mt-2 sm:text-base">
            {rated * 6.25}K PAGEVIEWS
          </p>
        </span>
        <span className="order-last sm:order-none">
          <p className="text-4xl font-[800] text-dark-desaturated-blue">
            {toggle ? price(rated * 0.75) : price(rated)}
            <span className="text-base font-[600] text-grayish-blue">
              / month
            </span>
          </p>
        </span>
        <span className="sm:col-span-2">
          <div className="mt-8 mb-8 sm:mb-0">
            {/* Range */}
            <input
              value={rated}
              min="0"
              max="2000000"
              type="range"
              className="tw-range"
              onChange={(e) => setRated(e.target.value)}
            />
          </div>
        </span>
      </div>
    </div>
  );
}
