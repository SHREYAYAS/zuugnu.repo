'use client';

import Link from 'next/link';
import { useState } from 'react';
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
} from '@/components/CareerIcons';

interface CategoryInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  fullDescription: string;
  keyPoints: string[];
  relatedOccupations: string[];
  skills: string[];
  pathways: string[];
}

export const categoryData: { [key: string]: CategoryInfo } = {
  ability: {
    id: 'ability',
    name: 'Career Ability',
    icon: <CareerAbilityIcon size={80} />,
    color: 'from-blue-400 to-blue-600',
    fullDescription: 'Career abilities refer to the skills and capabilities required to excel in a particular career. These are the technical and soft skills that professionals need to develop and master.',
    keyPoints: [
      'Develop technical proficiency in your field',
      'Build problem-solving capabilities',
      'Enhance communication abilities',
      'Master time management',
      'Improve critical thinking skills',
    ],
    relatedOccupations: ['Software Engineer', 'Data Scientist', 'Project Manager', 'Consultant'],
    skills: ['Technical Skills', 'Soft Skills', 'Problem Solving', 'Communication', 'Leadership'],
    pathways: ['Technical Training', 'Certification Programs', 'Hands-on Experience', 'Mentorship'],
  },
  activity: {
    id: 'activity',
    name: 'Career Activity',
    icon: <CareerActivityIcon size={80} />,
    color: 'from-red-400 to-red-600',
    fullDescription: 'Career activities encompass the day-to-day tasks and responsibilities you will perform in your chosen career. Understanding these activities helps you determine if a career aligns with your interests.',
    keyPoints: [
      'Client-facing interactions',
      'Data analysis and reporting',
      'Creative problem solving',
      'Team collaboration',
      'Project execution',
    ],
    relatedOccupations: ['Marketing Manager', 'UX Designer', 'Business Analyst', 'Event Coordinator'],
    skills: ['Organization', 'Attention to Detail', 'Multitasking', 'Creativity', 'Adaptability'],
    pathways: ['Internships', 'Job Shadowing', 'Case Studies', 'Practical Projects'],
  },
  industry: {
    id: 'industry',
    name: 'Career Industry',
    icon: <CareerIndustryIcon size={80} />,
    color: 'from-purple-400 to-purple-600',
    fullDescription: 'Industries are sectors of the economy in which organizations operate. Exploring different industries helps you find work environments that match your values and interests.',
    keyPoints: [
      'Technology and Software',
      'Healthcare and Pharmaceuticals',
      'Finance and Banking',
      'Manufacturing and Engineering',
      'Creative and Media',
    ],
    relatedOccupations: ['Industry Analyst', 'Business Consultant', 'Market Researcher', 'Strategic Planner'],
    skills: ['Market Analysis', 'Industry Knowledge', 'Trend Analysis', 'Business Acumen', 'Research'],
    pathways: ['Industry Research', 'Networking Events', 'Professional Associations', 'Industry Reports'],
  },
  knowledge: {
    id: 'knowledge',
    name: 'Career Knowledge',
    icon: <CareerKnowledgeIcon size={80} />,
    color: 'from-orange-400 to-orange-600',
    fullDescription: 'Required knowledge areas are the specific domains of information you need to understand to perform effectively in your career. This includes both theoretical and practical knowledge.',
    keyPoints: [
      'Subject matter expertise',
      'Domain-specific understanding',
      'Industry best practices',
      'Regulatory knowledge',
      'Technical fundamentals',
    ],
    relatedOccupations: ['Subject Matter Expert', 'Trainer', 'Researcher', 'Consultant'],
    skills: ['Learning Agility', 'Research', 'Documentation', 'Teaching', 'Analysis'],
    pathways: ['Formal Education', 'Certifications', 'Online Courses', 'Professional Development'],
  },
  outlook: {
    id: 'outlook',
    name: 'Career Outlook',
    icon: <CareerOutlookIcon size={80} />,
    color: 'from-cyan-400 to-cyan-600',
    fullDescription: 'Career outlook refers to future job prospects, growth potential, and employment trends in your chosen field. It helps you make informed decisions about career sustainability.',
    keyPoints: [
      'Job growth projections',
      'Market demand trends',
      'Salary growth potential',
      'Industry evolution',
      'Emerging opportunities',
    ],
    relatedOccupations: ['Career Counselor', 'Labor Economist', 'HR Strategist', 'Trend Analyst'],
    skills: ['Forecasting', 'Data Analysis', 'Trend Recognition', 'Strategic Thinking', 'Research'],
    pathways: ['Government Labor Statistics', 'Industry Reports', 'Market Research', 'Professional Networks'],
  },
  pathway: {
    id: 'pathway',
    name: 'Career Pathway',
    icon: <CareerPathwayIcon size={80} />,
    color: 'from-green-400 to-green-600',
    fullDescription: 'Career pathways are the progression routes you can take throughout your professional life. Understanding these pathways helps you plan your career development strategically.',
    keyPoints: [
      'Entry-level positions',
      'Mid-career advancement',
      'Leadership opportunities',
      'Lateral moves',
      'Entrepreneurship',
    ],
    relatedOccupations: ['Career Coach', 'Mentor', 'HR Manager', 'Development Specialist'],
    skills: ['Strategic Planning', 'Self-Assessment', 'Goal Setting', 'Networking', 'Leadership'],
    pathways: ['Mentorship Programs', 'Career Planning Sessions', 'Development Plans', 'Industry Networks'],
  },
  preference: {
    id: 'preference',
    name: 'Career Preference',
    icon: <CareerPreferenceIcon size={80} />,
    color: 'from-indigo-400 to-indigo-600',
    fullDescription: 'Career preferences reflect your personal values, interests, and working style. Understanding your preferences ensures you choose careers that align with your lifestyle and goals.',
    keyPoints: [
      'Work-life balance',
      'Remote work options',
      'Company culture fit',
      'Values alignment',
      'Compensation and benefits',
    ],
    relatedOccupations: ['HR Manager', 'Recruiter', 'Organizational Psychologist', 'Benefits Manager'],
    skills: ['Self-awareness', 'Communication', 'Negotiation', 'Decision Making', 'Values Clarification'],
    pathways: ['Personality Assessments', 'Values Workshops', 'Career Counseling', 'Company Research'],
  },
  sector: {
    id: 'sector',
    name: 'Career Sector',
    icon: <CareerSectorIcon size={80} />,
    color: 'from-teal-400 to-teal-600',
    fullDescription: 'Economic sectors are broad categories of the economy. Exploring sectors helps you understand different business environments and economic contributions.',
    keyPoints: [
      'Primary Sector (Agriculture)',
      'Secondary Sector (Manufacturing)',
      'Tertiary Sector (Services)',
      'Quaternary Sector (Information)',
      'Quinary Sector (High-level services)',
    ],
    relatedOccupations: ['Economist', 'Business Analyst', 'Industry Consultant', 'Policy Advisor'],
    skills: ['Economic Knowledge', 'Systems Thinking', 'Analysis', 'Strategic Planning', 'Research'],
    pathways: ['Economics Study', 'Industry Exposure', 'Sector Reports', 'Professional Networks'],
  },
  skills: {
    id: 'skills',
    name: 'Career Skills',
    icon: <CareerSkillsIcon size={80} />,
    color: 'from-yellow-400 to-yellow-600',
    fullDescription: 'Core competencies are the essential skills you need to succeed in your career. These include both hard technical skills and soft interpersonal skills.',
    keyPoints: [
      'Technical expertise',
      'Communication',
      'Leadership',
      'Problem solving',
      'Collaboration',
    ],
    relatedOccupations: ['Skills Trainer', 'Coach', 'Assessor', 'Development Manager'],
    skills: ['Skill Assessment', 'Training Design', 'Feedback', 'Coaching', 'Evaluation'],
    pathways: ['Skill Development Programs', 'Workshops', 'Online Training', 'Apprenticeships'],
  },
  stem: {
    id: 'stem',
    name: 'Career STEM',
    icon: <CareerSTEMIcon size={80} />,
    color: 'from-indigo-400 to-indigo-600',
    fullDescription: 'STEM careers focus on Science, Technology, Engineering, and Mathematics. These fields are critical for innovation and offer excellent growth opportunities.',
    keyPoints: [
      'Science Research',
      'Software Development',
      'Engineering Design',
      'Data Analysis',
      'Biotechnology',
    ],
    relatedOccupations: ['Scientist', 'Engineer', 'Data Scientist', 'Tech Lead', 'Researcher'],
    skills: ['Analytical Thinking', 'Programming', 'Problem Solving', 'Research', 'Innovation'],
    pathways: ['STEM Education', 'University Programs', 'Internships', 'Research Projects'],
  },
  technology: {
    id: 'technology',
    name: 'Career Technology',
    icon: <CareerTechnologyIcon size={80} />,
    color: 'from-slate-400 to-slate-600',
    fullDescription: 'Technology careers involve developing, implementing, and managing digital solutions. This rapidly growing field offers diverse opportunities and high earning potential.',
    keyPoints: [
      'Software Development',
      'Cloud Computing',
      'Cybersecurity',
      'AI and Machine Learning',
      'System Administration',
    ],
    relatedOccupations: ['Software Engineer', 'Cloud Architect', 'Security Specialist', 'DevOps Engineer'],
    skills: ['Programming', 'System Design', 'Problem Solving', 'Technical Writing', 'Continuous Learning'],
    pathways: ['Coding Bootcamps', 'University Programs', 'Online Certifications', 'Open Source Projects'],
  },
  traits: {
    id: 'traits',
    name: 'Career Traits',
    icon: <CareerTraitsIcon size={80} />,
    color: 'from-amber-400 to-amber-600',
    fullDescription: 'Required personality traits and characteristics help determine if you are naturally suited for a particular career. Understanding these helps you make authentic career choices.',
    keyPoints: [
      'Attention to detail',
      'Creativity',
      'Empathy',
      'Resilience',
      'Initiative',
    ],
    relatedOccupations: ['Psychologist', 'Life Coach', 'HR Specialist', 'Organizational Consultant'],
    skills: ['Self-awareness', 'Personality Assessment', 'Coaching', 'Counseling', 'Observation'],
    pathways: ['Personality Tests', 'Self-reflection', 'Coaching Sessions', 'Feedback Programs'],
  },
  zone: {
    id: 'zone',
    name: 'Career Zone',
    icon: <CareerZoneIcon size={80} />,
    color: 'from-red-400 to-red-600',
    fullDescription: 'Career zones refer to geographic locations and work environments where jobs are concentrated. Understanding job zones helps with relocation planning and opportunity discovery.',
    keyPoints: [
      'Urban tech hubs',
      'Regional industries',
      'Remote work locations',
      'Global opportunities',
      'Special economic zones',
    ],
    relatedOccupations: ['Recruiter', 'Relocation Specialist', 'Market Researcher', 'Regional Manager'],
    skills: ['Geographic Analysis', 'Market Research', 'Networking', 'Relocation Planning', 'Cultural Awareness'],
    pathways: ['Job Market Research', 'Networking Events', 'Industry Conferences', 'Online Platforms'],
  },
};

