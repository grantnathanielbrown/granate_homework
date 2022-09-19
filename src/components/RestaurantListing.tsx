import React from 'react';
import { Restaurant } from './SearchContainer';

interface RestaurantListingProps {
    restaurant: Restaurant;
    key: number;
}

export default function RestaurantListing(props: RestaurantListingProps) {
  return (
    <li className="flex flex-row">
        <span>{props.restaurant.name}</span>
        <span>{props.restaurant.cuisineType}</span>
        <span>{props.restaurant.stars}</span>
    </li>
  )
}
