import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { gameType, useAppDispatch } from '../types';
import { joinGame} from '../features/game/gameSlice';


export default function GameCard({game, joined}: {game: gameType, joined: boolean}) {
  const date = new Date( game.date)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(joinGame(game._id))

  }

  return (
    <Card sx={{ minWidth: 275 , maxWidth: 400, height: 180, minHeight: 180}}>
      <CardContent >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Hosted By: {game.hostName}
        </Typography>
        <Typography variant="h4" component="div">
          {game.gameType}
        </Typography>
        <div className="flex gap-5 flex-wrap justify-between">
            <Typography color="text.secondary">
                {game.location}
            </Typography>
            <Typography color="text.secondary">
                {date.toLocaleDateString()}
            </Typography>
            <Typography color="text.secondary">
                {game.startTime}
            </Typography>
        </div>
      </CardContent>
      {
        !joined &&( 
          <CardActions>
          <Button size="small" variant="contained" color="primary" onClick = {handleClick}>Join Game</Button>
        </CardActions>
      )
      }
    </Card>
  );
}