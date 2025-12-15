'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Occupation {
  id: string;
  name: string;
}

const sampleOccupations: Occupation[] = [
  {
    id: '1',
    name: 'Web Designer',
  },
];

interface AttributeOption {
  name: string;
  items: string[];
}

interface CareerCategoryData {
  name: string;
  attributes: AttributeOption[];
}

const careerCategoriesData: CareerCategoryData[] = [
  {
    name: 'Career Ability',
    attributes: [
      {
        name: 'Occupations',
        items: ['Web Designer', 'Software Developer', 'Data Analyst', 'UX Designer', 'Project Manager'],
      },
      {
        name: 'Abilities',
        items: ['Verbal Ability', 'Mathematical Ability', 'Spatial Ability', 'Perceptual Ability', 'Manual Dexterity'],
      },
      {
        name: 'Activities',
        items: ['Information Input', 'Mental Processes', 'Work Output', 'Interacting with Others'],
      },
      {
        name: 'Knowledge',
        items: ['Business', 'Engineering', 'Arts & Humanities', 'Science', 'Health Services'],
      },
      {
        name: 'Preference',
        items: ['Work Environment', 'Work Schedule', 'Work Style', 'Work Values'],
      },
      {
        name: 'Skills',
        items: ['Technical Skills', 'Soft Skills', 'Leadership Skills', 'Communication Skills'],
      },
      {
        name: 'Technology',
        items: ['Software Development', 'Data Science', 'Cybersecurity', 'Cloud Computing', 'AI/ML'],
      },
      {
        name: 'Traits',
        items: ['Achievement', 'Independence', 'Recognition', 'Support', 'Working Conditions'],
      },
    ],
  },
  {
    name: 'Career Activity',
    attributes: [
      {
        name: 'Occupations',
        items: ['Marketing Manager', 'Sales Representative', 'Event Coordinator', 'Content Creator'],
      },
      {
        name: 'Abilities',
        items: ['Communication', 'Organization', 'Creativity', 'Time Management'],
      },
      {
        name: 'Activities',
        items: ['Planning', 'Coordinating', 'Presenting', 'Analyzing'],
      },
      {
        name: 'Knowledge',
        items: ['Marketing', 'Sales', 'Public Relations', 'Social Media'],
      },
      {
        name: 'Preference',
        items: ['Fast-paced Environment', 'Client Interaction', 'Team Collaboration'],
      },
      {
        name: 'Skills',
        items: ['Negotiation', 'Persuasion', 'Strategic Planning', 'Problem Solving'],
      },
      {
        name: 'Technology',
        items: ['CRM Systems', 'Analytics Tools', 'Marketing Automation', 'Social Media Platforms'],
      },
      {
        name: 'Traits',
        items: ['Outgoing', 'Energetic', 'Results-oriented', 'Adaptable'],
      },
    ],
  },
  {
    name: 'Career Industry',
    attributes: [
      {
        name: 'Occupations',
        items: ['Industry Analyst', 'Business Consultant', 'Operations Manager'],
      },
      {
        name: 'Abilities',
        items: ['Analytical Thinking', 'Strategic Planning', 'Market Analysis'],
      },
      {
        name: 'Activities',
        items: ['Research', 'Analysis', 'Reporting', 'Strategy Development'],
      },
      {
        name: 'Knowledge',
        items: ['Healthcare', 'Technology', 'Finance', 'Education', 'Manufacturing', 'Retail'],
      },
      {
        name: 'Preference',
        items: ['Industry Focus', 'Growth Potential', 'Innovation Level'],
      },
      {
        name: 'Skills',
        items: ['Industry Research', 'Trend Analysis', 'Competitive Intelligence'],
      },
      {
        name: 'Technology',
        items: ['Industry Software', 'Analytics Platforms', 'Research Tools'],
      },
      {
        name: 'Traits',
        items: ['Curious', 'Detail-oriented', 'Forward-thinking'],
      },
    ],
  },
  {
    name: 'Career Interest',
    attributes: [
      {
        name: 'Occupations',
        items: ['Career Counselor', 'HR Specialist', 'Training Coordinator'],
      },
      {
        name: 'Abilities',
        items: ['Interpersonal Skills', 'Assessment', 'Guidance'],
      },
      {
        name: 'Activities',
        items: ['Counseling', 'Testing', 'Career Planning', 'Workshops'],
      },
      {
        name: 'Knowledge',
        items: ['Realistic', 'Investigative', 'Artistic', 'Social', 'Enterprising', 'Conventional'],
      },
      {
        name: 'Preference',
        items: ['Helping Others', 'Personal Development', 'Career Growth'],
      },
      {
        name: 'Skills',
        items: ['Active Listening', 'Career Assessment', 'Mentoring'],
      },
      {
        name: 'Technology',
        items: ['Assessment Tools', 'Career Planning Software', 'LMS Systems'],
      },
      {
        name: 'Traits',
        items: ['Empathetic', 'Patient', 'Supportive', 'Motivating'],
      },
    ],
  },
  {
    name: 'Career Knowledge',
    attributes: [
      {
        name: 'Occupations',
        items: ['Knowledge Manager', 'Researcher', 'Subject Matter Expert'],
      },
      {
        name: 'Abilities',
        items: ['Research', 'Analysis', 'Documentation', 'Teaching'],
      },
      {
        name: 'Activities',
        items: ['Information Gathering', 'Knowledge Sharing', 'Documentation'],
      },
      {
        name: 'Knowledge',
        items: ['Business', 'Engineering', 'Arts & Humanities', 'Science', 'Health Services'],
      },
      {
        name: 'Preference',
        items: ['Learning Environment', 'Academic Setting', 'Knowledge Sharing'],
      },
      {
        name: 'Skills',
        items: ['Research Methods', 'Critical Thinking', 'Information Management'],
      },
      {
        name: 'Technology',
        items: ['Research Databases', 'Knowledge Management Systems', 'Documentation Tools'],
      },
      {
        name: 'Traits',
        items: ['Inquisitive', 'Thorough', 'Analytical', 'Detail-focused'],
      },
    ],
  },
  {
    name: 'Career Outlook',
    attributes: [
      {
        name: 'Occupations',
        items: ['Labor Economist', 'Career Strategist', 'Workforce Analyst'],
      },
      {
        name: 'Abilities',
        items: ['Forecasting', 'Data Analysis', 'Trend Identification'],
      },
      {
        name: 'Activities',
        items: ['Market Research', 'Data Collection', 'Trend Analysis'],
      },
      {
        name: 'Knowledge',
        items: ['Job Growth Rate', 'Salary Trends', 'Industry Demand', 'Automation Risk'],
      },
      {
        name: 'Preference',
        items: ['Future Planning', 'Long-term Growth', 'Stability'],
      },
      {
        name: 'Skills',
        items: ['Economic Analysis', 'Statistical Modeling', 'Report Writing'],
      },
      {
        name: 'Technology',
        items: ['Statistical Software', 'Economic Models', 'Data Visualization'],
      },
      {
        name: 'Traits',
        items: ['Forward-thinking', 'Analytical', 'Strategic'],
      },
    ],
  },
  {
    name: 'Career Pathway',
    attributes: [
      {
        name: 'Occupations',
        items: ['Career Coach', 'Talent Development Manager', 'Succession Planner'],
      },
      {
        name: 'Abilities',
        items: ['Planning', 'Mentoring', 'Strategy Development'],
      },
      {
        name: 'Activities',
        items: ['Career Mapping', 'Skills Assessment', 'Development Planning'],
      },
      {
        name: 'Knowledge',
        items: ['Entry Level', 'Mid Career', 'Senior Level', 'Executive Level', 'Specialized Tracks'],
      },
      {
        name: 'Preference',
        items: ['Career Advancement', 'Skill Development', 'Leadership Roles'],
      },
      {
        name: 'Skills',
        items: ['Career Planning', 'Skills Development', 'Leadership Development'],
      },
      {
        name: 'Technology',
        items: ['Career Pathing Software', 'Skills Assessment Tools', 'LMS'],
      },
      {
        name: 'Traits',
        items: ['Ambitious', 'Goal-oriented', 'Persistent'],
      },
    ],
  },
  {
    name: 'Career Preference',
    attributes: [
      {
        name: 'Occupations',
        items: ['HR Consultant', 'Workplace Designer', 'Culture Specialist'],
      },
      {
        name: 'Abilities',
        items: ['Assessment', 'Matching', 'Environment Design'],
      },
      {
        name: 'Activities',
        items: ['Preference Assessment', 'Job Matching', 'Culture Analysis'],
      },
      {
        name: 'Knowledge',
        items: ['Work Environment', 'Work Schedule', 'Work Style', 'Work Values'],
      },
      {
        name: 'Preference',
        items: ['Flexibility', 'Work-Life Balance', 'Company Culture'],
      },
      {
        name: 'Skills',
        items: ['Needs Assessment', 'Job Fit Analysis', 'Culture Assessment'],
      },
      {
        name: 'Technology',
        items: ['Job Matching Software', 'Culture Assessment Tools', 'Survey Platforms'],
      },
      {
        name: 'Traits',
        items: ['Understanding', 'Flexible', 'People-oriented'],
      },
    ],
  },
  {
    name: 'Career Sector',
    attributes: [
      {
        name: 'Occupations',
        items: ['Sector Analyst', 'Business Development Manager', 'Industry Consultant'],
      },
      {
        name: 'Abilities',
        items: ['Sector Analysis', 'Market Understanding', 'Business Acumen'],
      },
      {
        name: 'Activities',
        items: ['Sector Research', 'Market Analysis', 'Opportunity Identification'],
      },
      {
        name: 'Knowledge',
        items: ['Private Sector', 'Public Sector', 'Non-Profit', 'Self-Employment'],
      },
      {
        name: 'Preference',
        items: ['Sector Type', 'Organization Size', 'Mission Alignment'],
      },
      {
        name: 'Skills',
        items: ['Sector Analysis', 'Business Strategy', 'Market Research'],
      },
      {
        name: 'Technology',
        items: ['Market Research Tools', 'Business Intelligence', 'Analytics Platforms'],
      },
      {
        name: 'Traits',
        items: ['Business-minded', 'Strategic', 'Opportunistic'],
      },
    ],
  },
  {
    name: 'Career Skills',
    attributes: [
      {
        name: 'Occupations',
        items: ['Skills Trainer', 'Learning & Development Specialist', 'Training Manager'],
      },
      {
        name: 'Abilities',
        items: ['Training', 'Skill Assessment', 'Curriculum Development'],
      },
      {
        name: 'Activities',
        items: ['Training Delivery', 'Skills Assessment', 'Course Development'],
      },
      {
        name: 'Knowledge',
        items: ['Technical Skills', 'Soft Skills', 'Leadership Skills', 'Communication Skills'],
      },
      {
        name: 'Preference',
        items: ['Continuous Learning', 'Skill Mastery', 'Professional Development'],
      },
      {
        name: 'Skills',
        items: ['Training Delivery', 'Instructional Design', 'Competency Assessment'],
      },
      {
        name: 'Technology',
        items: ['LMS Platforms', 'E-learning Tools', 'Assessment Software'],
      },
      {
        name: 'Traits',
        items: ['Teaching-oriented', 'Patient', 'Organized'],
      },
    ],
  },
  {
    name: 'Career STEM',
    attributes: [
      {
        name: 'Occupations',
        items: ['STEM Educator', 'Research Scientist', 'Technical Specialist', 'Engineer'],
      },
      {
        name: 'Abilities',
        items: ['Scientific Reasoning', 'Mathematical Skills', 'Technical Aptitude'],
      },
      {
        name: 'Activities',
        items: ['Research', 'Analysis', 'Problem Solving', 'Innovation'],
      },
      {
        name: 'Knowledge',
        items: ['Computer Science', 'Engineering', 'Life Sciences', 'Physical Sciences', 'Mathematics'],
      },
      {
        name: 'Preference',
        items: ['Research Environment', 'Innovation Focus', 'Technical Challenges'],
      },
      {
        name: 'Skills',
        items: ['Scientific Method', 'Data Analysis', 'Technical Writing', 'Programming'],
      },
      {
        name: 'Technology',
        items: ['Lab Equipment', 'Research Software', 'Programming Languages', 'Simulation Tools'],
      },
      {
        name: 'Traits',
        items: ['Analytical', 'Precise', 'Innovative', 'Logical'],
      },
    ],
  },
  {
    name: 'Career Technology',
    attributes: [
      {
        name: 'Occupations',
        items: ['Software Engineer', 'Data Scientist', 'DevOps Engineer', 'Security Analyst'],
      },
      {
        name: 'Abilities',
        items: ['Programming', 'Systems Thinking', 'Problem Solving', 'Technical Design'],
      },
      {
        name: 'Activities',
        items: ['Coding', 'Testing', 'Deployment', 'Troubleshooting'],
      },
      {
        name: 'Knowledge',
        items: ['Software Development', 'Data Science', 'Cybersecurity', 'Cloud Computing', 'AI/ML'],
      },
      {
        name: 'Preference',
        items: ['Tech Environment', 'Innovation', 'Remote Work', 'Agile Teams'],
      },
      {
        name: 'Skills',
        items: ['Coding', 'System Architecture', 'Database Design', 'Version Control'],
      },
      {
        name: 'Technology',
        items: ['Programming Languages', 'Frameworks', 'Cloud Platforms', 'Dev Tools'],
      },
      {
        name: 'Traits',
        items: ['Tech-savvy', 'Problem-solver', 'Continuous Learner', 'Collaborative'],
      },
    ],
  },
  {
    name: 'Career Traits',
    attributes: [
      {
        name: 'Occupations',
        items: ['Psychologist', 'HR Specialist', 'Personality Assessor', 'Coach'],
      },
      {
        name: 'Abilities',
        items: ['Assessment', 'Observation', 'Analysis', 'Counseling'],
      },
      {
        name: 'Activities',
        items: ['Testing', 'Evaluation', 'Counseling', 'Development Planning'],
      },
      {
        name: 'Knowledge',
        items: ['Achievement', 'Independence', 'Recognition', 'Support', 'Working Conditions'],
      },
      {
        name: 'Preference',
        items: ['People-focused Work', 'Development Role', 'Helping Profession'],
      },
      {
        name: 'Skills',
        items: ['Personality Assessment', 'Behavioral Analysis', 'Coaching'],
      },
      {
        name: 'Technology',
        items: ['Assessment Tools', 'Psychometric Software', 'Survey Platforms'],
      },
      {
        name: 'Traits',
        items: ['Empathetic', 'Observant', 'Non-judgmental', 'Patient'],
      },
    ],
  },
  {
    name: 'Career Zone',
    attributes: [
      {
        name: 'Occupations',
        items: ['Entry-level Worker', 'Skilled Tradesperson', 'Professional', 'Specialist', 'Expert'],
      },
      {
        name: 'Abilities',
        items: ['Basic Skills', 'Technical Skills', 'Advanced Skills', 'Expert Skills'],
      },
      {
        name: 'Activities',
        items: ['Basic Tasks', 'Skilled Tasks', 'Complex Tasks', 'Expert Tasks'],
      },
      {
        name: 'Knowledge',
        items: ['Zone 1: Little/No Prep', 'Zone 2: Some Prep', 'Zone 3: Medium Prep', 'Zone 4: High Prep', 'Zone 5: Extensive Prep'],
      },
      {
        name: 'Preference',
        items: ['Education Level', 'Training Required', 'Experience Needed'],
      },
      {
        name: 'Skills',
        items: ['Entry Skills', 'Intermediate Skills', 'Advanced Skills', 'Expert Skills'],
      },
      {
        name: 'Technology',
        items: ['Basic Tools', 'Standard Software', 'Specialized Software', 'Advanced Systems'],
      },
      {
        name: 'Traits',
        items: ['Willingness to Learn', 'Commitment', 'Dedication', 'Expertise'],
      },
    ],
  },
];

