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
    category: "Frontend Development",
    items: [
      { name: "React", years: 5 },
      { name: "TypeScript", years: 4 },
      { name: "Next.js", years: 3 },
      { name: "Tailwind CSS", years: 2 },
    ]
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", years: 6 },
      { name: "Python", years: 4 },
      { name: "PostgreSQL", years: 3 },
      { name: "GraphQL", years: 2 },
    ]
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git", years: 7 },
      { name: "Docker", years: 3 },
      { name: "AWS", years: 2 },
      { name: "CI/CD", years: 4 },
    ]
  }
];

// Maximum years to use as reference for the progress bar
const MAX_YEARS = 8;

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
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Expert</span>
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