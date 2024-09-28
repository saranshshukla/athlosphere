import { motion } from 'framer-motion';

const coaches = [
  { name: 'Mahabir Singh Phogat', expertise: 'Wrestling', image: '/images/coach1.jpg' },
  { name: 'Kabir Khan', expertise: 'Hockey', image: '/images/coach2.jpg' },
];

const CoachesSection = () => {
  return (
    <section className="py-20 bg-dark">
      <h2 className="text-4xl text-center font-bold mb-10">Featured Coaches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        {coaches.map((coach, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img src={coach.image} alt={coach.name} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold">{coach.name}</h3>
              <p className="text-lg text-gray-300">{coach.expertise}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoachesSection;