export const CareerExplorer: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedAttribute, setExpandedAttribute] = useState<string | null>(null);
  const [selectedOccupationAttribute, setSelectedOccupationAttribute] = useState<{ occupation: string; attribute: string } | null>(null);
    const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640);
      };
    
      checkMobile();
      window.addEventListener('resize', checkMobile);
    
      return () => window.removeEventListener('resize', checkMobile);
    }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setExpandedCategory(null);
        setExpandedAttribute(null);
      }
    };

    if (expandedCategory) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expandedCategory]);


  const handleCategoryClick = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedAttribute(null); // Reset expanded attribute when changing category
  };

  const handleAttributeClick = (attributeKey: string) => {
    setExpandedAttribute(expandedAttribute === attributeKey ? null : attributeKey);
  };

  const handleViewDetails = (occupationId: string, attribute: string) => {
    setSelectedOccupationAttribute({ occupation: occupationId, attribute });
    console.log(`View details for ${occupationId} - ${attribute}`);
  };

  const handleShowGraph = (occupationId: string, attribute: string) => {
    console.log(`Show graph for ${occupationId} - ${attribute}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
            {/* Backdrop overlay for mobile */}
            {expandedCategory && (
              <div 
                className="fixed inset-0 bg-black/20 z-10 lg:hidden"
                onClick={() => {
                  setExpandedCategory(null);
                  setExpandedAttribute(null);
                }}
              />
            )}
      
      {/* Modern Header with Gradient */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
          Career Explorer
        </h2>
        <p className="text-gray-600 text-sm">Discover your perfect career path through comprehensive analysis</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {careerCategoriesData.map((category, index) => {
          // Determine if this is in the last column to adjust dropdown positioning
          const isLastColumn = (index % 3) === 2;
          const isMiddleColumn = (index % 3) === 1;
          
          return (
            <div 
              key={index} 
              className="relative group" 
              style={{ zIndex: expandedCategory === category.name ? 30 : 1 }}
              ref={expandedCategory === category.name ? dropdownRef : null}
            >
              <div
                onClick={() => handleCategoryClick(category.name)}
                className="relative bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-blue-50 border-2 border-gray-200 hover:border-purple-300 px-6 py-5 text-left font-semibold text-gray-800 cursor-pointer transition-all duration-300 rounded-xl shadow-sm hover:shadow-xl flex justify-between items-center transform"
              >
                <span className="text-base bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {category.name}
                </span>
                <span className="text-sm bg-purple-100 text-purple-600 px-2.5 py-1 rounded-full transition-transform duration-300">
                  {expandedCategory === category.name ? '▲' : '▼'}
                </span>
              </div>
              
              {/* Modern Dropdown Content */}
              {expandedCategory === category.name && (
                <div 
                  className="absolute z-50 mt-3 left-0 right-0 sm:left-auto sm:right-auto sm:w-auto w-full sm:min-w-[360px] sm:max-w-[420px] bg-white border-2 border-purple-200 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn"
                  style={{
                    ...(!isMobile && {
                      left: isLastColumn ? 'auto' : isMiddleColumn ? '50%' : '0',
                      right: isLastColumn ? '0' : 'auto',
                      transform: isMiddleColumn ? 'translateX(-50%)' : 'none'
                    })
                  }}
                >
                  <div className="sticky top-0 bg-white px-5 pt-5 pb-3 mb-2 border-b-2 border-purple-100 z-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          {category.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">Click to expand and explore details</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedCategory(null);
                          setExpandedAttribute(null);
                        }}
                        className="text-gray-400 hover:text-gray-600 transition-colors ml-2"
                        aria-label="Close"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3 px-5 pb-5 max-h-[500px] overflow-y-auto dropdown-scroll">
                    {category.attributes.map((attribute, attrIdx) => {
                      const attributeKey = `${category.name}-${attribute.name}`;
                      const isExpanded = expandedAttribute === attributeKey;
                      
                      return (
                        <div key={attrIdx} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-purple-300 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAttributeClick(attributeKey);
                            }}
                            className="w-full px-4 py-3 font-semibold text-sm text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 flex justify-between items-center group"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
                              {attribute.name}
                            </span>
                            <span className={`text-xs transition-all duration-300 ${isExpanded ? 'rotate-180' : ''} transform`}>
                              <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </button>
                          
                          {isExpanded && (
                            <ul className="space-y-2 px-4 pb-4 pt-2 bg-white border-t border-gray-100">
                              {attribute.items.map((item, itemIdx) => (
                                <li 
                                  key={itemIdx} 
                                  className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer py-2 px-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg transition-all duration-200 flex items-center gap-2 group"
                                >
                                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:scale-150 transition-transform duration-200"></span>
                                  <span className="group-hover:translate-x-1 transition-transform duration-200">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
