import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Image } from "astro:assets";


// Define the array of image paths
const imagePaths = [
    '../../src/assets/images/1.webp',
    '../../src/assets/images/2.webp',
    '../../src/assets/images/3.webp',
    '../../src/assets/images/4.webp',
    '../../src/assets/images/9.png',
    '../../src/assets/images/6.webp',
];

const Slider = () => {
    // State to store the fetched image URLs
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    useEffect(() => {
        // Fetch images asynchronously when the component mounts
        const fetchImages = async () => {
            const fetchedUrls = await Promise.all(imagePaths.map(async (path) => {
                const response = await fetch(path);
                const blob = await response.blob();
                return URL.createObjectURL(blob);
            }));
            setImageUrls(fetchedUrls);
        };

        fetchImages();

        // Clean up URL objects when the component unmounts
        return () => {
            imageUrls.forEach(URL.revokeObjectURL);
        };
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    // Duplicate the image URLs array to ensure seamless looping
    const duplicatedImageUrls = [...imageUrls, ...imageUrls];

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
                {/* Render images once fetched */}
                {duplicatedImageUrls.map((imageUrl, index) => (
                    <div key={index} className="flex-shrink-0 overflow-x-hidden">
                        <div className="m-8 md:w-64 md:h-64 w-52 h-52 items-center justify-center border-2 border-gray-600 p-12 transform transition duration-500 hover:scale-110">
                            {/* Render the image using the fetched URL */}
                            <img src={imageUrl} alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;
