import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface GameCardContainerProps {
  children: ReactNode;
}

// The container that each card and skeleton is wrapped around so they match in size/styling
const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
