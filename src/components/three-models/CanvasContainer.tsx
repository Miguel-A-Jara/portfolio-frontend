import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className: string;
};

const CanvasContainer = ({ children, className }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }} 
      className={`${className} cursor-pointer`}
    >
      <Canvas>
        { children }
      </Canvas>
    </motion.div>
  )
}

export default CanvasContainer
