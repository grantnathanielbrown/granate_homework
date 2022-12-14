import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { filterableCuisine } from './SearchContainer';

interface cuisineFiltersProps {
    filterableCuisines: filterableCuisine[];
    toggleFilter: (event: React.ChangeEvent<HTMLInputElement>, cuisineType: string, index: number) => void;
}

export default function CuisineFilters(props: cuisineFiltersProps) {
    const filterableCuisines = props.filterableCuisines.map( (filterableCuisine: filterableCuisine, index: number) => {
        return (
            <FormControlLabel key={index} label={filterableCuisine.cuisineType} control={
                <Checkbox color="primary"
                    onChange={(e) => {props.toggleFilter(e, filterableCuisine.cuisineType, index); }}    
                    checked={props.filterableCuisines[index].checked}
                />
                } 
            />
        )
    })    
  return (
    <div>
        {filterableCuisines}
    </div>
  )
}
