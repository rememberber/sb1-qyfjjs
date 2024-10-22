import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

const restaurants = {
  building1: {
    B: [2, 3, 4, 5, 6],
    D: [3, 4],
    F: [3, 4, 5]
  },
  building2: {
    A: [3, 4, 5],
    B: [3, 4, 5],
    C: [3, 4]
  }
};

function App() {
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const getRandomRestaurant = () => {
    const building = Math.random() < 0.5 ? 'building1' : 'building2';
    const buildingName = building === 'building1' ? '一' : '二';
    const seats = restaurants[building];
    const seatKeys = Object.keys(seats);
    const randomSeat = seatKeys[Math.floor(Math.random() * seatKeys.length)];
    const floors = seats[randomSeat];
    const randomFloor = floors[Math.floor(Math.random() * floors.length)];
    return `${buildingName}号楼 ${randomSeat}座 ${randomFloor}F`;
  };

  const handleRecommend = () => {
    setRecommendation(getRandomRestaurant());
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">去哪吃</h1>
        <div className="flex justify-center mb-6">
          <Utensils className="w-16 h-16 text-blue-500" />
        </div>
        <button
          onClick={handleRecommend}
          className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          随机推荐
        </button>
        {recommendation && (
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-700 mb-3">今天的推荐地点是：</p>
            <div className="bg-yellow-100 rounded-lg p-6 shadow-inner">
              <p className="text-5xl font-bold text-blue-700 break-words leading-tight">{recommendation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;