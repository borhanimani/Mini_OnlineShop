import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Product } from '@/utils/project-types';

export default function ProductCard(props: Product) {
  return (
    <Card className='w-3/11 ml-15 mr-5 mt-10 h-115 flex flex-col' sx={{boxShadow:'0 3px 6px rgba(0, 0, 0, 0.6)'}}>
      <CardMedia
        component="img"
        alt={props.title}
        image="/static/images/cards/contemplative-reptile.jpg"
        className='h-2/5'
      />
      <div className='h-3/5 flex flex-col justify-between'>
        <CardContent>
          <Typography gutterBottom sx={{color: "rgba(91, 91, 91, 1)", fontWeight:'bold'}} variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions className='flex flex-row justify-between m-5'>
          <div>price: {props.price}</div>
          <Button variant="contained">Add to cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}
