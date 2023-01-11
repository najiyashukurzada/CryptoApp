import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Coin from '../components/Coin/Coin'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import { addFavorite } from '../redux/slices/favoriteSlice'
import { getCoins } from '../sevice/getCoins'
import './home.scss'

const Home = () => {
    const [coin, setCoin] = useState([]);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    
    useEffect(()=> {
        getCoins().then((res)=>{
            setCoin(res.data);
            console.log(res.data)
        })
    },[]);

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const searchCoins = coin.filter((coin)=> coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div >
        <Main />
        <div className='content'>
        <p>Crypto Tracker Applacation</p>
        <input type="text" placeholder='Search' value={search} onChange={searchHandler} />
        <div className='coins'>
            {searchCoins.map((coin) => (
                <div> 
                <Coin key={coin.id} 
                      name={coin.name} 
                      image={coin.image} 
                      price={coin.current_price} 
                      priceChange={coin.price_change_percentage_24h} 
                      marketCap={coin.market_cap} 
                />
                <button onClick={()=> {
                    dispatch(addFavorite());
                }}
                >
                Add to favorite
                </button>
                </div>
            ))}
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home