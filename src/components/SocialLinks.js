const SocialLinks = ({ textColor = "nav-link", hoverColor = "hover:opacity-50" }) => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/shesaidimnothing' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hugo-pottier-707326263/' }
  ];

  return (
    <div className="flex gap-8">
      {links.map(link => (
        <a 
          key={link.name}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`text-sm tracking-wide transition-all duration-300 dark:text-white ${textColor} ${hoverColor}`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks; 