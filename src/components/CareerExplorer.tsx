'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Icon } from './Icons';

interface Occupation {
  id: string;
  name: string;
}

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
  const [bottomOpenAttribute, setBottomOpenAttribute] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [bottomPage, setBottomPage] = useState(1);
  const [bottomPageSize, setBottomPageSize] = useState(9);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [query, setQuery] = useState('');

  const occupations: Occupation[] = React.useMemo(() => {
    const all = careerCategoriesData
      .flatMap(cat => cat.attributes)
      .filter(attr => attr.name === 'Occupations')
      .flatMap(attr => attr.items);
    const base = Array.from(new Set(all));
    const target = 120; // expand for richer pagination demo
    const result: Occupation[] = [];
    let idCounter = 1;
    // push base set first
    for (const name of base) {
      result.push({ id: String(idCounter++), name });
    }
    // repeat with suffixes until reaching target size
    let repeat = 2;
    while (result.length < target && base.length > 0) {
      for (const name of base) {
        if (result.length >= target) break;
        result.push({ id: String(idCounter++), name: `${name} (${repeat})` });
      }
      repeat++;
    }
    return result;
  }, []);

  const filteredOccupations = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return occupations;
    return occupations.filter(o => o.name.toLowerCase().includes(q));
  }, [occupations, query]);

  const totalItems = filteredOccupations.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = Math.min((page - 1) * pageSize, Math.max(0, totalItems - 1));
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const pagedOccupations = filteredOccupations.slice(startIndex, endIndex);

  const visiblePages = React.useMemo(() => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);
    start = Math.max(1, end - maxVisible + 1);
    for (let p = start; p <= end; p++) pages.push(p);
    return pages;
  }, [page, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [query, pageSize]);

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

  const openBottomOptions = (attribute: string) => {
    setBottomOpenAttribute(attribute);
  };

  const bottomItems = React.useMemo(() => {
    if (!bottomOpenAttribute) return [] as string[];
    const baseCategory = careerCategoriesData[0]; // Use "Career Ability" for bottom table
    const found = baseCategory.attributes.find(a => a.name === bottomOpenAttribute);
    return found?.items ?? [];
  }, [bottomOpenAttribute]);

  const bottomTotal = bottomItems.length;
  const bottomTotalPages = Math.max(1, Math.ceil(bottomTotal / bottomPageSize));
  const bottomStartIndex = Math.min((bottomPage - 1) * bottomPageSize, Math.max(0, bottomTotal - 1));
  const bottomEndIndex = Math.min(bottomStartIndex + bottomPageSize, bottomTotal);
  const bottomPagedItems = bottomItems.slice(bottomStartIndex, bottomEndIndex);

  const bottomVisiblePages = React.useMemo(() => {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, bottomPage - 2);
    let end = Math.min(bottomTotalPages, start + maxVisible - 1);
    start = Math.max(1, end - maxVisible + 1);
    for (let p = start; p <= end; p++) pages.push(p);
    return pages;
  }, [bottomPage, bottomTotalPages]);

  useEffect(() => {
    setBottomPage(1);
  }, [bottomOpenAttribute, bottomPageSize]);

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                className="relative bg-gradient-to-br from-white to-gray-50 hover:from-purple-50 hover:to-blue-50 border-2 border-gray-200 hover:border-purple-300 px-8 py-7 text-left font-semibold text-gray-800 cursor-pointer transition-all duration-300 rounded-2xl shadow-md hover:shadow-xl flex justify-between items-center transform min-h-[92px]"
              >
                <span className="text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300 max-w-[70%]">
                  <span className="inline-flex items-center gap-3">
                    <Icon name={category.name} size={20} className="text-purple-600 shrink-0" />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis" title={category.name}>{category.name}</span>
                  </span>
                </span>
                <span className="text-sm bg-purple-100 text-purple-600 px-2.5 py-1 rounded-full transition-transform duration-300 flex items-center gap-1">
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
                              <Icon name={attribute.name} size={16} className="text-purple-600 shrink-0" />
                              <span className="whitespace-nowrap overflow-hidden text-ellipsis" title={attribute.name}>{attribute.name}</span>
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
                                  title={item}
                                >
                                  {itemIdx === 0 ? (
                                    <Icon name={attribute.name} size={12} className="text-purple-500 shrink-0" />
                                  ) : (
                                    <span className="w-3 shrink-0" aria-hidden="true" />
                                  )}
                                  <span className="group-hover:translate-x-1 transition-transform duration-200 whitespace-nowrap overflow-hidden text-ellipsis">{item}</span>
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

      {/* Bottom Summary Table */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-5">Career Summary</h3>
        <div className="mb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search occupations..."
              className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pr-9"
              aria-label="Search occupations"
            />
            <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Rows per page:</span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
              className="border border-gray-300 rounded-full px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Rows per page"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full text-sm">
            <caption className="sr-only">Career summary table</caption>
            <thead className="bg-gray-50 sticky top-0 z-0">
              <tr className="text-gray-800">
                <th className="px-5 py-3 text-left border-b border-gray-200 font-semibold"><span className="inline-flex items-center gap-2"><Icon name="Occupations" size={14} className="text-purple-600 shrink-0" /><span className="whitespace-nowrap">Occupations</span></span></th>
                {['Abilities','Activities','Knowledge','Preference','Skills','Technology','Traits'].map((h) => (
                  <th key={h} className="px-5 py-3 text-left border-b border-gray-200 font-semibold">
                    <span className="inline-flex items-center gap-2"><Icon name={h} size={14} className="text-purple-600 shrink-0" /><span className="whitespace-nowrap">{h}</span></span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pagedOccupations.map((occ) => (
                <tr key={occ.id} className="odd:bg-white even:bg-gray-50 hover:bg-purple-50/50 transition-colors">
                  <td className="px-5 py-3 border-b border-gray-100">
                    <div className="inline-flex items-center gap-2 max-w-[220px]">
                      <Icon name="Occupations" size={16} className="text-purple-600 shrink-0" />
                      <span className="font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis" title={occ.name}>{occ.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-100">
                    <button
                      className="inline-flex items-center gap-2 text-purple-700 hover:text-purple-900 bg-purple-100/70 hover:bg-purple-200 px-3 py-1.5 rounded-full font-semibold transition-colors"
                      onClick={() => { handleShowGraph(occ.name, 'Abilities'); openBottomOptions('Abilities'); }}
                      onMouseEnter={() => openBottomOptions('Abilities')}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17h3v-7H3v7zm5 0h3V7H8v10zm5 0h3V10h-3v7zm5 0h3V4h-3v13z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      Graph
                    </button>
                  </td>
                  {['Activities','Knowledge','Preference','Skills','Technology','Traits'].map((attr) => (
                    <td key={`${occ.id}-${attr}`} className="px-5 py-3 border-b border-gray-100">
                      <button
                        className="inline-flex items-center gap-1.5 text-indigo-700 hover:text-indigo-900 bg-indigo-100/70 hover:bg-indigo-200 px-2.5 py-1.5 rounded-full font-semibold transition-colors"
                        onClick={() => { handleViewDetails(occ.name, attr); openBottomOptions(attr); }}
                        onMouseEnter={() => openBottomOptions(attr)}
                        title={`View ${attr}`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="hidden sm:inline">Open</span>
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={8} className="px-5 py-4 bg-white border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">Showing <span className="font-semibold text-gray-900">{startIndex + 1}</span> to <span className="font-semibold text-gray-900">{endIndex}</span> of <span className="font-semibold text-gray-900">{totalItems}</span> entries</p>
                    <div className="flex items-center gap-1">
                      <button
                        className="px-3 py-1.5 text-xs font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                      >
                        Previous
                      </button>
                      <button
                        className="px-2 py-1.5 text-xs font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => setPage(1)}
                        disabled={page === 1}
                        aria-label="First page"
                      >
                        «
                      </button>
                      {visiblePages.length > 0 && visiblePages[0] > 2 && (
                        <span className="px-2 text-gray-400">…</span>
                      )}
                      {visiblePages.map((p) => (
                        <button
                          key={p}
                          onClick={() => setPage(p)}
                          className={`${p === page ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'} px-3 py-1.5 text-xs font-semibold rounded-full border`}
                          aria-current={p === page ? 'page' : undefined}
                        >
                          {p}
                        </button>
                      ))}
                      {visiblePages.length > 0 && visiblePages[visiblePages.length - 1] < totalPages - 1 && (
                        <span className="px-2 text-gray-400">…</span>
                      )}
                      <button
                        className="px-2 py-1.5 text-xs font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => setPage(totalPages)}
                        disabled={page === totalPages}
                        aria-label="Last page"
                      >
                        »
                      </button>
                      <button
                        className="px-3 py-1.5 text-xs font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* Bottom options panel */}
        {bottomOpenAttribute && (
          <div className="mt-5 bg-white border border-purple-200 rounded-2xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900 text-base"><span className="inline-flex items-center gap-2"><Icon name={bottomOpenAttribute} size={16} className="text-purple-600" />{bottomOpenAttribute} Options</span></h4>
              <button
                className="text-gray-400 hover:text-gray-600 p-1 rounded"
                onClick={() => setBottomOpenAttribute(null)}
                aria-label="Close options"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {bottomItems.length > 0 ? (
              <>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {bottomPagedItems.map((it, idx) => (
                  <li key={`${it}-${idx}`} className="text-sm text-gray-800 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2.5 flex items-center gap-2 hover:bg-purple-50/50">
                    <Icon name={bottomOpenAttribute} size={14} className="text-purple-600 shrink-0" />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis" title={it}>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-gray-600 text-xs">Showing <span className="font-semibold text-gray-900">{bottomStartIndex + 1}</span> to <span className="font-semibold text-gray-900">{bottomEndIndex}</span> of <span className="font-semibold text-gray-900">{bottomTotal}</span> entries</p>
                <div className="flex items-center gap-2 text-xs">
                  <span>Rows:</span>
                  <select
                    value={bottomPageSize}
                    onChange={(e) => setBottomPageSize(parseInt(e.target.value, 10))}
                    className="border border-gray-300 rounded-full px-2.5 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Rows per page"
                  >
                    <option value={6}>6</option>
                    <option value={9}>9</option>
                    <option value={12}>12</option>
                    <option value={18}>18</option>
                  </select>
                  <div className="flex items-center gap-1">
                    <button
                      className="px-2.5 py-1.5 font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                      onClick={() => setBottomPage((p) => Math.max(1, p - 1))}
                      disabled={bottomPage === 1}
                    >
                      Previous
                    </button>
                    <button
                      className="px-2 py-1.5 font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                      onClick={() => setBottomPage(1)}
                      disabled={bottomPage === 1}
                      aria-label="First page"
                    >
                      «
                    </button>
                    {bottomVisiblePages.length > 0 && bottomVisiblePages[0] > 2 && (
                      <span className="px-2 text-gray-400">…</span>
                    )}
                    {bottomVisiblePages.map((p) => (
                      <button
                        key={p}
                        onClick={() => setBottomPage(p)}
                        className={`${p === bottomPage ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-200'} px-2.5 py-1.5 font-semibold rounded-full border`}
                        aria-current={p === bottomPage ? 'page' : undefined}
                      >
                        {p}
                      </button>
                    ))}
                    {bottomVisiblePages.length > 0 && bottomVisiblePages[bottomVisiblePages.length - 1] < bottomTotalPages - 1 && (
                      <span className="px-2 text-gray-400">…</span>
                    )}
                    <button
                      className="px-2 py-1.5 font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                      onClick={() => setBottomPage(bottomTotalPages)}
                      disabled={bottomPage === bottomTotalPages}
                      aria-label="Last page"
                    >
                      »
                    </button>
                    <button
                      className="px-2.5 py-1.5 font-semibold rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                      onClick={() => setBottomPage((p) => Math.min(bottomTotalPages, p + 1))}
                      disabled={bottomPage === bottomTotalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">No options available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
