'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CareerAbilityIcon,
  CareerActivityIcon,
  CareerIndustryIcon,
  CareerKnowledgeIcon,
  CareerOutlookIcon,
  CareerPathwayIcon,
  CareerPreferenceIcon,
  CareerSectorIcon,
  CareerSkillsIcon,
  CareerSTEMIcon,
  CareerTechnologyIcon,
  CareerTraitsIcon,
  CareerZoneIcon,
  OccupationsIcon,
} from './CareerIcons';

interface CareerCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface Career {
  id: string;
  title: string;
  category: string;
  salary: string;
  growth: string;
  description: string;
  skills: string[];
  education: string;
}

const careerCategories: CareerCategory[] = [
  {
    id: 'ability',
    name: 'Career Ability',
    icon: <CareerAbilityIcon size={48} />,
    color: 'from-blue-400 to-blue-600',
    description: 'Skills & capabilities required',
  },
  {
    id: 'activity',
    name: 'Career Activity',
    icon: <CareerActivityIcon size={48} />,
    color: 'from-red-400 to-red-600',
    description: 'Day-to-day activities',
  },
  {
    id: 'industry',
    name: 'Career Industry',
    icon: <CareerIndustryIcon size={48} />,
    color: 'from-purple-400 to-purple-600',
    description: 'Industry sectors',
  },
  {
    id: 'knowledge',
    name: 'Career Knowledge',
    icon: <CareerKnowledgeIcon size={48} />,
    color: 'from-orange-400 to-orange-600',
    description: 'Required knowledge areas',
  },
  {
    id: 'outlook',
    name: 'Career Outlook',
    icon: <CareerOutlookIcon size={48} />,
    color: 'from-cyan-400 to-cyan-600',
    description: 'Future prospects',
  },
  {
    id: 'pathway',
    name: 'Career Pathway',
    icon: <CareerPathwayIcon size={48} />,
    color: 'from-green-400 to-green-600',
    description: 'Career progression paths',
  },
  {
    id: 'preference',
    name: 'Career Preference',
    icon: <CareerPreferenceIcon size={48} />,
    color: 'from-indigo-400 to-indigo-600',
    description: 'Career preferences',
  },
  {
    id: 'sector',
    name: 'Career Sector',
    icon: <CareerSectorIcon size={48} />,
    color: 'from-teal-400 to-teal-600',
    description: 'Economic sectors',
  },
  {
    id: 'skills',
    name: 'Career Skills',
    icon: <CareerSkillsIcon size={48} />,
    color: 'from-yellow-400 to-yellow-600',
    description: 'Core competencies',
  },
  {
    id: 'stem',
    name: 'Career STEM',
    icon: <CareerSTEMIcon size={48} />,
    color: 'from-indigo-400 to-indigo-600',
    description: 'Science, Tech, Engineering, Math',
  },
  {
    id: 'technology',
    name: 'Career Technology',
    icon: <CareerTechnologyIcon size={48} />,
    color: 'from-slate-400 to-slate-600',
    description: 'Tech-focused careers',
  },
  {
    id: 'traits',
    name: 'Career Traits',
    icon: <CareerTraitsIcon size={48} />,
    color: 'from-amber-400 to-amber-600',
    description: 'Required personality traits',
  },
  {
    id: 'zone',
    name: 'Career Zone',
    icon: <CareerZoneIcon size={48} />,
    color: 'from-red-400 to-red-600',
    description: 'Geographic job zones',
  },
];

const careerExamples: Career[] = [
  {
    id: 'actuary',
    title: 'Actuary',
    category: 'stem',
    salary: '$100,000 - $150,000+',
    growth: '24% (Much Faster than Average)',
    description: 'Actuaries analyze the financial risks of future events.',
    skills: ['Mathematics', 'Risk Analysis', 'Problem Solving', 'Statistical Analysis'],
    education: "Bachelor's Degree in Mathematics/Actuarial Science",
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'technology',
    salary: '$105,000 - $130,000+',
    growth: '22% (Much Faster than Average)',
    description: 'Develop, test, and maintain software applications.',
    skills: ['Programming', 'System Design', 'Problem Solving', 'Collaboration'],
    education: "Bachelor's Degree in Computer Science",
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'technology',
    salary: '$90,000 - $140,000+',
    growth: '36% (Much Faster than Average)',
    description: 'Analyze complex data to help organizations make decisions.',
    skills: ['Data Analysis', 'Machine Learning', 'Python/R', 'Statistical Knowledge'],
    education: "Bachelor's or Master's in Data Science/Statistics",
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    category: 'industry',
    salary: '$70,000 - $110,000+',
    growth: '15% (Average)',
    description: 'Design user-friendly interfaces for digital products.',
    skills: ['Design Thinking', 'User Research', 'Prototyping', 'Communication'],
    education: "Bachelor's Degree in Design or related field",
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    category: 'activity',
    salary: '$75,000 - $120,000+',
    growth: '8% (Average)',
    description: 'Oversee project planning, execution, and completion.',
    skills: ['Leadership', 'Organization', 'Risk Management', 'Communication'],
    education: "Bachelor's Degree + Project Management Certification",
  },
];

