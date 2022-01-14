import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CardItem from '../CardItem/CardItem';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
});

export default function CardItemList({ data }) {
  const classes = useStyles();
  console.log(data)
  return (
    <div className={classes.root}>
      {data.map((el) => {
        return (
          <CardItem
            key={el.id}
            name={el.name}
            title={el.area.name}
            id={el.id}
            imgSrc={el.area.ensignUrl}
          />
        );
      })}
    </div>
  );
}
