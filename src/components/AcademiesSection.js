import { motion } from 'framer-motion';

const academies = [
  { name: 'Elite Athletics Academy', location: 'California, USA', image: '/images/academy1.jpg' },
  { name: 'Olympic Dreams Training', location: 'Tokyo, Japan', image: '/images/academy2.jpg' },
];

const AcademiesSection = () => {
  return (
    <section className="py-20 bg-dark">
      <h2 className="text-4xl text-center font-bold mb-10">Top Sports Academies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        {academies.map((academy, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={academy.image} alt={academy.name} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold">{academy.name}</h3>
              <p className="text-lg text-gray-300">{academy.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AcademiesSection;
