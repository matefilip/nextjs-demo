import React from 'react';

const Offers = ({ offers }) => {
  return (
    <div className="fixed left-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
      <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Offers</h2>
      {offers.map((offer, index) => (
        <div key={offer.id} className={`mb-6 ${index !== 0 ? 'border-t border-gray-700 pt-4' : ''}`}>
          <h3 className="text-lg font-bold text-white mb-2">{offer.title}</h3>
          <p className="text-gray-300 mb-2">{offer.location.countryName}</p>
          <p className="text-gray-400">
            {offer.salary.amountMin && offer.salary.amountMax ? (
              `${offer.salary.amountMin} - ${offer.salary.amountMax} ${offer.salary.currency} / ${offer.salary.frequency}`
            ) : offer.salary.amountMin ? (
              `From ${offer.salary.amountMin} ${offer.salary.currency} / ${offer.salary.frequency}`
            ) : offer.salary.amountMax ? (
              `Up to ${offer.salary.amountMax} ${offer.salary.currency} / ${offer.salary.frequency}`
            ) : (
              'Undisclosed salary'
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Offers;
