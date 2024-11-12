const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 dark:bg-[#1a1a1a]/75 backdrop-blur-sm z-50 py-4 border-b border-gray-100 dark:border-[#242424]">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-8">
          <a href="/" className="nav-link">home</a>
          <a href="#about" className="nav-link">about</a>
          <a href="#projects" className="nav-link">projects</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 