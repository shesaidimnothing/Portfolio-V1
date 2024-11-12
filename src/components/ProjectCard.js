const ProjectCard = ({ title, type, category, image }) => {
  return (
    <div className="project-card">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{type}</p>
        <p className="text-gray-400 dark:text-gray-500 text-sm">{category}</p>
      </div>
    </div>
  );
};

export default ProjectCard; 