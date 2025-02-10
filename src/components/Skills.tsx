import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  category: string;
  items: {
    name: string;
    years: number;
  }[];
}

const skills: Skill[] = [
  {
    "category": "Programming Languages",
    "items": [
      { "name": "JavaScript", "years": 9 },
      { "name": "Python", "years": 13 },
      { "name": "Matlab", "years": 2 },
      { "name": "VBA", "years": 3 },
      { "name": "PHP", "years": 1 },
      { "name": "TypeScript", "years": 2 }
    ]
  },
  {
    "category": "Machine Learning & AI",
    "items": [
      { "name": "OpenAI, Anthropic", "years": 2 },
      { "name": "Scikit Learn", "years": 8 },
      { "name": "Genetic Algorithms", "years": 5 },
      { "name": "Neural Networks", "years": 3 },
      { "name": "Perceptrons", "years": 7 },
      { "name": "LLM Fine Tuning", "years": 2 },
      { "name": "Clustering", "years": 6 },
      { "name": "Decision Trees", "years": 8 },
      { "name": "LangChain, LangGraph", "years": 2 },
      { "name": "Vector Databases", "years": 3 },
      { "name": "Semantic Search", "years": 2 }
    ]
  },
  {
    "category": "Database",
    "items": [
      { "name": "PostgreSQL, SQL", "years": 8 },
      { "name": "Supabase", "years": 2 },
      { "name": "Redis", "years": 4 }
    ]
  },
  {
    "category": "Backend Development",
    "items": [
      { "name": "Django", "years": 5 },
      { "name": "Supabase", "years": 2 },
      { "name": "Node.js", "years": 1 },
      { "name": "Express.js", "years": 1 }
    ]
  },
  {
    "category": "Frontend Development",
    "items": [
      { "name": "HTML", "years": 9 },
      { "name": "CSS", "years": 9 },
      { "name": "JavaScript", "years": 9 },
      { "name": "React", "years": 1 },
      { "name": "FlutterFlow", "years": 1 }
    ]
  },
  {
    "category": "DevOps",
    "items": [
      { "name": "AWS", "years": 8 },
      { "name": "Azure", "years": 2 },
      { "name": "GCP", "years": 4 },
      { "name": "Docker", "years": 5 }
    ]
  },
  {
    "category": "Technical Tools",
    "items": [
      { "name": "Google Sheets", "years": 9 },
      { "name": "Looker Studio", "years": 8 },
      { "name": "Power BI", "years": 7 },
      { "name": "Tableau", "years": 2 },
      { "name": "Jira", "years": 6 },
      { "name": "GitHub", "years": 9 },
      { "name": "Linear", "years": 3 },
      { "name": "HubSpot", "years": 2 },
      { "name": "Mailchimp", "years": 6 },
      { "name": "Google Analytics", "years": 9 },
      { "name": "Photoshop", "years": 2 },
      { "name": "Illustrator", "years": 2 },
      { "name": "Premiere Pro", "years": 1 },
      { "name": "Firefly", "years": 2 },
      { "name": "Cloud Compare", "years": 1 },
      { "name": "Retool", "years": 1 },
      { "name": "Streamlit", "years": 5 },
      { "name": "Stripe", "years": 2 }
    ]
  }
];

// Maximum years to use as reference for the progress bar
const MAX_YEARS = 10;

function Skills() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 text-cosmic-blue">
            Skills & Experience
          </h1>
          <p className="text-xl text-gray-300">
            Years of hands-on experience across different technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20"
            >
              <h2 className="text-2xl font-space font-bold mb-6 text-cosmic-blue">
                {skillCategory.category}
              </h2>
              <div className="space-y-6">
                {skillCategory.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.years} {skill.years === 1 ? 'year' : 'years'}</span>
                    </div>
                    <div className="h-2 bg-space-light rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-cosmic-blue"
                        initial={{ width: 0 }}
                        animate={{ width: `${(skill.years / MAX_YEARS) * 100}%` }}
                        transition={{ delay: (categoryIndex * 0.2) + (index * 0.1), duration: 1 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Recently</span>
                      <span>Last Few Years</span>
                      <span>All my life</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-center text-sm text-gray-400"
        >
          * Experience shown represents years of professional and project work
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;