import React, { useState, useEffect } from 'react';
import { Smartphone, Headphones, Laptop, Camera, Activity, ShieldAlert, Dumbbell, Droplet, Flame } from 'lucide-react';

const bodyPolygons = [
  "51.8367347 41.6326531 51.0204082 55.1020408 57.9591837 57.9591837 67.755102 55.5102041 70.6122449 47.3469388 62.0408163 41.6326531",
  "29.7959184 46.5306122 31.4285714 55.5102041 40.8163265 57.9591837 48.1632653 55.1020408 47.755102 42.0408163 37.5510204 42.0408163",
  "68.5714286 63.2653061 67.3469388 57.1428571 58.7755102 59.5918367 60 64.0816327 60.4081633 83.2653061 65.7142857 78.7755102 66.5306122 69.7959184",
  "33.877551 78.3673469 33.0612245 71.8367347 31.0204082 63.2653061 32.244898 57.1428571 40.8163265 59.1836735 39.1836735 63.2653061 39.1836735 83.6734694",
  "56.3265306 59.1836735 57.9591837 64.0816327 58.3673469 77.9591837 58.3673469 92.6530612 56.3265306 98.3673469 55.1020408 104.081633 51.4285714 107.755102 51.0204082 84.4897959 50.6122449 67.3469388 51.0204082 57.1428571",
  "43.6734694 58.7755102 48.5714286 57.1428571 48.9795918 67.3469388 48.5714286 84.4897959 48.1632653 107.346939 44.4897959 103.673469 40.8163265 91.4285714 40.8163265 78.3673469 41.2244898 64.4897959",
  "16.7346939 68.1632653 17.9591837 71.4285714 22.8571429 66.122449 28.9795918 53.877551 27.755102 49.3877551 20.4081633 55.9183673",
  "71.4285714 49.3877551 70.2040816 54.6938776 76.3265306 66.122449 81.6326531 71.8367347 82.8571429 68.9795918 78.7755102 55.5102041",
  "69.3877551 55.5102041 69.3877551 61.6326531 75.9183673 72.6530612 77.5510204 70.2040816 75.5102041 67.3469388",
  "22.4489796 69.3877551 29.7959184 55.5102041 29.7959184 60.8163265 22.8571429 73.0612245",
  "55.5102041 23.6734694 50.6122449 33.4693878 50.6122449 39.1836735 61.6326531 40 70.6122449 44.8979592 69.3877551 36.7346939 63.2653061 35.1020408 58.3673469 30.6122449",
  "28.9795918 44.8979592 30.2040816 37.1428571 36.3265306 35.1020408 41.2244898 30.2040816 44.4897959 24.4897959 48.9795918 33.877551 48.5714286 39.1836735 37.9591837 39.5918367",
  "78.3673469 53.0612245 79.5918367 47.755102 79.1836735 41.2244898 75.9183673 37.9591837 71.0204082 36.3265306 72.244898 42.8571429 71.4285714 47.3469388",
  "28.1632653 47.3469388 21.2244898 53.0612245 20 47.755102 20.4081633 40.8163265 24.4897959 37.1428571 28.5714286 37.1428571 26.9387755 43.2653061",
  "42.4489796 2.85714286 40 11.8367347 42.0408163 19.5918367 46.122449 23.2653061 49.7959184 25.3061224 54.6938776 22.4489796 57.5510204 19.1836735 59.1836735 10.2040816 57.1428571 2.44897959 49.7959184 0",
  "52.6530612 110.204082 54.2857143 124.897959 60 110.204082 62.0408163 100 64.8979592 94.2857143 60 92.6530612 56.7346939 104.489796",
  "47.755102 110.612245 44.8979592 125.306122 42.0408163 115.918367 40.4081633 113.061224 39.5918367 107.346939 37.9591837 102.44898 34.6938776 93.877551 39.5918367 92.244898 41.6326531 99.1836735 43.6734694 105.306122",
  "34.6938776 98.7755102 37.1428571 108.163265 37.1428571 127.755102 34.2857143 137.142857 31.0204082 132.653061 29.3877551 120 28.1632653 111.428571 29.3877551 100.816327 32.244898 94.6938776",
  "63.2653061 105.714286 64.4897959 100 66.9387755 94.6938776 70.2040816 101.22449 71.0204082 111.836735 68.1632653 133.061224 65.3061224 137.55102 62.4489796 128.571429 62.0408163 111.428571",
  "38.7755102 129.387755 38.3673469 112.244898 41.2244898 118.367347 44.4897959 129.387755 42.8571429 135.102041 40 146.122449 36.3265306 146.530612 35.5102041 140",
  "59.5918367 145.714286 55.5102041 128.979592 60.8163265 113.877551 61.2244898 130.204082 64.0816327 139.591837 62.8571429 146.530612",
  "32.6530612 138.367347 26.5306122 145.714286 25.7142857 136.734694 25.7142857 127.346939 26.9387755 114.285714 29.3877551 133.469388",
  "71.8367347 113.061224 73.877551 124.081633 73.877551 140.408163 72.6530612 145.714286 66.5306122 138.367347 70.2040816 133.469388",
  "33.877551 140 34.6938776 143.265306 35.5102041 147.346939 36.3265306 151.020408 35.1020408 156.734694 29.7959184 156.734694 27.3469388 152.653061 27.3469388 147.346939 30.2040816 144.081633",
  "65.7142857 140 72.244898 147.755102 72.244898 152.244898 69.7959184 157.142857 64.8979592 156.734694 62.8571429 151.020408",
  "71.4285714 160.408163 73.4693878 153.469388 76.7346939 161.22449 79.5918367 167.755102 78.3673469 187.755102 79.5918367 195.510204 74.6938776 195.510204",
  "24.8979592 194.693878 27.755102 164.897959 28.1632653 160.408163 26.122449 154.285714 24.8979592 157.55102 22.4489796 161.632653 20.8163265 167.755102 22.0408163 188.163265 20.8163265 195.510204",
  "72.6530612 195.102041 69.7959184 159.183673 65.3061224 158.367347 64.0816327 162.44898 64.0816327 165.306122 65.7142857 177.142857",
  "35.5102041 158.367347 35.9183673 162.44898 35.9183673 166.938776 35.1020408 172.244898 35.1020408 176.734694 32.244898 182.040816 30.6122449 187.346939 26.9387755 194.693878 27.3469388 187.755102 28.1632653 180.408163 28.5714286 175.510204 28.9795918 169.795918 29.7959184 164.081633 30.2040816 158.77551",
  "6.12244898 88.5714286 10.2040816 75.1020408 14.6938776 70.2040816 16.3265306 74.2857143 19.1836735 73.4693878 4.48979592 97.5510204 0 100",
  "84.4897959 69.7959184 83.2653061 73.4693878 80 73.0612245 95.1020408 98.3673469 100 100.408163 93.4693878 89.3877551 89.7959184 76.3265306",
  "77.5510204 72.244898 77.5510204 77.5510204 80.4081633 84.0816327 85.3061224 89.7959184 92.244898 101.22449 94.6938776 99.5918367",
  "6.93877551 101.22449 13.4693878 90.6122449 18.7755102 84.0816327 21.6326531 77.1428571 21.2244898 71.8367347 4.89795918 98.7755102"
];

