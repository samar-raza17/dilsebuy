import React, { useEffect, useState } from "react";
import { collection, db, getDocs } from "../../FireBase/firebase";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";

const Allproduct = () => {

  const [getLocals, setGetLocals] = useState(false)

  useState(() => {
    const getting =  sessionStorage.getItem('E-react-user_name') && sessionStorage.getItem('E-react-user_email')
    if(getting == null){
      setGetLocals(false)
    }else{
      setGetLocals(true)
    }
  }, [])

  const [fashion, setFashion] = useState([]);
  const [shirt, setShirt] = useState([]);
  const [jacket, setJacket] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [home, setHome] = useState([]);
  const [books, setBooks] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "all_product"));
    const fashionArr = [];
    const shirtArr = [];
    const jacketArr = [];
    const mobileArr = [];
    const laptopArr = [];
    const shoesArr = [];
    const homeArr = [];
    const booksArr = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().productCategory == "fashion") {
        fashionArr.push(doc);
        setFashion(fashionArr);
      } else if (doc.data().productCategory == "shirt") {
        shirtArr.push(doc);
        setShirt(shirtArr);
      } else if (doc.data().productCategory == "jacket") {
        jacketArr.push(doc);
        setJacket(jacketArr);
      } else if (doc.data().productCategory == "mobile") {
        mobileArr.push(doc);
        setMobile(mobileArr);
      } else if (doc.data().productCategory == "laptop") {
        laptopArr.push(doc);
        setLaptop(laptopArr);
      } else if (doc.data().productCategory == "shoes") {
        shoesArr.push(doc);
        setShoes(shoesArr);
      } else if (doc.data().productCategory == "home") {
        homeArr.push(doc);
        setHome(homeArr);
      } else if (doc.data().productCategory == "books") {
        booksArr.push(doc);
        setBooks(booksArr);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Layout>
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center pt-20 py-2 border-b-2 border-[#00a6bb]">
          Fashion Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {fashion.length > 0 ? (
              fashion.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Fashion's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Shirt Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {shirt.length > 0 ? (
              shirt.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Shirt's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Jacket Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {jacket.length > 0 ? (
              jacket.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Jacket's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Mobile Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {mobile.length > 0 ? (
              mobile.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Mobile's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Laptop Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {laptop.length > 0 ? (
              laptop.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Laptop's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Shoes Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {shoes.length > 0 ? (
              shoes.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Shoes's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Home Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {home.length > 0 ? (
              home.map((item, index) => {
                let data = item.data();
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Home's
              </h2>
            )}
          </div>
        }
        <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 border-b-2 border-[#00a6bb] mb-10">
          Books Items
        </h2>
        {
          <div className="flex flex-wrap justify-evenly mb-12">
            {books.length > 0 ? (
              books.map((item, index) => {
                let data = item.data()
                return (
                  <Card
                    key={index}
                    image={data.productImageURL}
                    title={data.productName}
                    desc={data.productDescription.slice(0, 100)}
                    price={data.productPrice}
                    btnID={item.id}
                  />
                );
              })
            ) : (
              <h2 className="text-3xl font-semibold text-[#00a6bb] text-center py-2 ">
                Data not Found from Book's
              </h2>
            )}
          </div>
        }
      </Layout>
    </>
  );
};

export default Allproduct;
