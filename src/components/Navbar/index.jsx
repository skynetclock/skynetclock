import React, { useEffect, useState } from "react";
import { AlertCircle, Binary } from 'lucide-react';

const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date("2025-05-17") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = ['days', 'hours', 'minutes', 'seconds'].map(interval => (
    <div key={interval} className="flex flex-col items-center mx-4">
      <div className="text-5xl font-bold mb-2 text-cyan-400">
        {String(timeLeft[interval]).padStart(2, '0')}
      </div>
      <div className="text-sm uppercase text-gray-400">{interval}</div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white overflow-hidden px-4 py-8">
            {/* <div className="pb-40">
      {!timerComponents.length ? null : (
          <div className="text-4xl font-bold text-blue-500 animate-pulse flex items-center">
            <Binary className="mr-2" />
            System Online
          </div>
        )}
      </div> */}
      <div className="relative flex items-center">
        <h1 className="text-6xl sm:text-6xl font-bold mb-12 inset-0 bg-blue">
          SkynetClock
        </h1>
      </div>

      {/* <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-white to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${(1 - (timeLeft.days / 365)) * 100}%` }}
        ></div>
      </div> */}
      <div className="flex justify-center items-center mb-12">
        {timerComponents.length ? timerComponents : (
          <div className="text-4xl sm:text-4xl font-bold text-red-500 animate-pulse flex items-center">
            <AlertCircle className="mr-2" />
            System Offline
          </div>
        )}
      </div>
      {/* <p className="text-xl mb-8">Countdown to AI Activation: May 17, 2026</p> */}
      {/* <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-white to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${(1 - (timeLeft.days / 365)) * 100}%` }}
        ></div>
      </div> */}
      {/* <div className="mt-8 text-sm text-gray-400">System Integration Progress</div> */}
      <div className="mt-12 flex space-x-2">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index}
            className="w-3 h-3 rounded-full bg-blue-500 animate-ping"
            style={{ animationDelay: `${index * 0.1}s` }}
          ></div>
        ))}
      </div>
      {/* <div className="pt-20 flex items-center">
        <p className="text-xl mb-8">Job losses, poverty and desperation are coming.</p>
      </div> */}
      <div className="pt-20 relative flex items-center">
        <p className="text-sm">AI, job losses, poverty and desperation are coming.</p>
      </div>
      <div className="flex items-center">
      <p className="text-sm mb-8">sayonara@skynetclock.com</p> 
      </div>
      
    </div>
  );
};


export default Navbar;
