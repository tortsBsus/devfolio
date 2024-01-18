import React from 'react';

function AchievementCard({ title, description }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function Achievements() {
  const achievements = [
    {
      title: 'TiH fellowship',
      description: 'Achieved during a fellowship program',
    },
    {
      title: 'KSCST grant',
      description: 'Received a grant from KSCST organization',
    },
    {
      title: 'YESIST 2023 win & presentation at international forum',
      description: 'Won in YESIST 2023 and presented project at an international forum',
    },
    {
      title: 'Delhi presentation',
      description: 'Presented project in Delhi',
    },
    {
      title: 'Patent Holder',
      description: 'Presented project in Delhi',
    },
    // Add more achievements here...
  ];

  return (
    <div className="mt-10 p-4 lg:p-16 max-h-fit w-full">
      <h1 className="text-4xl font-bold mb-8">Achievements</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </div>
  );
}

export default Achievements;
