import React, { useContext, useEffect, useState } from 'react'
import { collection, db, getDocs, addDoc } from '../../FireBase/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Context';



const Card = ({image, title, desc, price, btnID}) => {

  const {isUser} = useContext(UserContext);

  const [getLocals, setGetLocals] = useState(false)

  useEffect(() => {
    if(isUser){
      setGetLocals(true)
    }else{
      setGetLocals(false)
    }
  }, [])

  const cartCollection = collection(db, 'cartItems')
  const [cartAdded, setCartAdded] = useState(false)
  const [cartArr, setCartArr] = useState([])
  const navigate = useNavigate()

  const getCatrsFromFb = async() => {
    const querySnapshot = await getDocs(cartCollection);
    if(querySnapshot.size > 0){
      querySnapshot.forEach((doc) => {
        if(doc.data().userEmail == sessionStorage.getItem('E-react-user_email')){
        cartArr.push(doc.data())
        }
      });
    }else{
      console.log('bhai data hi nhi hai');
    }
  }
  useEffect(() => {
    getCatrsFromFb()
  }, [])




  const addToCart = (e) => {
    if(getLocals){
    const obj = {
      image: e.target.parentElement.previousElementSibling.parentElement.previousElementSibling.src,
      title: e.target.parentElement.previousElementSibling.parentElement.childNodes[0].textContent,
      price: e.target.parentElement.previousElementSibling.parentElement.childNodes[1].textContent.slice(1),
      act: e.target
    };
    
    pushCart(obj);
  }else{
    navigate('/login')
  }
  }
  
  const pushCart = async(item) => {
    // Check if the item already exists in the cart
    const exists = cartArr.some(cartItem =>
      cartItem.image === item.image &&
      cartItem.title === item.title && 
      cartItem.price === item.price
    );

    if (exists) {
      toast.error('This Cart is Already Added!', {
        autoClose: 1000,
      });

    } else {
      cartArr.push(item);
      try {
        const docRef = await addDoc(cartCollection, {
          image: item.image,
          title: item.title,
          price: item.price,
          act: true,
          userEmail: sessionStorage.getItem('E-react-user_email')
        });
        toast.success('Cart Added', {
          autoClose: 1000,
        });
        // location.reload()
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };



  return (
    <>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden card my-5">
        <img className="w-full h-64 object-cover" src={image} alt="Product Image" />
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-[#00a6bb]">{title}</h2>
            <p className="text-black text-lg mb-2 font-semibold">${price}</p>
            <p className="text-gray-600 text-sm mb-4">{desc.slice(0,100)}...</p>
            <div className="flex justify-between">
                <button id={btnID}onClick={(e) => {
                  navigate(`/items/${e.target.id}`)
                }} className="bg-[#00a6bb] text-white py-2 px-4 rounded hover:bg-transparent hover:text-[#00a6bb] border-2 border-[#00a6bb]">View Item <i className="fa-solid fa-eye"></i></button>
                <button id={cartAdded ? 'added' : btnID } className="bg-[#00a6bb] text-white py-2 px-4 rounded hover:bg-transparent hover:text-[#00a6bb] border-2 border-[#00a6bb] cartBtn" onClick={addToCart}>Add to Cart <i className="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card