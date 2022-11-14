import { Canvas } from '@react-three/fiber';

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className: string;
};

const CanvasContainer = ({ children, className }: Props) => {
  return (
    <div className={className} >
      <Canvas>
        { children }
      </Canvas>
    </div>
  )
}

export default CanvasContainer
