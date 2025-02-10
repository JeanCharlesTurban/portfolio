import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  BarChart, 
  Globe, 
  Building, 
  Cpu, 
  GraduationCap, 
  Database, 
  Users, 
  Rocket, 
  Handshake, 
  TrendingUp 
} from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const events = [
  {
    year: '2016',
    title: 'Started at Cornell',
    description: 'Began undergraduate studies in Mechanical Engineering at Cornell University.',
  },
  {
    year: '2017',
    title: 'Founded Titan Analytics',
    description: 'Launched a sports analytics startup focused on extracting football data from video using ML.',
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    year: '2018',
    title: 'Studied at Cambridge',
    description: 'Completed a summer semester covering sustainable energy, jet propulsion, and quantum mechanics.',
    icon: <Globe className="w-6 h-6" />,
  },
  {
    year: '2018',
    title: 'Joined Cornell EHub',
    description: 'Retrofitted building technology and supported student startups at Cornell’s entrepreneurship hub.',
    icon: <Building className="w-6 h-6" />,
  },
  {
    year: '2019',
    title: 'Worked at VICIS',
    description: 'Developed AI-powered player fitting technology, reducing fitting time by 67%.',
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    year: '2020',
    title: 'Graduated from Cornell',
    description: 'Completed B.S. in Mechanical Engineering and M.Eng. in Systems Engineering.',
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    year: '2021',
    title: 'Joined StartupTree',
    description: 'Led data analytics and reporting for university entrepreneurship centers, securing $5M in funding.',
    icon: <Database className="w-6 h-6" />,
  },
  {
    year: '2022',
    title: 'Co-Founded StartupTree',
    description: 'Scaled the engineering team, secured a $750K Blackstone partnership, and boosted engagement by 43%.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    year: '2023',
    title: 'Co-Founded Talentpath',
    description: 'Built the company from zero to $384K ARR, scaling an engineering team to 15 and delivering 12+ MVPs.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    year: '2023',
    title: 'Executive Director at Life Changing Labs',
    description: 'Raised $140K in funding and helped startups raise $3M while scaling to 200K+ users.',
    icon: <Handshake className="w-6 h-6" />,
  },
  {
    year: '2024',
    title: 'Expanded Talentpath',
    description: 'Led Talentpath’s business growth, launching new initiatives to expand its services.',
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

function Timeline() {
  return (
    <div className="min-h-screen pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 text-cosmic-blue">
            My Jean Turban
          </h1>
          <p className="text-xl text-gray-300">
            A timeline of my adventures through the tech universe
          </p>
        </motion.div>

        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-blue" />

          <div className="relative">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative mb-12 md:mb-24"
              >
                {/* Mobile Layout */}
                <div className="block md:hidden">
                  <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-space-light border-4 border-cosmic-blue flex items-center justify-center flex-shrink-0">
                        <div className="text-cosmic-blue">
                          {event.icon}
                        </div>
                      </div>
                      <div className="text-cosmic-blue font-space text-xl">{event.year}</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block">
                  {index === 0 ? (
                    // First block (centered)
                    <div className="flex justify-center">
                      <div className="w-6/12 mx-8">
                        <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
                          <div className="text-cosmic-blue font-space text-xl mb-2">{event.year}</div>
                          <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                          <p className="text-gray-300">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Alternating blocks
                    <div className="flex justify-between">
                      {index % 2 === 1 ? (
                        // Left block
                        <>
                          <div className="w-5/12">
                            <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
                              <div className="text-cosmic-blue font-space text-xl mb-2">{event.year}</div>
                              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                              <p className="text-gray-300">{event.description}</p>
                            </div>
                          </div>
                          <div className="w-5/12" />
                        </>
                      ) : (
                        // Right block
                        <>
                          <div className="w-5/12" />
                          <div className="w-5/12">
                            <div className="bg-space-light/20 backdrop-blur-lg rounded-lg p-6 border border-cosmic-blue/20">
                              <div className="text-cosmic-blue font-space text-xl mb-2">{event.year}</div>
                              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                              <p className="text-gray-300">{event.description}</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* Center Icon - Desktop only */}
                  
                    {index !== 0 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -mt-6 w-12 h-12 rounded-full bg-space-light border-4 border-cosmic-blue flex items-center justify-center">
                      <div className="text-cosmic-blue">
                      {event.icon}
                      </div>
                    </div>
                    )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;