import React from 'react';

const Offers: React.FC<OffersProps> = ({ offers }) => {
  const renderFrequency = (frequency: string): string => {
    const frequencyMap: { [key: string]: string } = {
      monthly: 'msc',
      hourly: 'h',
    };
    return frequencyMap[frequency] || '';
  };

  const formatSalary = (salary: Salary): string => {
    if (!salary) return 'Brak podanej stawki';

    const { amountMin, amountMax, currency, frequency } = salary;
    const freqText = renderFrequency(frequency);

    if (amountMin && amountMax) return `${amountMin} - ${amountMax} ${currency} / ${freqText}`;
    if (amountMin) return `Od ${amountMin} ${currency} / ${freqText}`;
    if (amountMax) return `Do ${amountMax} ${currency} / ${freqText}`;
    
    return 'Brak podanej stawki';
  };

  return (
    <div className="fixed left-0 top-0 p-6 h-full w-1/6 bg-gray-900 shadow-lg overflow-y-auto">
      <h2 className="text-xl text-white mb-4 font-bold border-b border-gray-700 pb-2">Oferty pracy</h2>
      {offers.map((offer, index) => (
        <div 
          key={index} 
          className={`mb-6 ${index !== 0 ? 'border-t border-gray-700 pt-4' : ''} p-4 hover:bg-gray-800 cursor-pointer rounded-lg transition duration-300 transform hover:scale-105`}
        >
          <h3 className="text-lg font-bold text-white mb-2">{offer?.title ?? 'No Title Available'}</h3>
          {offer?.employer?.name && (
            <p className="text-gray-300 mb-2">
              {offer.employer.website ? (
                <a 
                  href={offer.employer.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline"
                >
                  {offer.employer.name}
                </a>
              ) : (
                offer.employer.name
              )}
            </p>
          )}
          <p className="text-gray-300 mb-2">
            {formatSalary(offer.salary)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Offers;