import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconlist from './PlatformIconlist';
import CriticScore from './CriticScore';
import getCroppedImageURL from '../services/image-url';
import Emoji from './Emoji';
interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconlist platforms={game.parent_platforms.map(p => p.platform)}></PlatformIconlist>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize='2xl'>
          {game.name} <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
