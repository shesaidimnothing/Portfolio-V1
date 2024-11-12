import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <section className="pt-32 pb-24 container mx-auto px-6 bg-gradient-to-b from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#242424]">
      <motion.div 
        className="flex flex-col items-center text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-7xl font-semibold mb-6 leading-tight dark:text-white">
          Hugo Pottier.<br/>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Developer.
          </span>
        </h1>
        <motion.p 
          className="text-2xl font-light mb-12 text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Hello, I'm a junior developer currently studying at EFREI Paris who wants to specialize in front-end development.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <SocialLinks />
        </motion.div>
        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a href="#projects" className="apple-button">
            View Projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 