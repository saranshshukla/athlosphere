import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/olympics-2021-Opening-ceremony.avif")' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-5">
        <h1 className="text-6xl font-bold mb-6">Welcome to Athlosphere</h1>
        <p className="text-2xl text-gray-300 mb-4"><i>"Connect, Compete and Conquer"</i></p>
        <button className="bg-cyan-500 text-white px-6 py-3 text-xl">Explore your journey</button>
      </div>
    </motion.section>
  );
};

export default HeroSection;