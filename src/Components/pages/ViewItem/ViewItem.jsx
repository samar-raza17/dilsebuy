import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { addDoc, collection, db, getDocs } from '../../../FireBase/firebase';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ViewItem = () => {
    const params = useParams().id

    const getUID = params;
    const [item, setItem] = useState([])
    console.log(getUID);
    const getItemOnFB = async() => {
        const querySnapshot = await getDocs(collection(db, "all_product"));
        querySnapshot.forEach((doc) => {
            if(doc.id == getUID){
                const obj = {
                    title: doc.data().productName,
                    description: doc.data().productDescription,
                    imageURL: doc.data().productImageURL,
                    price: doc.data().productPrice,
                    category: doc.data().productCategory
                }
                setItem([obj])
            }
        });
    }

    useEffect(() => {
        getItemOnFB()
    }, [])
    const [order, setOrder] = useState([])

    const ordered = async() => {
        const obj = {
            userEmail: sessionStorage.getItem('E-react-user_email'),
            userName: sessionStorage.getItem('E-react-user_name'),
            ordersNo: 1
        };
    
        // Check if `order` array contains an object with the same `userEmail` and `userName`
        const orderExists = order.some(o => o.userEmail === obj.userEmail && o.userName === obj.userName);
        const getsessionS = sessionStorage.getItem('E-react-user_name') && sessionStorage.getItem('E-react-user_email')

        if (orderExists) {
            console.log('Data exist');
        } else {
           if(getsessionS){
            order.push(obj)
            try {
                const docRef = await addDoc(collection(db, "order"), obj);
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
           }else{
            toast.error('SignIn your Account', {
              autoClose: 500
            })
           }
        }
    };


  return (
    <>
  <Layout>
    { item.length > 0 ?
        item.map((data, index) => {
            return(
                <section key={index} className="py-24 font-poppins">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <span className='font-semibold text-[#00a6bb] inline-block mb-5 ml-1'>{`${data.category}/${data.title.split(" ")[0]}...`}</span>
                            <div className="">
                                <div className="">
                                    <img
                                        className=" w-full lg:h-[39em] rounded-lg border p-2"
                                        src={data.imageURL}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl">
                                    </h2>
                                        <h1 className='text-4xl font-semibold mb-7'>{data.title}</h1>
                                    <div className="flex flex-wrap gap-1 items-center mb-6">
                                        <i className="fa-solid fa-star text-orange-500"></i>
                                        <i className="fa-solid fa-star text-orange-500"></i>
                                        <i className="fa-solid fa-star text-orange-500"></i>
                                        <i className="fa-solid fa-star text-orange-500"></i>
                                        <i className="fa-solid fa-star text-orange-500"></i> <span className="text-lg font-semibold ml-5">624 review</span>
                                    </div>
                                    <p className="inline-block text-2xl font-semibold">
                                        <span>${data.price}</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold">
                                    </h2>
                                    <p>{data.description}.</p>
                                </div>
                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">
                                    <button
                                        className="w-full px-4 py-3 text-center text-white bg-[#00a6bb] border-2 border-[#00a6bb] hover:bg-transparent hover:text-[#00a6bb] rounded-xl"
                                        onClick={ordered}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            )
        })
    : <h1 className='py-24 text-center font-semibold text-5xl text-[#00a6bb]'>Data Fetching...</h1>}
  </Layout>
    </>
  )
}

export default ViewItem