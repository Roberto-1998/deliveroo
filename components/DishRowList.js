import React from 'react';
import DishRow from './DishRow';

const DishRowList = ({ dishes }) => {
  return (
    <>
      {dishes.map((dish) => (
        <DishRow
          key={dish._id}
          id={dish._id}
          name={dish.name}
          description={dish.short_description}
          price={dish.price}
          image={dish.image}
        />
      ))}
    </>
  );
};

export default DishRowList;
