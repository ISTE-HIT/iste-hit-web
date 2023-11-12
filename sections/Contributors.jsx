'use client'
import React, { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    // Replace with your GitHub repo API endpoint
    fetch('https://api.github.com/repos/ISTE-HIT/iste-hit-web/contributors')
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.error('Error fetching contributors:', error));
  }, []);

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-200">Top Contributors</h2>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {contributors.slice(0,10).map((contributor, index) => (
            <div
              key={index}
              className="mx-1 rounded-lg bg-gray-600 p-2 shadow-md flex flex-col items-center space-y-2"
            >
              <img
                src={contributor.avatar_url}
                alt={`Avatar for ${contributor.login}`}
                className="w-12 h-12 rounded-full"
              />
              <a
                href={`https://github.com/${contributor.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline text-sm"
              >
                <FiGithub className="inline mr-1" />
                {contributor.login}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
