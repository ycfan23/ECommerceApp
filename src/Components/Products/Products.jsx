import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

//dummy data
const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-articleLarge.jpg?quality=75&auto=webp&disable=upscale'},
  { id: 2, name: 'Macbook', description: 'Apple computer', price: '$10', image: 'https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg?q=x_0,y_0,h_2268,w_4030,c_fill/h_720,w_1280'}
]


const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map(product => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product}/>
            </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
