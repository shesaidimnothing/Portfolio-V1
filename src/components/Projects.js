import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../script/ProjectModal';

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Projet 1",
      type: "Web App",
      category: "Personnel",
      image: "/images/projet1.jpg"
    },
    {
      title: "Projet 2",
      type: "Site Web",
      category: "Client",
      image: "/images/projet2.jpg"
    },
    {
      title: "Projet 3",
      type: "Application",
      category: "Personnel",
      image: "/images/projet3.jpg"
    },
    {
      title: "Projet 4",
      type: "Web App",
      category: "Client",
      image: "/images/projet4.jpg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#4B6BFB] mb-2">projects</h2>
          <p className="text-gray-500 mb-12">projects, from personal and clients</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-500">{project.type}</span>
                  <span className="text-gray-500">{project.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {projects.length > 3 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 mb-0"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              see more
            </motion.button>
          </motion.div>
        )}

        <ProjectModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          projects={projects}
        />
      </div>
    </section>
  );
};

export default Projects;