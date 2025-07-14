# Portfolio Data Update Guide

This guide explains how to easily update your portfolio content without any coding knowledge.

## 📁 Where to Find Your Data

Your portfolio data is stored in a single JSON file:
```
src/data/portfolio.json
```

This file contains all your personal information, work experience, skills, education, and contact details.

## 🔧 How to Update Your Portfolio

### Step 1: Open the Data File
1. Navigate to `src/data/portfolio.json`
2. Open the file in any text editor (Notepad, VS Code, etc.)

### Step 2: Edit Your Information
The file is organized into sections. Here's what each section contains:

#### Personal Information (`personal_info`)
```json
{
  "personal_info": {
    "name": "Your Full Name",
    "title": "Your Job Title",
    "about": "Brief description about yourself",
    "image": "URL to your profile photo",
    "logo": "URL to your logo/avatar",
    "resume": "URL to your resume PDF",
    "total_experience": "X years",
    "tagline": "Your professional tagline",
    "hero_description": "Detailed description for the main section"
  }
}
```

#### Skills (`skills`)
```json
{
  "skills": {
    "sqa_skills": ["Manual testing", "Automated testing", ...],
    "concepts": ["SDLC", "STLC", "Agile", ...],
    "technical_skills": ["HTML", "CSS", "JavaScript", ...]
  }
}
```

#### Tools (`tools`)
```json
{
  "tools": ["Selenium", "TestNG", "JMeter", ...]
}
```

#### Work Experience (`work_history`)
```json
{
  "work_history": [
    {
      "company_name": "Company Name",
      "website": "https://company-website.com",
      "duration": "Start Date - End Date",
      "location": "City, Country",
      "job_type": "Remote/On-site",
      "employment_type": "Full-time/Part-time",
      "designation": "Your Job Title",
      "responsibilities": [
        "Responsibility 1",
        "Responsibility 2"
      ]
    }
  ]
}
```

#### Education (`education`)
```json
{
  "education": [
    {
      "degree": "Bachelor Degree",
      "major": "Your Major",
      "university": "University Name",
      "location": "City, Country",
      "duration": "2018-2023",
      "cgpa": "3.27/4.00"
    }
  ]
}
```

#### Certifications (`certifications`)
```json
{
  "certifications": [
    {
      "name": "Certification Name",
      "url": "https://certificate-link.com",
      "vendor": "Certification Provider",
      "year": "2024"
    }
  ]
}
```

#### Contact Information (`contacts`)
```json
{
  "contacts": {
    "phone": "+1234567890",
    "website": "https://your-website.com",
    "location": "Your City, Country",
    "facebook": "https://facebook.com/yourprofile",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "instagram": "https://instagram.com/yourprofile",
    "github": "https://github.com/yourprofile",
    "email": "your.email@example.com"
  }
}
```

### Step 3: Save and Test
1. Save the `portfolio.json` file
2. If your development server is running, the changes will appear automatically
3. If not, restart the development server with `pnpm run dev`

## ✅ Important Tips

### 1. JSON Format Rules
- Always use double quotes (`"`) around text, never single quotes (`'`)
- Don't forget commas (`,`) between items in lists
- Don't add a comma after the last item in a list
- Use square brackets `[]` for lists
- Use curly brackets `{}` for objects

### 2. Adding New Items

#### To add a new job:
```json
{
  "company_name": "New Company",
  "website": "https://newcompany.com",
  "duration": "Jan 2025 - Present",
  "location": "City, Country",
  "job_type": "Remote",
  "employment_type": "Full-time",
  "designation": "Senior SQA Engineer",
  "responsibilities": [
    "New responsibility 1",
    "New responsibility 2"
  ]
}
```

#### To add a new skill:
Simply add it to the appropriate skills array:
```json
"sqa_skills": ["Manual testing", "Automated testing", "NEW SKILL HERE"]
```

#### To add a new certification:
```json
{
  "name": "New Certification",
  "url": "https://certificate-url.com",
  "vendor": "Provider Name",
  "year": "2025"
}
```

### 3. Removing Items
- To remove a skill: Delete it from the array
- To remove a job: Delete the entire job object
- To remove a certification: Delete the entire certification object

### 4. Updating Images
- Replace the URL in the `image` field with your new photo URL
- Make sure the image is accessible online
- Recommended image size: 400x400 pixels for profile photos

### 5. Updating Resume
- Upload your new resume to a cloud service (Google Drive, Dropbox, etc.)
- Make sure the link is publicly accessible
- Update the `resume` field with the new URL

## 🚨 Common Mistakes to Avoid

1. **Missing Quotes**: Always wrap text in double quotes
   ```json
   ❌ name: John Doe
   ✅ "name": "John Doe"
   ```

2. **Extra Commas**: Don't add commas after the last item
   ```json
   ❌ ["skill1", "skill2", "skill3",]
   ✅ ["skill1", "skill2", "skill3"]
   ```

3. **Missing Commas**: Add commas between items
   ```json
   ❌ ["skill1" "skill2" "skill3"]
   ✅ ["skill1", "skill2", "skill3"]
   ```

4. **Broken URLs**: Make sure all URLs are complete and accessible
   ```json
   ❌ "website": "company.com"
   ✅ "website": "https://company.com"
   ```

## 🔍 Validating Your Changes

After making changes, you can validate your JSON:
1. Copy your JSON content
2. Go to https://jsonlint.com/
3. Paste your content and click "Validate JSON"
4. Fix any errors shown

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Validate your JSON using the tool mentioned above
3. Compare your changes with the original working file
4. Make sure all URLs are accessible

## 🔄 Backup Your Data

Before making major changes:
1. Copy the entire `portfolio.json` file
2. Save it as `portfolio-backup.json`
3. This way you can restore if something goes wrong

## 🎨 Customization Tips

- Keep descriptions concise but informative
- Use action words in your responsibilities
- Update your experience regularly
- Keep your skills list current
- Ensure all links work properly
- Use professional language throughout

Your portfolio will automatically update when you save the JSON file!

