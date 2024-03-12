import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconlist from './PlatformIconlist';
import CriticScore from './CriticScore';
import getCroppedImageURL from '../services/image-url';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card width='300px' overflow='hidden'>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconlist platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconlist>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
