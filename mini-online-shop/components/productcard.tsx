import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Product } from '@/utils/project-types';
import { useCartStore } from '@/store/useCartStore';

export default function ProductCard(props: Product) {
  const addItem = useCartStore((state) => state.addItem);
  const store = useCartStore((state) => state.list);

  const addToCart = () => {
    addItem({
      id: props.id,
      title: props.title,
      description: props.description,
      category: props.category,
      price: props.price,
      quantity: 1
    });
  }

  return (
    <Card className='
      w-9/11 mt-10 mb-5 ml-9 h-115
      md:w-5/11 md:mx-3
      xl:w-3/11 xl:mr-8 xl:ml-10'
      sx={{ boxShadow: '0 3px 6px rgba(0, 0, 0, 0.6)' }}>
      <CardMedia
        component="img"
        alt={props.title}
        image={props.image}
        className='h-2/5 bg-white'
        sx={{ objectFit: 'contain', padding: 2 }}
      />
      <div className='h-3/5 flex flex-col justify-between'>
        <CardContent>
          <Typography gutterBottom sx={{ color: "rgba(91, 91, 91, 1)", fontWeight: 'bold', marginBottom: 3 }} variant="subtitle1" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" sx={{
            overflowY: 'auto', maxHeight: '50px', padding: 1, color: 'text.secondary'
          }}>
            {props.description}
          </Typography>
        </CardContent>
        <CardActions className='flex flex-row justify-between m-2'>
          <div>Price: {props.price}$</div>
          <Button onClick={addToCart} variant="contained" sx={{ fontSize: 16, textTransform: 'none' }}>Add to cart</Button>
        </CardActions>
      </div>
    </Card>
  );
}
