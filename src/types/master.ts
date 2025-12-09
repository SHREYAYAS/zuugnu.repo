// Master Table Types and Interfaces

export interface MasterTable {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  category?: string;
  columns: Column[];
}

export interface Column {
  key: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'date' | 'email' | 'phone' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  width?: string;
}

export interface TableRow {
  [key: string]: any;
  id?: number;
  action?: string;
}

export interface MasterTableConfig {
  [key: string]: MasterTable;
}

// Country Master
export const MAST_COUNTRY: MasterTable = {
  id: 'mast_country',
  name: 'mast_country',
  displayName: 'Master > Country',
  icon: '🌍',
  category: 'Geographic Data',
  columns: [
    { key: 'country_code', label: 'Country Code', type: 'text', required: true, placeholder: '2 chars' },
    { key: 'country', label: 'Country', type: 'text', required: true },
    { key: 'ISO3', label: 'ISO3', type: 'text', placeholder: '3 chars' },
    { key: 'ISD', label: 'ISD', type: 'text' },
    { key: 'flag', label: 'Flag', type: 'text' },
    { key: 'advisor', label: 'Advisor', type: 'number' },
  ],
};

// Region Master
export const MAST_REGION: MasterTable = {
  id: 'mast_region',
  name: 'mast_region',
  displayName: 'Master > Region',
  icon: '🗺️',
  category: 'Geographic Data',
  columns: [
    { key: 'country_code', label: 'Country', type: 'select', required: true },
    { key: 'region_code', label: 'Region Code', type: 'text', required: true },
    { key: 'region', label: 'Region', type: 'text', required: true },
    { key: 'advisor', label: 'Advisor', type: 'number' },
  ],
};

// State Master
export const MAST_STATE: MasterTable = {
  id: 'mast_state',
  name: 'mast_state',
  displayName: 'Master > State',
  icon: '📌',
  category: 'Geographic Data',
  columns: [
    { key: 'country_code', label: 'Country', type: 'select', required: true },
    { key: 'region', label: 'Region', type: 'select', required: true },
    { key: 'state_code', label: 'State Code', type: 'text', required: true },
    { key: 'state', label: 'State', type: 'text', required: true },
    { key: 'advisor', label: 'Advisor', type: 'number' },
  ],
};

// District Master
export const MAST_DISTRICT: MasterTable = {
  id: 'mast_district',
  name: 'mast_district',
  displayName: 'Master > District',
  icon: '🎯',
  category: 'Geographic Data',
  columns: [
    { key: 'country_code', label: 'Country Code', type: 'text', required: true },
    { key: 'state_code', label: 'State Code', type: 'text', required: true },
    { key: 'district', label: 'District', type: 'text', required: true },
    { key: 'advisor', label: 'Advisor', type: 'number' },
  ],
};

// Task Master
export const MAST_TASK: MasterTable = {
  id: 'mast_task',
  name: 'mast_task',
  displayName: 'Master > Task',
  icon: '📋',
  category: 'Master Data',
  columns: [
    { key: 'task', label: 'Task', type: 'text', required: true },
    { key: 'euser', label: 'User', type: 'number', required: true },
  ],
};

// Ability Master
export const MAST_ABILITY: MasterTable = {
  id: 'mast_ability',
  name: 'mast_ability',
  displayName: 'Master > Ability',
  icon: '💪',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Activity Master
export const MAST_ACTIVITY: MasterTable = {
  id: 'mast_activity',
  name: 'mast_activity',
  displayName: 'Master > Activity',
  icon: '⚡',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Aptitude Master
export const MAST_APTITUDE: MasterTable = {
  id: 'mast_aptitude',
  name: 'mast_aptitude',
  displayName: 'Master > Aptitude',
  icon: '🧠',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
    { key: 'aptid', label: 'Aptitude ID', type: 'text' },
  ],
};

// Attitude Master
export const MAST_ATTITUDE: MasterTable = {
  id: 'mast_attitude',
  name: 'mast_attitude',
  displayName: 'Master > Attitude',
  icon: '😊',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
    { key: 'attid', label: 'Attitude ID', type: 'text' },
  ],
};

// Career Choice Master
export const MAST_CAREER_CHOICE: MasterTable = {
  id: 'mast_career_choice',
  name: 'mast_career_choice',
  displayName: 'Master > Career Choice',
  icon: '🎯',
  category: 'Master Data',
  columns: [
    { key: 'career_choice', label: 'Career Choice', type: 'text', required: true },
    { key: 'career_mast', label: 'Career Master', type: 'text' },
  ],
};

