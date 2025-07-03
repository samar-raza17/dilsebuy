import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { collection, db, getDocs } from '../../FireBase/firebase';


const CardsArea = () => {

  const [getCards, setGetCards] = useState([]);

  const getCardsFromFB = async() => {
    const querySnapshot = await getDocs(collection(db, "all_product"));
    const getcardArr = [];
    querySnapshot.forEach((doc) => {
      if(getcardArr.length < 8){
        getcardArr.push(doc);
      }
      setGetCards(getcardArr)
    });
    
  }
  useEffect(() => {
    getCardsFromFB()
  }, [])

  // const homeItemsData = tenItemsArr

  return (
    <>
    <div className='mt-10'>
    <h1 className='text-3xl text-center font-semibold text-[#00a6bb] mb-10'>HOMEPAGE ITEMS</h1>
    <div className='w-full flex justify-evenly gap-5 flex-wrap px-2'>
    {
      getCards.length ? getCards.map((data, index) => {

        const cardData = data.data()
        return(
          <Card key={index} image={cardData.productImageURL} title={cardData.productName} desc={cardData.productDescription} price={cardData.productPrice} btnID={data.id}/>
        )
      }) : <h1 className='text-3xl text-center font-semibold text-[#00a6bb]'>Data not Found/ Check your wifi</h1>
    }

    </div>
    </div>
    </>
  )
}

export default CardsArea