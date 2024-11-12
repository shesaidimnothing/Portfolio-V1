import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const About = () => {
  const education = [
    { year: '2023', title: 'Baccalaureat' },
    { year: '2024-2025', title: 'BTS SIO SLAM - EFREI' }
  ];

  const topSkills = [
    { name: 'Git', icon: 'simple-icons:git', url: 'https://git-scm.com/' },
    { name: 'React', icon: 'simple-icons:react', url: 'https://reactjs.org/' },
    { name: 'Next.js', icon: 'simple-icons:nextdotjs', url: 'https://nextjs.org/' },
    { name: 'JavaScript', icon: 'simple-icons:javascript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
    { name: 'TypeScript', icon: 'simple-icons:typescript', url: 'https://www.typescriptlang.org/' },
    { name: 'PHP', icon: 'simple-icons:php', url: 'https://www.php.net/' }
  ];

  const bottomSkills = [
    { name: 'BootStrap', icon: 'simple-icons:bootstrap', url: 'https://getbootstrap.com/' },
    { name: 'Sass', icon: 'simple-icons:sass', url: 'https://sass-lang.com/' }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#242424]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">about</h2>
          <p className="section-subtitle">discover my education and skills</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
          {education.map((item, index) => (
            <motion.div 
              key={item.year} 
              className="text-center px-8 py-4 rounded-full bg-white dark:bg-[#242424] hover:scale-[1.02] transition-all duration-300 dark:text-white"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-normal mb-1">{item.year}</h3>
              <p className="text-gray-500 dark:text-gray-300 font-light">{item.title}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-12">
            {topSkills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                >
                  <Icon 
                    icon={skill.icon}
                    className="skill-icon"
                    width="48"
                    height="48"
                  />
                  <span className="mt-3 text-sm text-gray-500 font-light">{skill.name}</span>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-12">
            {bottomSkills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (topSkills.length + index) * 0.1, duration: 0.5 }}
              >
                <a
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                >
                  <Icon 
                    icon={skill.icon}
                    className="skill-icon"
                    width="48"
                    height="48"
                  />
                  <span className="mt-3 text-sm text-gray-500 font-light">{skill.name}</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;