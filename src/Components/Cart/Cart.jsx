import React from 'react'
import { collection, db, getDocs, doc, deleteDoc } from '../../FireBase/firebase';
import { toast } from 'react-toastify';

const Cart = ({price, title, image, id}) => {

  const deleteCart = async(e) => {
      let id = e.target.id;
      let docCollection = doc(db, 'cartItems', id)
      await deleteDoc(docCollection);
      toast.success('Cart Removed', {
        autoClose: 200,
      });
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  
  return (
  <>
  <li className="flex items-center justify-between border-b py-4">
                        <div className="flex items-center">
                            <img src={image} alt="Item" className="w-16 h-16 object-cover rounded-md mr-4" />
                            <div>
                                <h3 className="text-lg font-medium mb-4">{title}</h3>
                                <span onClick={deleteCart} id={id} className='text-red-500 cursor-pointer py-2 px-3 rounded-full hover:bg-[#fafafa]'>Remove <i id={id} className="fa-solid fa-xmark"></i></span>
                            </div>
                        </div>
                              <span className="text-lg font-semibold">${price}</span>
                    </li>
    </>
  )
}

export default Cart