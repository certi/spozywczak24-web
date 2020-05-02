import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeSelectCurrentQuery } from '../App/selectors';
import Img from "../../components/Img";
import Button from "../../components/Button";

const useStyles = makeStyles(theme => ({
  name: {
    margin: '1vh 1vw',
    height: '8vh',
    lineHeight: '4vh',
    fontSize: '4vh',
    overflow: 'hidden'
  },

  image: {
    height: '20vh',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '60%',
    float: 'left',
  },

  actions: {
    paddingRight: '20px',
    height: '20vh',
    width: '40%',
    float: 'left',
  },

  price: {
    flex: 'none',
    width: '100%',
    color: '#000',
    fontSize: '2em',
    textAlign: 'right',
  },
  add: {
    width: 50,
    height: 50,
    borderRadius: 25,
    border: 'solid 1px #32a852',
    backgroundColor: '#32a852',
    textAlign: 'right',
  },
  svg: {
    fill: 'currentColor',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fontSize: '1.5rem',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    flexShrink: 0,
    userSelect: 'none',
  }

}));

export function ProductCard(props) {
  const { item } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.root}>
      <div className={classes.name}>
        <h5>{item.name}</h5>
      </div>
      <div>
        <div className={classes.image} style={{backgroundImage: `url("${item.image}")`}} />
        <div className={classes.actions}>
          <div className={classes.price}>
            <FormattedNumber value={item.price} />
          </div>
          <div style={{textAlign: 'right', marginTop: '20px'}}>
            <button className={classes.add}>
              <svg viewBox="0 0 24 24" aria-hidden="true" color="white">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentQuery: makeSelectCurrentQuery(),
  }),
)(ProductCard);