function getPolygonGroup(pointsStr) {
  const coords = pointsStr.trim().replace(/,/g, ' ').split(/\s+/).map(Number);
  let sumX = 0, sumY = 0, count = 0;
  for(let i=0; i<coords.length; i+=2) {
     sumX += coords[i];
     sumY += coords[i+1];
     count++;
  }
  const cx = sumX / count;
  const cy = sumY / count;

  if (cy < 30) return 'head';
  if (cy >= 100) return 'leg';
  if (cy >= 30 && cy < 65) {
     if (cx > 30 && cx < 70) return 'chest';
     return 'shoulder';
  }
  if (cy >= 65 && cy < 100) {
     if (cx > 30 && cx < 70) return 'core';
     return 'arm';
  }
  return 'other';
}

export default function CyberDashboard() {
  const getDayWorkout = () => {
    const day = new Date().getDay(); // 0 is Sunday, 1 is Mon...
    if ([1, 4].includes(day)) return 'PUSH';
    if ([2, 5].includes(day)) return 'PULL';
    if ([3, 6].includes(day)) return 'LEGS';
    return 'REST';
  };

  const [activeTab, setActiveTab] = useState(() => {
    const today = getDayWorkout();
    return today === 'REST' ? 'PUSH' : today;
  });

  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const todayName = days[new Date().getDay()];

  // Workout Data - Easy to update next month
  const workouts = {
    PUSH: {
      id: "PUSH",
      subtitle: "Chest, Shoulders,Forearms & Triceps Variation",
      focus: "Chest size, Shoulder width, Arm thickness",
      color: "#ff5500",
      exercises: [
        { name: "Bench Press", sets: "4", reps: "8" },
        { name: "Incline DB Press", sets: "3", reps: "10" },
        { name: "Shoulder Press", sets: "3", reps: "8" },
        { name: "Lateral Raises", sets: "3", reps: "12-15" },
        { name: "Triceps Pushdown", sets: "3", reps: "10" },
        { name: "Wrist Curls", sets: "4", reps: "12-15" },
        { name: "Reverse Wrist Curls", sets: "4", reps: "12-15" },
        { name: "Hammer Curls", sets: "4", reps: "8-12" },
        { name: "Reverse Barbell Curl", sets: "3-4", reps: "10" }
      ]
    },
    PULL: {
      id: "PULL",
      subtitle: "Back, Biceps Variation, Forearms",
      focus: "Wider back, Bigger biceps, Better posture",
      color: "#0077ff",
      exercises: [
        { name: "Lat Pulldown", sets: "4", reps: "10" },
        { name: "Barbell Row", sets: "3", reps: "10" },
        { name: "Seated Row", sets: "3", reps: "10" },
        { name: "Barbell Curl", sets: "3", reps: "10" },
        { name: "Wrist Curls", sets: "4", reps: "12-15" },
        { name: "Reverse Wrist Curls", sets: "4", reps: "12-15" },
        { name: "Hammer Curls", sets: "4", reps: "8-12" },
        { name: "Reverse Barbell Curl", sets: "3-4", reps: "10" }
      ]
    },
    LEGS: {
      id: "LEGS",
      subtitle: "Lower Body Power",
      focus: "Overall strength, Balanced physique",
      color: "#00ff00",
      exercises: [
        { name: "Squats", sets: "4", reps: "8" },
        { name: "Leg Press", sets: "3", reps: "10" },
        { name: "Lunges", sets: "3", reps: "10" },
        { name: "Leg Curl", sets: "3", reps: "12" },
        { name: "Calf Raises", sets: "4", reps: "15" }
      ]
    }
  };

  const loadout = [
    {
      category: "MOBILE",
      name: "CMF Phone 2 Pro",
      subtext: "Nothing OS / 8+128GB",
      icon: <Smartphone size={24} className="text-gray-400 mb-4 group-hover:text-white transition-colors" />,
      link: "https://in.nothing.tech/products/cmf-phone-2-pro?Colour=White&Capacity=8%2B128GB"
    },
    {
      category: "AUDIO",
      name: "Zebronics Duke Plus",
      subtext: "Wireless Headphones",
      icon: <Headphones size={24} className="text-gray-400 mb-4 group-hover:text-white transition-colors" />,
      link: "https://zebronics.com/products/zeb-duke-plus"
    },
    {
      category: "COMPUTE",
      name: "HP Victus 12th Gen",
      subtext: "Gaming Laptop",
      icon: <Laptop size={24} className="text-gray-400 mb-4 group-hover:text-white transition-colors" />,
      link: "#"
    },
    {
      category: "OPTICS",
      name: "Sony HDR-CX405",
      subtext: "HD Handycam",
      icon: <Camera size={24} className="text-gray-400 mb-4 group-hover:text-white transition-colors" />,
      link: "#"
    }
  ];

  const currentWorkout = workouts[activeTab];

  const getFillColor = (pointsStr) => {
    const group = getPolygonGroup(pointsStr);
    
    // Highlight logic based on Active Tab
    if (activeTab === 'PUSH' && ['chest', 'shoulder', 'arm'].includes(group)) {
      return currentWorkout.color;
    }
    if (activeTab === 'PULL' && ['chest', 'core', 'arm'].includes(group)) {
      // In 2D view, the front chest/core overlaps with the back muscles
      return currentWorkout.color;
    }
    if (activeTab === 'LEGS' && ['leg'].includes(group)) {
      return currentWorkout.color;
    }

    return 'rgba(255, 255, 255, 0.1)';
  };

  return (
    <section className="bg-[#050505] text-gray-300 font-mono py-24 border-t border-[#1a1a1a]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          
          {/* LEFT PANEL: WORKOUT LIVE FEED */}
          <div className="xl:col-span-7 flex flex-col">
            
            {/* Tabs have been removed. Workout is strictly driven by the current day. */}

            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#111] border border-[#333] text-gray-400 text-[10px] font-bold px-2 py-0.5 tracking-wider">TARGET</span>
                  <span className="text-[#00ffcc] text-xs tracking-widest uppercase font-bold">{todayName}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none" style={{ color: currentWorkout.color }}>
                  {currentWorkout.id}
                </h2>
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-2">
                  <span className="w-2 h-3 inline-block" style={{ backgroundColor: currentWorkout.color }}></span>
                  {currentWorkout.subtitle}
                </p>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-[#00ff00] text-xs flex items-center justify-end gap-1"><Activity size={12}/> BIO_SCAN</p>
                <p className="text-gray-600 text-[10px] mt-1">{currentWorkout.exercises.reduce((acc, curr) => acc + parseInt(curr.sets), 0)} TOTAL SETS</p>
              </div>
            </div>

            {/* Biometrics Panel */}
            <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-4 flex gap-6 text-xs font-bold text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
              <div className="flex flex-col"><span className="text-gray-600 text-[9px]">HEIGHT</span><span className="text-white text-sm">176 CM</span></div>
              <div className="flex flex-col"><span className="text-gray-600 text-[9px]">WEIGHT</span><span className="text-white text-sm">84 KG</span></div>
              <div className="flex flex-col"><span className="text-gray-600 text-[9px]">CALS_IN</span><span className="text-white text-sm">2600 KCAL</span></div>
              <div className="flex flex-col"><span className="text-gray-600 text-[9px] flex items-center gap-1"><Dumbbell size={10}/> PROTEIN</span><span className="text-[#00ff00] text-sm">170 G</span></div>
              <div className="flex flex-col"><span className="text-gray-600 text-[9px] flex items-center gap-1"><Droplet size={10}/> WATER</span><span className="text-[#00ffcc] text-sm">3.5 L</span></div>
              <div className="flex flex-col"><span className="text-gray-600 text-[9px] flex items-center gap-1"><Flame size={10}/> BURN</span><span className="text-[#ff5500] text-sm">~550 KCAL</span></div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row gap-8">
              {/* Exercise List */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                {currentWorkout.exercises.map((ex, i) => (
                  <div key={i} className="border border-[#1f1f1f] bg-[#0a0a0a] p-4 relative group hover:border-[#444] transition-colors">
                    <div className="absolute top-2 right-2 opacity-20"><ShieldAlert size={12} /></div>
                    <span className="text-[#444] text-[10px] font-bold block mb-2">0{i+1}</span>
                    <h3 className="text-white text-xs font-bold tracking-wider mb-4 leading-tight pr-4">{ex.name}</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1 h-3" style={{ backgroundColor: currentWorkout.color }}></div>
                        <span className="text-gray-500 text-[10px] font-bold">{ex.sets} SETS</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-500 text-[10px] font-bold">{ex.reps} REPS</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Body SVG / Status */}
              <div className="w-full md:w-64 flex flex-col items-center justify-center border border-[#1f1f1f] bg-[#0a0a0a] p-4 relative min-h-[350px]">
                <div className="absolute top-2 right-2 text-gray-700 text-[10px]">ID: 214360</div>
                
                {/* Advanced Cybernetic Body Vector mapped dynamically */}
                <svg className="rbh w-48 h-auto opacity-80 mt-4 mb-4" viewBox="0 0 100 200" stroke="#111" strokeWidth="0.5">
                  {bodyPolygons.map((points, idx) => (
                    <polygon 
                      key={idx} 
                      points={points} 
                      style={{ cursor: 'pointer', fill: getFillColor(points), transition: 'fill 0.3s ease' }} 
                    />
                  ))}
                </svg>

                <div className="w-full flex justify-between text-[8px] text-gray-500 mt-auto border-t border-[#1f1f1f] pt-2">
                  <span>SYNC_ID: L4FMK6MAB</span>
                  <span>LATENCY: 12ms</span>
                </div>
              </div>
            </div>

            {/* Bottom Mini Metrics (Retained as requested) */}
            <div className="flex gap-4 mt-4">
              <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-3 flex-1 flex flex-col justify-between">
                <span className="text-gray-500 text-[10px]">SYS_LOAD</span>
                <span className="text-white text-xl font-bold">100%</span>
              </div>
              <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-3 flex-1 flex flex-col justify-between">
                <span className="text-gray-500 text-[10px]">INTENSITY</span>
                <span className="text-white text-xl font-bold">HIGH</span>
              </div>
              <div className="border border-[#1f1f1f] bg-[#0a0a0a] p-3 flex-1 flex items-end gap-1">
                <div className="w-2 h-4 bg-[#00ff00]/20"></div>
                <div className="w-2 h-6 bg-[#00ff00]/40"></div>
                <div className="w-2 h-3 bg-[#00ff00]/20"></div>
                <div className="w-2 h-8 bg-[#00ff00]"></div>
                <div className="w-2 h-5 bg-[#00ff00]/60"></div>
                <div className="w-2 h-7 bg-[#00ff00]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: LOADOUT */}
          <div className="xl:col-span-5 flex flex-col border-l-0 xl:border-l border-[#1f1f1f] xl:pl-10 mt-12 xl:mt-0">
            <div className="mb-8 border-b border-[#1f1f1f] pb-4 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-black text-white tracking-widest uppercase">LOADOUT</h2>
                <p className="text-gray-600 text-[10px] tracking-widest mt-1">GRID_SYSTEM_V.9</p>
              </div>
              <div className="flex gap-1 mb-1">
                <div className="w-1.5 h-1.5 bg-[#00ff00]"></div>
                <div className="w-1.5 h-1.5 bg-gray-700"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 flex-1">
              {loadout.map((item, i) => (
                <a 
                  key={i}
                  href={item.link}
                  target={item.link !== "#" ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="border border-[#1f1f1f] bg-[#0a0a0a] p-5 flex flex-col justify-between hover:border-gray-500 transition-colors group cursor-pointer relative overflow-hidden min-h-[160px]"
                >
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#ffffff05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <span className="text-gray-600 text-[9px] font-bold tracking-widest mb-4 block">{item.category}</span>
                  <div className="flex-1 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-white text-xs font-bold tracking-wider mb-1 uppercase">{item.name}</h4>
                    <p className="text-gray-500 text-[9px] uppercase tracking-wider">{item.subtext}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