interface CareerCategoryContentProps {
  categoryId: string;
}

export function CareerCategoryContent({ categoryId }: CareerCategoryContentProps) {
  const category = categoryData[categoryId];
  const [activeTab, setActiveTab] = useState('overview');

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link
            href="/career"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            ← Back to Career Explorer
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/career"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm transition"
          >
            <span>←</span>
            Back to Career Explorer
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero Section - Beautiful & Elegant */}
        <div className={`mb-8 relative`}>
          <div className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${category.color} opacity-20 blur-md z-0`} />
          <div className="relative z-10 flex items-center gap-6 mb-6 p-5 sm:p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/80 border border-gray-100">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/50 shadow-md">
                <span className="text-4xl drop-shadow-md">{category.icon}</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 tracking-tight drop-shadow">{category.name}</h1>
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl font-normal drop-shadow-sm">{category.fullDescription}</p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation - Clean */}
        <div className="flex gap-6 mb-8 border-b border-gray-200">
          {['overview', 'skills', 'occupations', 'pathways'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-semibold transition-all border-b-2 rounded-t-lg px-2 sm:px-4 ${
                activeTab === tab
                  ? `text-indigo-700 border-indigo-400 bg-indigo-50 shadow-sm`
                  : 'text-gray-500 hover:text-indigo-600 border-transparent hover:bg-gray-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.keyPoints.map((point, idx) => (
                  <div key={idx} className={`flex gap-4 items-center bg-gradient-to-r ${category.color} bg-opacity-10 rounded-xl p-4 shadow-sm transition-all hover:scale-[1.03]`}>
                    <span className="text-indigo-300 text-lg font-bold">•</span>
                    <p className="text-gray-800 text-base font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl shadow-sm bg-gradient-to-r ${category.color} bg-opacity-10 border border-indigo-100 hover:scale-[1.03] transition-all`}
                  >
                    <p className="font-semibold text-indigo-700 text-base">{skill}</p>
                    <p className="text-gray-600 text-xs mt-1">
                      Key competency in this field
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Occupations Tab */}
          {activeTab === 'occupations' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.relatedOccupations.map((occupation, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl shadow-sm bg-gradient-to-r ${category.color} bg-opacity-10 border border-indigo-100 hover:scale-[1.03] transition-all`}
                >
                  <p className="font-semibold text-indigo-700 text-base">{occupation}</p>
                  <p className="text-gray-600 text-xs mt-1">Related occupation</p>
                </div>
              ))}
            </div>
          )}

          {/* Pathways Tab */}
          {activeTab === 'pathways' && (
            <div className="space-y-3">
              {category.pathways.map((pathway, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl shadow-sm bg-gradient-to-r ${category.color} bg-opacity-10 border border-indigo-100 hover:scale-[1.03] transition-all`}
                >
                  <p className="font-semibold text-indigo-700 text-base">{pathway}</p>
                  <p className="text-gray-600 text-xs mt-1">
                    Recommended approach for {category.name.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm mb-4">Ready to explore more careers?</p>
          <Link
            href="/career"
            className="inline-block px-6 py-2.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded transition"
          >
            Back to Career Explorer
          </Link>
        </div>
      </div>
    </div>
  );
}
