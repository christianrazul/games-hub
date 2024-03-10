import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconlist from './PlatformIconlist';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconlist platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconlist>
      </CardBody>
    </Card>
  );
};

export default GameCard;
