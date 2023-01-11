import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Coin from '../components/Coin/Coin'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import './fav.scss'
import { clearFavorite, removeFromFavorite } from '../redux/slices/favoriteSlice'

const Favorite = () => {
    const { coins } = useSelector((state) => state.favorite);
    const dispatch = useDispatch();

  return (
    <div className='blue'>
    <Main />
        <div className='fav'>
        <div className='row'>
        <h2 style={{color: "white"}}>Favorite</h2> 
        <button onClick={() => dispatch(clearFavorite())}>Clear</button>
        </div>
        {coins.map((coin) => (
            <div className='row'>
            <Coin />
                <button onClick={() => dispatch(removeFromFavorite())}>
                    Remove
                </button>
            </div>
            ))}    
        </div>
    <Footer />
    </div>
  )
}

export default Favorite