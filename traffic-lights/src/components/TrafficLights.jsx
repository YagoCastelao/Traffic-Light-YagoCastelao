import { useState } from 'react';

const TrafficLights = () => {
  const [color, setColor] = useState('red');

  const toggleColor = () => {
    const nextColor =
      color === 'red' ? 'green' : color === 'green' ? 'yellow' : 'red';
    setColor(nextColor);
  };

  const addPurple = () => {
    setColor('purple');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      {/* Semáforo */}
      <div className="flex flex-col items-center p-6 bg-black rounded-lg shadow-lg">
        <div
          className={`w-16 h-16 mb-4 rounded-full ${
            color === 'red' ? 'bg-red-600 ring-4 ring-red-400' : 'bg-red-900'
          }`}
          onClick={() => setColor('red')}
        ></div>
        <div
          className={`w-16 h-16 mb-4 rounded-full ${
            color === 'yellow'
              ? 'bg-yellow-600 ring-4 ring-yellow-400'
              : 'bg-yellow-900'
          }`}
          onClick={() => setColor('yellow')}
        ></div>
        <div
          className={`w-16 h-16 rounded-full ${
            color === 'green' ? 'bg-green-600 ring-4 ring-green-400' : 'bg-green-900'
          }`}
          onClick={() => setColor('green')}
        ></div>
        {color === 'purple' && (
          <div
            className="w-16 h-16 mt-4 bg-purple-600 rounded-full ring-4 ring-purple-400"
            onClick={() => setColor('purple')}
          ></div>
        )}
      </div>

      {/* Botões */}
      <div className="mt-8 space-x-4">
        <button
          className="px-4 py-2 font-semibold text-white bg-blue-600 rounded shadow hover:bg-blue-700"
          onClick={toggleColor}
        >
          Alternar Cor
        </button>
        <button
          className="px-4 py-2 font-semibold text-white bg-purple-600 rounded shadow hover:bg-purple-700"
          onClick={addPurple}
        >
          Adicionar Púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLights;