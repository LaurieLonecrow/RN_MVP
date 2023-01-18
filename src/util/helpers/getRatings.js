import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { globalStyles } from '../../constants/GlobalStyles';

export const getStarRating = (stars) => { 
  let starsArray = []
  if (stars){
  for (let i = 0; i < stars; i++) {
    starsArray.push(<Ionicons name="star" size={24} color={globalStyles.colors.error500} />)
  }
  return starsArray  
  }}



export const getDollarSigns = (price) => {
  let priceArray = []
  if (price){
  for (let i = 0; i < price.length; i++) {
    priceArray.push(<Foundation name="dollar" size={24} color="black" />)
  }
  return priceArray  
}}

