import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Filter } from 'lucide-react';

interface Photo {
  id: number;
  year: number;
  category: string;
  title: string;
  description: string;
  url: string;
}

const photos: Photo[] = [
  {
    id: 1,
    year: 2023,
    category: 'Landscape',
    title: 'Mountain Vista',
    description: 'Captured during sunrise at the peak.',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
  },
  {
    id: 2,
    year: 2023,
    category: 'Portrait',
    title: 'Urban Light',
    description: 'Street photography in the city.',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
  },
  {
    id: 3,
    year: 2022,
    category: 'Nature',
    title: 'Forest Dreams',
    description: 'Mystical morning in the ancient woods.',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  },
];

const categories = ['All', 'Landscape', 'Portrait', 'Nature'];
const years = [2023, 2022];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredPhotos = photos.filter(photo => {
    const categoryMatch = selectedCategory === 'All' || photo.category === selectedCategory;
    const yearMatch = !selectedYear || photo.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  return (
    <div className="min-h-screen pt-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-space font-bold mb-6 text-cosmic-blue">
            Photography Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Capturing moments across the universe
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full px-4 py-2 bg-space-light/40 rounded-lg flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-colors"
          >
            <Filter size={20} />
            <span>Filter Gallery</span>
          </button>
        </div>

        {/* Mobile Filters Dropdown */}
        {isFilterOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mb-6 bg-space-light/20 backdrop-blur-lg rounded-lg p-4 border border-cosmic-blue/20"
          >
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-cosmic-blue text-white'
                          : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Years</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedYear(null)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      !selectedYear
                        ? 'bg-cosmic-blue text-white'
                        : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                    }`}
                  >
                    All Years
                  </button>
                  {years.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedYear === year
                          ? 'bg-cosmic-blue text-white'
                          : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Desktop Filters */}
        <div className="hidden md:flex mb-8 flex-wrap gap-4 justify-center">
          <div className="space-x-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-cosmic-blue text-white'
                    : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="space-x-2">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                !selectedYear
                  ? 'bg-cosmic-blue text-white'
                  : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
              }`}
            >
              All Years
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedYear === year
                    ? 'bg-cosmic-blue text-white'
                    : 'bg-space-light text-gray-300 hover:bg-cosmic-blue/20'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          layout
        >
          {filteredPhotos.map(photo => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="gallery-item group cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <h3 className="text-xl font-space font-bold text-white">{photo.title}</h3>
                  <p className="text-gray-200">{photo.category} - {photo.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 p-4 md:p-8 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-cosmic-blue transition-colors"
              onClick={() => setSelectedPhoto(null)}
            >
              <X size={32} />
            </button>
            <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <div className="relative aspect-video md:aspect-auto md:h-[80vh]">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-space font-bold text-white">{selectedPhoto.title}</h3>
                <p className="text-gray-300 mt-2">{selectedPhoto.description}</p>
                <p className="text-cosmic-blue mt-1">{selectedPhoto.category} - {selectedPhoto.year}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;