export const CareerExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = careerExamples.filter(
    (career) =>
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryCareers = selectedCategory
    ? filteredCareers.filter((c) => c.category === selectedCategory)
    : filteredCareers;

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-light text-gray-900 mb-2">Career Explorer</h1>
          <p className="text-gray-500 text-sm mb-6">Explore 13 career categories to find your path</p>
          
          <div className="relative">
            <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Career Categories - Minimalist Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerCategories.map((category) => (
              <Link
                key={category.id}
                href={`/career/category/${category.id}`}
                className={`group relative p-4 rounded-2xl border-2 border-transparent shadow-xl transition-all cursor-pointer bg-gradient-to-br ${category.color} hover:scale-105 hover:rotate-[-2deg] hover:shadow-2xl hover:border-[3px] hover:border-indigo-300 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/40 before:to-white/10 before:backdrop-blur-md before:z-0`}
                style={{ overflow: 'hidden' }}
              >
                <div className="relative z-10 flex flex-col gap-4 items-center justify-center text-white">
                  <div className="text-5xl mb-2 drop-shadow-xl scale-110 group-hover:scale-125 transition-transform duration-300">{category.icon}</div>
                  <h3 className="font-extrabold text-lg mb-1 tracking-tight drop-shadow-md text-center group-hover:text-yellow-100 transition-colors duration-300">{category.name}</h3>
                  <p className="text-xs text-white/90 text-center font-medium drop-shadow-sm group-hover:text-white transition-colors duration-300">{category.description}</p>
                </div>
                <span className="absolute -inset-1 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-[3px] group-hover:border-yellow-300 animate-pulse" />
              </Link>
            ))}
          </div>
        </div>

        {/* Careers List - Minimalist Section */}
        {selectedCategory && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-light text-gray-900">
                  {careerCategories.find((c) => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-xs text-gray-500 mt-2">{categoryCareers.length} career{categoryCareers.length !== 1 ? 's' : ''}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedCareer(null);
                }}
                className="text-xs px-3 py-1.5 text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded transition"
              >
                Clear
              </button>
            </div>

            <div className="space-y-3">
              {categoryCareers.length > 0 ? (
                categoryCareers.map((career) => (
                  <button
                    key={career.id}
                    onClick={() => setSelectedCareer(career)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedCareer?.id === career.id
                        ? 'bg-gray-50 border-gray-300'
                        : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm">{career.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{career.description}</p>
                        <div className="flex gap-4 mt-2 text-xs">
                          <span className="text-gray-600">{career.salary}</span>
                          <span className="text-gray-600">{career.growth}</span>
                        </div>
                      </div>
                      <span className="ml-2 text-gray-400">{selectedCareer?.id === career.id ? '▼' : '▶'}</span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-sm text-gray-500">No careers found</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Career Details - Clean Panel */}
        {selectedCareer && (
          <div className="bg-white border border-gray-200 rounded-lg p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-light text-gray-900">{selectedCareer.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{selectedCareer.description}</p>
              </div>
              <button
                onClick={() => setSelectedCareer(null)}
                className="text-gray-400 hover:text-gray-600 text-lg"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Salary</p>
                <p className="font-medium text-gray-900 text-sm">{selectedCareer.salary}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Growth</p>
                <p className="font-medium text-gray-900 text-sm">{selectedCareer.growth}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Education</p>
                <p className="font-medium text-gray-900 text-sm">{selectedCareer.education}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Key Skills</p>
              <div className="flex flex-wrap gap-2">
                {selectedCareer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button className="w-full py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded transition">
                Learn More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
