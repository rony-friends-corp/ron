// Data Management Utilities for Portfolio Website
// This file provides utilities for managing portfolio data dynamically

/**
 * Validates portfolio data structure
 * @param {Object} data - Portfolio data object
 * @returns {Object} - Validation result with isValid boolean and errors array
 */
export const validatePortfolioData = (data) => {
  const errors = [];
  const requiredFields = [
    'personal_info',
    'skills',
    'tools',
    'work_history',
    'education',
    'certifications',
    'courses_trainings',
    'contacts'
  ];

  // Check for required top-level fields
  requiredFields.forEach(field => {
    if (!data[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Validate personal_info structure
  if (data.personal_info) {
    const personalInfoRequired = ['name', 'title', 'about'];
    personalInfoRequired.forEach(field => {
      if (!data.personal_info[field]) {
        errors.push(`Missing required personal_info field: ${field}`);
      }
    });
  }

  // Validate work_history structure
  if (data.work_history && Array.isArray(data.work_history)) {
    data.work_history.forEach((job, index) => {
      const jobRequired = ['company_name', 'designation', 'duration'];
      jobRequired.forEach(field => {
        if (!job[field]) {
          errors.push(`Missing required work_history[${index}] field: ${field}`);
        }
      });
    });
  }

  // Validate education structure
  if (data.education && Array.isArray(data.education)) {
    data.education.forEach((edu, index) => {
      const eduRequired = ['degree', 'duration'];
      eduRequired.forEach(field => {
        if (!edu[field]) {
          errors.push(`Missing required education[${index}] field: ${field}`);
        }
      });
    });
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Formats data for display
 * @param {Object} data - Raw portfolio data
 * @returns {Object} - Formatted data ready for display
 */
export const formatPortfolioData = (data) => {
  const formatted = { ...data };

  // Ensure arrays exist even if empty
  formatted.skills = formatted.skills || {};
  formatted.skills.sqa_skills = formatted.skills.sqa_skills || [];
  formatted.skills.technical_skills = formatted.skills.technical_skills || [];
  formatted.skills.concepts = formatted.skills.concepts || [];
  formatted.tools = formatted.tools || [];
  formatted.work_history = formatted.work_history || [];
  formatted.education = formatted.education || [];
  formatted.certifications = formatted.certifications || [];
  formatted.courses_trainings = formatted.courses_trainings || [];

  // Add default values for missing optional fields
  if (formatted.personal_info) {
    formatted.personal_info.tagline = formatted.personal_info.tagline || 
      'Passionate about delivering quality software solutions';
    formatted.personal_info.hero_description = formatted.personal_info.hero_description || 
      formatted.personal_info.about;
  }

  return formatted;
};

/**
 * Generates a template for new portfolio data
 * @returns {Object} - Template portfolio data structure
 */
export const generatePortfolioTemplate = () => {
  return {
    personal_info: {
      name: "Your Name",
      title: "Your Professional Title",
      about: "Brief description about yourself and your expertise",
      image: "path/to/your/image.jpg",
      logo: "path/to/your/logo.jpg",
      resume: "path/to/your/resume.pdf",
      total_experience: "X years",
      tagline: "Your professional tagline",
      hero_description: "Detailed description for hero section"
    },
    skills: {
      sqa_skills: [
        "Manual testing",
        "Automated testing",
        // Add more skills
      ],
      concepts: [
        "SDLC",
        "STLC",
        // Add more concepts
      ],
      technical_skills: [
        "HTML",
        "CSS",
        // Add more technical skills
      ]
    },
    tools: [
      "Tool 1",
      "Tool 2",
      // Add more tools
    ],
    work_history: [
      {
        company_name: "Company Name",
        website: "https://company-website.com",
        duration: "Start Date - End Date",
        location: "City, Country",
        job_type: "Remote/On-site",
        employment_type: "Full-time/Part-time",
        designation: "Your Job Title",
        responsibilities: [
          "Responsibility 1",
          "Responsibility 2",
          // Add more responsibilities
        ]
      }
    ],
    education: [
      {
        degree: "Degree Name",
        major: "Major/Field of Study",
        university: "University Name",
        location: "City, Country",
        duration: "Start Year - End Year",
        cgpa: "X.XX/X.XX"
      }
    ],
    certifications: [
      {
        name: "Certification Name",
        url: "https://certificate-url.com",
        vendor: "Certification Provider",
        year: "Year"
      }
    ],
    courses_trainings: [
      {
        name: "Course Name",
        platform: "Platform Name",
        year: "Year",
        topics: "Topics covered in the course"
      }
    ],
    contacts: {
      phone: "+1234567890",
      website: "https://your-website.com",
      location: "Your Location",
      facebook: "https://facebook.com/yourprofile",
      linkedin: "https://linkedin.com/in/yourprofile",
      instagram: "https://instagram.com/yourprofile",
      github: "https://github.com/yourprofile",
      email: "your.email@example.com"
    }
  };
};

/**
 * Safely loads portfolio data with error handling
 * @param {Object} data - Portfolio data to load
 * @returns {Object} - Safely loaded and formatted data
 */
export const safeLoadPortfolioData = (data) => {
  try {
    const validation = validatePortfolioData(data);
    
    if (!validation.isValid) {
      console.warn('Portfolio data validation warnings:', validation.errors);
      // Continue with available data, filling in defaults where needed
    }
    
    return formatPortfolioData(data);
  } catch (error) {
    console.error('Error loading portfolio data:', error);
    // Return template data as fallback
    return generatePortfolioTemplate();
  }
};

/**
 * Utility to check if data has been updated
 * @param {Object} oldData - Previous data
 * @param {Object} newData - New data
 * @returns {boolean} - True if data has changed
 */
export const hasDataChanged = (oldData, newData) => {
  return JSON.stringify(oldData) !== JSON.stringify(newData);
};

/**
 * Utility to backup current data
 * @param {Object} data - Data to backup
 * @returns {string} - Backup data as JSON string
 */
export const backupData = (data) => {
  const backup = {
    data,
    timestamp: new Date().toISOString(),
    version: '1.0'
  };
  return JSON.stringify(backup, null, 2);
};

/**
 * Utility to restore data from backup
 * @param {string} backupString - Backup data as JSON string
 * @returns {Object} - Restored data
 */
export const restoreFromBackup = (backupString) => {
  try {
    const backup = JSON.parse(backupString);
    return backup.data;
  } catch (error) {
    console.error('Error restoring from backup:', error);
    return null;
  }
};

