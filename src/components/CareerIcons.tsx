// Career Icons Components
import React from 'react';

export const CareerAbilityIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="20" r="8" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M32 30L32 44M32 44L26 38M32 44L38 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 56C16 47.7157 22.7157 41 31 41H33C41.2843 41 48 47.7157 48 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="20" cy="32" r="3" fill="currentColor"/>
    <circle cx="44" cy="32" r="3" fill="currentColor"/>
  </svg>
);

export const CareerActivityIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="20" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M20 20V16C20 13.7909 21.7909 12 24 12H40C42.2091 12 44 13.7909 44 16V20" stroke="currentColor" strokeWidth="3"/>
    <circle cx="32" cy="36" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M32 30V36M32 36L36 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const CareerIndustryIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="30" width="16" height="24" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="30" y="20" width="16" height="34" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="50" y="26" width="6" height="28" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="14" y="36" width="3" height="4" fill="currentColor"/>
    <rect x="19" y="36" width="3" height="4" fill="currentColor"/>
    <rect x="14" y="44" width="3" height="4" fill="currentColor"/>
    <rect x="19" y="44" width="3" height="4" fill="currentColor"/>
    <rect x="34" y="28" width="3" height="4" fill="currentColor"/>
    <rect x="39" y="28" width="3" height="4" fill="currentColor"/>
    <rect x="34" y="36" width="3" height="4" fill="currentColor"/>
    <rect x="39" y="36" width="3" height="4" fill="currentColor"/>
    <line x1="8" y1="54" x2="58" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const CareerInterestIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M32 50L18 38C13 33 13 25 18 20C23 15 31 15 32 20C33 15 41 15 46 20C51 25 51 33 46 38L32 50Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="28" r="3" fill="currentColor"/>
    <path d="M26 28L22 24M38 28L42 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CareerKnowledgeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M16 14H48C49.1046 14 50 14.8954 50 16V48C50 49.1046 49.1046 50 48 50H16C14.8954 50 14 49.1046 14 48V16C14 14.8954 14.8954 14 16 14Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <line x1="20" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="20" y1="32" x2="44" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="20" y1="40" x2="36" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 14V10C18 8.89543 18.8954 8 20 8H44C45.1046 8 46 8.89543 46 10V14" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

export const CareerOutlookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M32 32L42 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <path d="M32 32L32 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="32" r="2" fill="currentColor"/>
    <path d="M48 16L52 12M16 16L12 12M48 48L52 52M16 48L12 52" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CareerPathwayIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 52L24 40L36 46L52 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="12" cy="52" r="4" fill="currentColor"/>
    <circle cx="24" cy="40" r="4" fill="currentColor"/>
    <circle cx="36" cy="46" r="4" fill="currentColor"/>
    <path d="M52 12L46 14L48 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CareerPreferenceIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="20" width="36" height="32" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
    <line x1="14" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="3"/>
    <circle cx="22" cy="40" r="2" fill="currentColor"/>
    <circle cx="32" cy="40" r="2" fill="currentColor"/>
    <circle cx="42" cy="40" r="2" fill="currentColor"/>
    <path d="M20 12L32 8L44 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CareerSectorIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
    <line x1="32" y1="12" x2="32" y2="52" stroke="currentColor" strokeWidth="3"/>
    <line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="3"/>
    <path d="M32 12C38 12 44 18 44 32C44 46 38 52 32 52" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M32 12C26 12 20 18 20 32C20 46 26 52 32 52" stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);

export const CareerSkillsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M32 10L38 28H56L42 39L47 56L32 45L17 56L22 39L8 28H26L32 10Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const CareerSTEMIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="28" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
    <ellipse cx="32" cy="28" rx="4" ry="10" stroke="currentColor" strokeWidth="2" fill="none"/>
    <line x1="22" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="2"/>
    <circle cx="20" cy="20" r="2" fill="currentColor"/>
    <circle cx="44" cy="20" r="2" fill="currentColor"/>
    <circle cx="20" cy="36" r="2" fill="currentColor"/>
    <circle cx="44" cy="36" r="2" fill="currentColor"/>
    <path d="M24 44L32 52L40 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CareerTechnologyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="16" width="44" height="32" rx="2" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="20" y="52" width="24" height="2" fill="currentColor"/>
    <line x1="32" y1="48" x2="32" y2="52" stroke="currentColor" strokeWidth="3"/>
    <rect x="16" y="54" width="32" height="2" rx="1" fill="currentColor"/>
    <path d="M20 28L26 34L38 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CareerTraitsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="24" r="10" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M16 52C16 42.0589 24.0589 34 34 34H34C43.9411 34 52 42.0589 52 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="26" cy="22" r="2" fill="currentColor"/>
    <circle cx="38" cy="22" r="2" fill="currentColor"/>
    <path d="M26 28C26 28 28 30 32 30C36 30 38 28 38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const CareerZoneIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="32" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="3" fill="currentColor"/>
    <line x1="32" y1="12" x2="32" y2="8" stroke="currentColor" strokeWidth="2"/>
    <line x1="32" y1="56" x2="32" y2="52" stroke="currentColor" strokeWidth="2"/>
    <line x1="52" y1="32" x2="56" y2="32" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="32" x2="12" y2="32" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const OccupationsIcon: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => (
  <svg viewBox="0 0 64 64" width={size} height={size} fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="40" rx="3" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="20" cy="24" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M14 32C14 30 16 28 20 28C24 28 26 30 26 32V40C26 42 24 44 20 44C16 44 14 42 14 40V32Z" stroke="currentColor" strokeWidth="3" fill="none"/>
    <circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="3" fill="none"/>
    <path d="M38 32C38 30 40 28 44 28C48 28 50 30 50 32V40C50 42 48 44 44 44C40 44 38 42 38 40V32Z" stroke="currentColor" strokeWidth="3" fill="none"/>
  </svg>
);
