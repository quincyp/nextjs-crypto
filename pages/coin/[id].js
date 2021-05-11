import Layout from '../../components/Layout';
import styles from './Coin.module.css';

const Coin = ( {coin} ) => {
    return (
        <Layout>
            <div className={styles.coin_page}>
                <div className={styles.coin_container}>
                    <a href={coin.links.homepage[0]} target="_blank"><img src={coin.image.large} alt={coin.name} className={styles.coin_image}/></a>
                    <h1 className={styles.coin_name}>{coin.name}</h1>

                    <p className={styles.coin_symbol}>{coin.symbol}</p>

                    <p className={styles.coin_current}>Current: ${coin.market_data.current_price.usd}</p>

                    <p className={styles.coin_homepage}><a href={coin.links.homepage[0]} target="_blank">Home Page</a></p>
                    <p className={styles.coin_subreddit}><a href={coin.links.subreddit_url} target="_blank">Subreddit</a></p>
                </div>
            </div>
        </Layout>
    )
}

export default Coin;

export async function getServerSideProps(context) {
    const {id} = context.query

    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)

    const data = await res.json()

    return {
        props: { 
            coin: data
        }
    }
}
