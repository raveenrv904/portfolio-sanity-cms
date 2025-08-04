export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  title: string
  description: string
  author: string
  email: string
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
  seo: {
    metaTitle: string
    metaDescription: string
    ogImage?: any
  }
}

export interface Project {
  _id: string
  _type: 'project'
  title: string
  slug: {current: string}
  description: string
  longDescription: any[]
  featuredImage: any
  gallery?: any[]
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  status: 'planning' | 'development' | 'completed' | 'archived'
  featured: boolean
  publishedAt: string
  order?: number
}

export interface AgencyProject {
  _id: string
  _type: 'agencyProject'
  title: string
  slug: {current: string}
  description: string
  longDescription: any[]
  featuredImage: any
  gallery?: any[]
  technologies: string[]
  projectType: 'web-app' | 'mobile-app' | 'e-commerce' | 'landing-page' | 'other'
  clientIndustry: string
  projectDuration: string
  teamSize: number
  myRole: string
  featured: boolean
  publishedAt: string
  order?: number
}

export interface Experience {
  _id: string
  _type: 'experience'
  company: string
  position: string
  description: any[]
  startDate: string
  endDate?: string
  current: boolean
  location: string
  employmentType: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
  technologies: string[]
  achievements?: string[]
  companyLogo?: any
  order?: number
}

export interface Education {
  _id: string
  _type: 'education'
  institution: string
  degree: string
  field: string
  description?: any[]
  startDate: string
  endDate?: string
  current: boolean
  location: string
  gpa?: string
  achievements?: string[]
  institutionLogo?: any
  order?: number
}

export interface Skill {
  _id: string
  _type: 'skill'
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other'
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  yearsOfExperience: number
  description?: string
  icon?: any
  relatedProjects?: string[]
  relatedExperience?: string[]
  featured: boolean
  order?: number
}

export interface LearningEntry {
  _id: string
  _type: 'learningEntry'
  title: string
  slug: {current: string}
  content: any[]
  category: 'tutorial' | 'article' | 'course' | 'book' | 'video' | 'podcast' | 'other'
  tags: string[]
  source?: string
  sourceUrl?: string
  completedAt: string
  rating?: number
  notes?: any[]
  featured: boolean
  order?: number
}
