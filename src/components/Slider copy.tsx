import { motion } from 'framer-motion';
import digilink from '~/assets/images/1.webp';
import digilink1 from '~/assets/images/2.webp';
import digilink2 from '~/assets/images/3.webp';
import digilink3 from '~/assets/images/4.webp';
import digilink4 from '~/assets/images/9.png';
import digilink5 from '~/assets/images/6.webp';





// Define the array of slides with numbers
const slides = [
    { number: digilink.src},
    { number: digilink1.src },
    { number: digilink2.src },
    { number: digilink3.src },
    { number: digilink4.src },
    { number: digilink5.src },
];

const Slider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 30,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 overflow-x-hidden">
                        <div className="m-8
                         md:w-64 md:h-64 w-52 h-52 items-center justify-center border-2 border-gray-600 p-12 transform transition duration-500 hover:scale-110">
                        <img src={slide.number} alt="" style ={{maxWidth: '100%', maxHeight: '100%'}} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;