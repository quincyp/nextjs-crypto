import styles from './Coins/Coins.module.css';

const Labels = () => {
    return (
        <div className={styles.coin_container}>
        <div className={styles.coin_row_label}>
            <div className={styles.coin_columns}>
                
                <p className={styles.coin_img_label}>Image</p>
                <h1 className={styles.coin_h1}>Name</h1>
                <p className={styles.coin_symbol}>Symbol</p>
                <p className={styles.coin_price}>Current Price</p>
                <p className={styles.coin_volume}>Coin Volume</p>
                <p className={styles.coin_percent}>24-hour Change</p>
                <p className={styles.coin_marketcap}>Market Capitalization</p>
            </div>
        </div>
        </div>
    )
}

export default Labels;