// Contact Master
export const MAST_CONTACT: MasterTable = {
  id: 'mast_contact',
  name: 'mast_contact',
  displayName: 'Master > Contact',
  icon: '📞',
  category: 'Master Data',
  columns: [
    { key: 'contact', label: 'Contact', type: 'text', required: true },
    { key: 'contact_type', label: 'Contact Type', type: 'text', required: true },
  ],
};

// Data Master
export const MAST_DATA: MasterTable = {
  id: 'mast_data',
  name: 'mast_data',
  displayName: 'Master > Data',
  icon: '💾',
  category: 'Master Data',
  columns: [
    { key: 'datatype', label: 'Data Type', type: 'text', required: true },
    { key: 'data', label: 'Data', type: 'text', required: true },
  ],
};

// Industry Master
export const MAST_INDUSTRY: MasterTable = {
  id: 'mast_industry',
  name: 'mast_industry',
  displayName: 'Master > Industry',
  icon: '🏭',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Knowledge Master
export const MAST_KNOWLEDGE: MasterTable = {
  id: 'mast_knowledge',
  name: 'mast_knowledge',
  displayName: 'Master > Knowledge',
  icon: '📚',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Language Master
export const MAST_LANGUAGE: MasterTable = {
  id: 'mast_language',
  name: 'mast_language',
  displayName: 'Master > Language',
  icon: '🌐',
  category: 'Master Data',
  columns: [
    { key: 'language', label: 'Language', type: 'text', required: true },
  ],
};

// Lead Type Master
export const MAST_LEADTYPE: MasterTable = {
  id: 'mast_leadtype',
  name: 'mast_leadtype',
  displayName: 'Master > Lead Type',
  icon: '🔥',
  category: 'Master Data',
  columns: [
    { key: 'leadtype', label: 'Lead Type', type: 'text', required: true },
    { key: 'color', label: 'Color', type: 'text' },
    { key: 'descript', label: 'Description', type: 'textarea' },
  ],
};

// Outlook Master
export const MAST_OUTLOOK: MasterTable = {
  id: 'mast_outlook',
  name: 'mast_outlook',
  displayName: 'Master > Outlook',
  icon: '🔮',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Pathway Master
export const MAST_PATHWAY: MasterTable = {
  id: 'mast_pathway',
  name: 'mast_pathway',
  displayName: 'Master > Pathway',
  icon: '🛤️',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Pin Code Master
export const MAST_PINCODE: MasterTable = {
  id: 'mast_pincode',
  name: 'mast_pincode',
  displayName: 'Master > Pin Code',
  icon: '📮',
  category: 'Geographic Data',
  columns: [
    { key: 'pincode', label: 'Pin Code', type: 'text', required: true },
    { key: 'postoffice', label: 'Post Office', type: 'text' },
    { key: 'district', label: 'District', type: 'text' },
    { key: 'state', label: 'State', type: 'text' },
    { key: 'country_code', label: 'Country Code', type: 'text' },
    { key: 'advisor', label: 'Advisor', type: 'number' },
  ],
};

// Place Master
export const MAST_PLACE: MasterTable = {
  id: 'mast_place',
  name: 'mast_place',
  displayName: 'Master > Place',
  icon: '📍',
  category: 'Geographic Data',
  columns: [
    { key: 'country_code', label: 'Country', type: 'select', required: true },
    { key: 'stateid', label: 'State ID', type: 'number' },
    { key: 'districtid', label: 'District ID', type: 'number' },
    { key: 'pincode', label: 'Pin Code', type: 'text' },
    { key: 'place', label: 'Place', type: 'text', required: true },
    { key: 'advisor', label: 'Advisor', type: 'number' },
  ],
};

// Preference Master
export const MAST_PREFERENCE: MasterTable = {
  id: 'mast_preference',
  name: 'mast_preference',
  displayName: 'Master > Preference',
  icon: '⭐',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Sector Master
export const MAST_SECTOR: MasterTable = {
  id: 'mast_sector',
  name: 'mast_sector',
  displayName: 'Master > Sector',
  icon: '📊',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Skills Master
export const MAST_SKILLS: MasterTable = {
  id: 'mast_skills',
  name: 'mast_skills',
  displayName: 'Master > Skills',
  icon: '✓',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Status Master
export const MAST_STATUS: MasterTable = {
  id: 'mast_status',
  name: 'mast_status',
  displayName: 'Master > Status',
  icon: '📋',
  category: 'Master Data',
  columns: [
    { key: 'status', label: 'Status', type: 'text', required: true },
  ],
};

// STEM Master
export const MAST_STEM: MasterTable = {
  id: 'mast_stem',
  name: 'mast_stem',
  displayName: 'Master > STEM',
  icon: '🔬',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Technology Master
export const MAST_TECHNOLOGY: MasterTable = {
  id: 'mast_technology',
  name: 'mast_technology',
  displayName: 'Master > Technology',
  icon: '💻',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Tools Master
export const MAST_TOOLS: MasterTable = {
  id: 'mast_tools',
  name: 'mast_tools',
  displayName: 'Master > Tools',
  icon: '🔧',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Trait Master
export const MAST_TRAIT: MasterTable = {
  id: 'mast_trait',
  name: 'mast_trait',
  displayName: 'Master > Trait',
  icon: '😊',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// Zone Master
export const MAST_ZONE: MasterTable = {
  id: 'mast_zone',
  name: 'mast_zone',
  displayName: 'Master > Zone',
  icon: '🌐',
  category: 'Master Data',
  columns: [
    { key: 'option', label: 'Option', type: 'text', required: true },
  ],
};

// User Master
export const MAST_USER: MasterTable = {
  id: 'mast_user',
  name: 'mast_user',
  displayName: 'Master > User',
  icon: '👥',
  category: 'User Management',
  columns: [
    { key: 'whatsapp', label: 'WhatsApp', type: 'phone' },
    { key: 'name', label: 'Name', type: 'text', required: true },
    { key: 'pass', label: 'Password', type: 'text', required: true },
    { key: 'veridtype', label: 'Verification Type', type: 'text' },
    { key: 'verid', label: 'Verification ID', type: 'text' },
    { key: 'mobile', label: 'Mobile', type: 'phone', required: true },
    { key: 'email', label: 'Email', type: 'email', required: true },
    { key: 'pic_url', label: 'Picture URL', type: 'text' },
    { key: 'gender', label: 'Gender', type: 'select', options: [
      { value: 'M', label: 'Male' },
      { value: 'F', label: 'Female' },
      { value: 'O', label: 'Other' }
    ]},
    { key: 'dob', label: 'Date of Birth', type: 'date' },
    { key: 'langid', label: 'Language', type: 'select' },
    { key: 'refercode', label: 'Referral Code', type: 'text' },
    { key: 'referby', label: 'Referred By', type: 'number' },
    { key: 'advisor', label: 'Advisor', type: 'number' },
    { key: 'active', label: 'Active', type: 'select', options: [
      { value: '1', label: 'Yes' },
      { value: '0', label: 'No' }
    ]},
    { key: 'deactive', label: 'Deactive Reason', type: 'text' },
    { key: 'deleted', label: 'Deleted', type: 'select', options: [
      { value: '0', label: 'No' },
      { value: '1', label: 'Yes' }
    ]},
  ],
};

// User Template Master
export const MAST_USER_TEMPLATE: MasterTable = {
  id: 'mast_user_template',
  name: 'mast_user_template',
  displayName: 'Master > User Template',
  icon: '📄',
  category: 'User Management',
  columns: [
    { key: 'temptype', label: 'Template Type', type: 'text', required: true },
    { key: 'template', label: 'Template', type: 'text', required: true },
    { key: 'subject', label: 'Subject', type: 'text' },
    { key: 'matter', label: 'Matter', type: 'textarea' },
    { key: 'bimg_url', label: 'Image URL', type: 'text' },
    { key: 'deleted', label: 'Deleted', type: 'select' },
  ],
};

// All Masters Configuration
export const ALL_MASTERS: MasterTableConfig = {
  mast_country: MAST_COUNTRY,
  mast_region: MAST_REGION,
  mast_state: MAST_STATE,
  mast_district: MAST_DISTRICT,
  mast_task: MAST_TASK,
  mast_ability: MAST_ABILITY,
  mast_activity: MAST_ACTIVITY,
  mast_aptitude: MAST_APTITUDE,
  mast_attitude: MAST_ATTITUDE,
  mast_career_choice: MAST_CAREER_CHOICE,
  mast_contact: MAST_CONTACT,
  mast_data: MAST_DATA,
  mast_industry: MAST_INDUSTRY,
  mast_knowledge: MAST_KNOWLEDGE,
  mast_language: MAST_LANGUAGE,
  mast_leadtype: MAST_LEADTYPE,
  mast_outlook: MAST_OUTLOOK,
  mast_pathway: MAST_PATHWAY,
  mast_pincode: MAST_PINCODE,
  mast_place: MAST_PLACE,
  mast_preference: MAST_PREFERENCE,
  mast_sector: MAST_SECTOR,
  mast_skills: MAST_SKILLS,
  mast_status: MAST_STATUS,
  mast_stem: MAST_STEM,
  mast_technology: MAST_TECHNOLOGY,
  mast_tools: MAST_TOOLS,
  mast_trait: MAST_TRAIT,
  mast_zone: MAST_ZONE,
  mast_user: MAST_USER,
  mast_user_template: MAST_USER_TEMPLATE,
};

export const MASTER_TABLES_LIST = Object.values(ALL_MASTERS);
