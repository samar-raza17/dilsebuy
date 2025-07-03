import React, { useContext, useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import Cart from '../Cart/Cart'
import { addDoc, collection, db, deleteDoc, getDocs } from '../../FireBase/firebase';
import { toast } from 'react-toastify';
import { UserContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const CartArea = () => {

    const navigate = useNavigate()

    const [getLocals, setGetLocals] = useState(false)
    const [sizes, setSizes] = useState(0)

  const {isUser} = useContext(UserContext);

    useEffect(() => {
        if(isUser){
          setGetLocals(true)
        }else{
          setGetLocals(false)
        }
      }, [])

    const [getCarts, setGetCarts] = useState([]);
    const [itemsPrice, setItemsPrice] = useState([])
    const [taxPrice, setTaxPrice] = useState('');
    const [totalCarts, setTotalCarts] = useState('');
    const itemsPriceArr = []
    const [ordersArr, setOrdersArr] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            const querySnapshot = await getDocs(collection(db, "order"));
            const orders = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().userEmail === sessionStorage.getItem('E-react-user_email')) {
                    orders.push(doc.data());
                }
            });
            setOrdersArr(orders);
        };
        getOrders();
    }, []);

   useEffect(() => {
    const getDataFromFB4Cart = async() => {
        const cartsArr = []
        const querySnapshot = await getDocs(collection(db, "cartItems"));
            querySnapshot.forEach((doc) => {
                if(doc.data().userEmail == sessionStorage.getItem('E-react-user_email')){
                cartsArr.push(doc)
            }
        });
        setGetCarts(cartsArr)
    }
    getDataFromFB4Cart()
}, [])

useEffect(() => {
    const prices = getCarts.map(cart => +cart.data().price);
    setItemsPrice(prices);
    setTotalCarts(getCarts.length)
    setSizes(getCarts.length)
}, [getCarts]);


    const subtotal = itemsPrice.reduce((acc, price) => acc + price, 0);
    const tax = getCarts.length > 0 ? getCarts.length * 3 : 0;
    const shipping = subtotal ? 5.00 : 0;
    const totalPrice = subtotal + tax + shipping;

    const orderDone = async () => {
        if(getLocals){
           if(sizes){
            const obj = {
                userEmail: sessionStorage.getItem('E-react-user_email'),
                ordersNo: totalCarts
            };

            pushOrder(obj);
           }else{
            toast.error('No Cart Items!',{
                autoClose: 600
            })
           }
        }else{
            navigate('/signin')
        }
    };


    const pushOrder = async(item) => {
        // Check if the item already exists in the cart
        const exists = ordersArr.some(cartItem =>
          cartItem.userEmail === sessionStorage.getItem('E-react-user_email') &&
          cartItem.ordersNo === totalCarts
        );
        console.log('hai');


        if (exists) {
          toast.error('This Order is Already Added!', {
            autoClose: 1500,
          });

        } else {
          ordersArr.push(item);
          try {
            const docRef = await addDoc(collection(db, "order"), {
              userEmail: sessionStorage.getItem('E-react-user_email'),
              ordersNo: totalCarts,
              totalPrice
            });
            await Promise.all(getCarts.map(async (item) => {
            }));

            // Clear local state after deletion
            setGetCarts([]);
            setItemsPrice([]);
            setTotalCarts(0);
            toast.success('Order placed successfully and cart cleared!', { autoClose: 1500 });

            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }
      };


  return (
    <>
    <Layout>
    <div className="container mx-auto px-4 pt-40 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-[#00a6bb]">Cart Items</h2>
                <ul>
                    {
                        getCarts.length > 0 ? getCarts.map((items, index) => {
                            const data = items.data()
                            return(
                                <Cart price={data.price} image={data.image} title={data.title} id={items.id} key={index}/>
                            )
                        }) : <h1 className='text-[#00a6bb] font-semibold text-2xl flex justify-center items-center border h-72'>Not Found your Account / No Data your Cart</h1>
                    }
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-xl font-semibold mb-4 text-[#00a6bb]">Order Summary</h2>
                <p className="flex justify-between text-gray-600 text-lg font-semibold">
                        <span className='text-[#00a6bb] font-semibold'>Total Carts</span>
                        <span>{totalCarts ? totalCarts : 0}</span>
                    </p>
                <div className="mb-4">
                    <p className="flex justify-between text-gray-600">
                        <span className='text-[#00a6bb] font-semibold'>Subtotal</span>
                        <span>{subtotal ? `$${subtotal}.00` : 0}</span>
                    </p>
                    <p className="flex justify-between text-gray-600">
                        <span className='text-[#00a6bb] font-semibold'>Tax</span>
                        <span>{tax?`$${tax}.00`: 0}</span>
                    </p>
                    <p className="flex justify-between text-gray-600">
                        <span className='text-[#00a6bb] font-semibold'>Shipping</span>
                        <span>{shipping && `$${shipping}`}</span>
                    </p>
                </div>
                <div className="border-t border-gray-200 py-4 mb-4">
                    <p className="flex justify-between text-lg font-semibold">
                        <span className='text-[#00a6bb]'>Total</span>
                        <span>{totalPrice ? `$${totalPrice}.00` : 0.00}</span>
                    </p>
                </div>
                <div>
                <h2 className='font-semibold text-[#00a6bb] text-xl mb-3'>Note: <span className='text-sm'>Agar Aap Order Now Kartey hain toh Admin ki Taraf se Aapki Tamam Cart Items Remove Kardi Jayegi!</span></h2>
                    <button type="submit" className="w-full font-semibold border-2 border-[#00a6bb] bg-[#00a6bb] text-white p-2 rounded-md hover:bg-transparent hover:text-[#00a6bb]"
                    onClick={orderDone}
                    >Order Now</button>
                </div>
            </div>
        </div>
    </div>
    </Layout>
    </>
  )
}

export default CartArea