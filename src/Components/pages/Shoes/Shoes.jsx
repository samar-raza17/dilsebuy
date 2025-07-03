import React, { useEffect, useState } from 'react'
import '../../../App.css'
import{
  getFirestore,
  collection,
  addDoc,
  db,
  getDocs
} from '../../../FireBase/firebase'
import Card from '../../Card/Card';
import { useNavigate } from 'react-router-dom';

const Shoes = () => {

  const navigate = useNavigate()

  const [getShoesProduct, setGetShoesProduct] = useState([]);
  const [noData, setNoData] = useState(false);

  const getShoesFunc = async() => {
    const querySnapshot = await getDocs(collection(db, "all_product"));
    querySnapshot.forEach((doc) => {
      let filteredProducts = [];

    querySnapshot.forEach((doc) => {
        if (doc.data().productCategory === 'shoes') {
          filteredProducts.push(doc);
        } else {
          console.log('nhi hai');
          setNoData(true)
        }
    });

    // Update the state once with the complete list
    setGetShoesProduct(filteredProducts);
    });
  }

  useEffect(() => {
    getShoesFunc()
  }, [])

  return (
    <>
    <button className='border-2 border-[#00a6bb] text-white bg-[#00a6bb] py-2 px-6 rounded-md hover:bg-transparent hover:text-[#00a6bb] mt-3 ml-3' onClick={() => navigate('/')}><i className="fa-solid fa-arrow-left"></i> Back</button>
  <h1 className='text-3xl mt-10 mb-5 font-semibold text-[#00a6bb] text-center border-b-2 border-[#00a6bb] pb-5'>Shoes Items</h1>
    <div className='flex flex-wrap justify-evenly px-2 gap-y-5'>
    {
      getShoesProduct.length > 0 ? getShoesProduct.map((item, index) => {
        let data = item.data()
        return(
          <Card key={index} image={data.productImageURL} title={data.productName} price={data.productPrice} desc={data.productDescription} btnID={item.id}/>
        )
      }) : noData ? <h1 className='text-2xl text-[#00a6bb] font-semibold'>No Data from Shoes Items</h1> : <div className="loader"></div>
    }
    </div>
    </>
  )
}

export default Shoes