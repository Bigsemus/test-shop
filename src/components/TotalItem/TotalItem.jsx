import React from 'react';
//import classes from "../ProductItem/ProductItem.module.scss";
import classes from "./TotalItem.module.scss"
import TotalItemCounter from "../TotalItemCounter/TotalItemCounter";

const TotalItem = ({product}) => {
    return (
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
};

export default TotalItem;