import React from 'react';
import PropTypes from 'prop-types';
import classes from './TotalItem.module.scss';
import TotalItemCounter from '../TotalItemCounter/TotalItemCounter';

const TotalItem = (
  {
    product,
  },
) => (
  <div>
    <div className={classes.TotalProductCardWrap}>
      <div className={classes.TotalProductCard}>
        <img
          className={classes.poster}
          src={`https://image.tmdb.org/t/p/w200/${product.poster_path}`}
          alt="poster"
        />
        <div>
          <div className={classes.titleContent}>
            <div>{product.title}</div>
          </div>
          <div className={classes.wrapOverviewCount}>
            <p className={classes.productOverview}>
              {product.overview}
            </p>
            <TotalItemCounter
              product={product}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

TotalItem.propTypes = {
  product: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
  }),
};

TotalItem.defaultProps = {
  product: PropTypes.array,
};

export default TotalItem;
