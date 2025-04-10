import { Spinner } from '@chakra-ui/react';

interface SpinnerProps {
  thickness: string;
  speed: string;
  color: string;
  emptyColor: string;
  size: string;
}

const AppSpinner: React.FC<SpinnerProps> = ({ thickness, speed, color, emptyColor, size }) => {
  return <Spinner thickness={thickness} speed={speed} color={color} size={size} emptyColor={emptyColor} />;
};

export default AppSpinner;
