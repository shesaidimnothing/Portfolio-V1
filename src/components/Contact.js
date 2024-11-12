import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50 dark:bg-[#242424]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">contact</h2>
          <p className="section-subtitle">get in touch!</p>
          <div className="max-w-2xl w-full p-8 rounded-3xl bg-white dark:bg-[#242424] shadow-lg">
            <p className="text-lg font-light mb-12 text-gray-600 dark:text-gray-300">
              if you have any questions or if you want to work with me, feel free to contact me!
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 