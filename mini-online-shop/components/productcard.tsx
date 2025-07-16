import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Product } from '@/utils/project-types';

export default function ProductCard(props: Product) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.title}
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <div>price: {props.price}</div>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
