import React from 'react';
import { hideableRestaurant } from './SearchContainer';
interface RestaurantListingProps {
    hideableRestaurant: hideableRestaurant;
    key: number;
}

export default function RestaurantListing(props: RestaurantListingProps) {
  return (
    <li className="flex flex-row border-2 bg-white">
        <img src={`${props.hideableRestaurant.imageUrl}`} alt={`Icon representing a ${props.hideableRestaurant.cuisineType} restaurant`} />
        <span className="mr-8">{props.hideableRestaurant.name}</span>
        <span className="mr-8">{props.hideableRestaurant.cuisineType}</span>
        <span className="">{props.hideableRestaurant.stars}</span>
    </li>
  )
}
