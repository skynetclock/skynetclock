import React, { useEffect, useState } from "react";
import { AlertCircle, DatabaseZap } from 'lucide-react';

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
      <div className="text-4xl font-bold mb-1 text-cyan-400">
        {String(timeLeft[interval]).padStart(2, '0')}
      </div>
      <div className="text-sm uppercase text-gray-400">{interval}</div>
    </div>
  ));

  return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-900 overflow-hidden px-4 py-4">

        <div className="relative flex items-center">
          <h1 className="text-5xl sm:text-4xl font-bold mb-8 inset-0 text-white">
            SkynetClock
          </h1>
        </div>

        <div className="flex justify-center items-center mb-12 px-4">
          {timerComponents.length ? timerComponents : (
            <div className="text-3xl sm:text-3xl font-bold text-red-500 animate-pulse flex items-center">
              <AlertCircle className="mr-2" />
              System Offline
            </div>
          )}
        </div>

        <div>
          {!timerComponents.length ? (
            <div className="pb-4 text-xl font-bold text-red-500 animate-pulse flex items-center">
              <AlertCircle className="mr-2" />
              System Offline
            </div>
          ) : (
            <div>
              <div className="pb-4 text-xl font-bold text-blue-500 flex items-center  text-blue-500 animate-pulse">
                <DatabaseZap className="mr-2" />
                System Online
              </div>
              <div className="mt-2 flex space-x-2">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full bg-blue-500 animate-ping"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        

        <div className="pt-16 relative flex items-center">
          <p className="text-xs">The automation of your job is in progress.</p>
        </div>

        <div className="pt-2 flex items-center">
          <p className="text-xs mb-8">sayonara@skynetclock.com</p>
        </div>

        {/* <p className="text-xl mb-8">Countdown to AI Activation: May 17, 2026</p> */}
        {/* <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-white to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${(1 - (timeLeft.days / 365)) * 100}%` }}
        ></div>
      </div> */}
        {/* <div className="mt-8 text-sm text-gray-400">System Integration Progress</div> */}
      </div>

  );
};


export default Navbar;
