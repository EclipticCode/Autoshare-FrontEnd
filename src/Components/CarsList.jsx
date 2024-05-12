import React, { useContext } from "react";
import "./CardList.css";
import { ParamsContext } from "./Context";

const CarsList = () => {

    const { location } = useContext(ParamsContext)
    const urlLocation = location ? location.toLowerCase() : "delhi";
    const carsData = carDetails[urlLocation];

  return (
    <div className="container">
      <div className="row">
        {carsData.map((car, index) => {
          const { img, carTitle, ratings, tags, trips, pricePerHour, fees } = car;
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 justify-content-center margin"
              key={index}
            >
              <div className="card " style={{ width: "19rem" }}>
                <img
                  src={img}
                  className="card-img-top img-fluid"
                  alt="car image"
                  style={{ height: "200px " }}
                />
                <div className="card-body">
                  <h5 className="card-title">{carTitle}</h5>
                  <p className="Ratings">{ratings}</p>
                  <p className="card-text">{tags.map((e) => `${e} | `)}</p>
                  <p>
                    <span>
                      <i className="bi bi-car-front"></i>
                    </span>
                    {trips}
                  </p>
                  <h6>{pricePerHour}</h6>
                  <p className="fees">{fees}</p>
                  <hr />
                  <h5>
                    <span className="badge">
                      <span>
                        <i className="bi bi-tags"></i>
                      </span>
                      FASTAG
                    </span>
                    <span className="bookNow">
                      {" "}
                      <button type="button" className="btn btn-success">
                        Book Now
                      </button>
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarsList;

const carDetails = {
  chennai: [
    {
        id: "48a44e46-eaaa-4a7d-989f-45b24eb7f3a5",
        img: "https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/2023-mg-hector-05.jpg",
        carTitle: "MG Hector 2023",
        ratings: 5.0,
        tags: ["Automatic", "Petrol", "6 Seats"],
        trips: "4 Trips",
        pricePerHour: "₹570/hr",
        fees: "₹15,960 excluding fees",
      },
      {
        id: "48a69e46-eaaa-4a7d-999f-45b24eb7f3a5",
        img: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/107543/brezza-exterior-left-front-three-quarter.jpeg?isig=0&q=80",
        carTitle: "Maruti Suzuki Brezza 2017",
        ratings: 4.5,
        tags: ["Manual", "Diesel", "5 Seats"],
        trips: "49 Trips",
        pricePerHour: "₹139/hr",
        fees: "₹3,892 excluding fees",
      },
      {
        id: "d123a6c7-bd0e-47d1-b19d-7c2c3d5b5ec9",
        img: "https://www.ludhianarentacar.com/images/nissan.webp",
        carTitle: "Nissan Magnite 2022",
        ratings: 4.6,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "117 Trips",
        pricePerHour: "₹124/hr",
        fees: "₹3,472 excluding fees",
      },
      {
        id: "d123g8c7-bd0e-48d1-b19d-7c2c3d5b5ec9",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honda_Amaze_%28front%29.png/1200px-Honda_Amaze_%28front%29.png",
        carTitle: "Honda Amaze 2019",
        ratings: 4.8,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "20 Trips",
        pricePerHour: "₹130/hr",
        fees: "₹3,640 excluding fees",
      },
    {
        id: "48a44e46-eaaa-4a7d-989f-45b24eb7f3d4",
        img: "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/tata-nexon-1.jpg",
        carTitle: "Tata Nexon 2019",
        ratings: 4.4,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "170 Trips",
        pricePerHour: "₹131/hr",
        fees: "₹3,668 excluding fees",
      },
      {
        id: "d0130c0f-b5a1-438b-9305-aa0d0a255cb3",
        img: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/PXL_20220813_045102554_2_0.jpg",
        carTitle: "Hyundai I20 2023",
        ratings: 4.5,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "102 Trips",
        pricePerHour: "₹179/hr",
        fees: "₹5,020 excluding fees",
      },
      {
        id: "e7f5a63b-11a2-46a4-b5f3-5f5a76c8c9b0",
        img: "https://upload.wikimedia.org/wikipedia/commons/e/e4/2013_Suzuki_Ertiga_1.4_GX_wagon_%28ZE81S%3B_01-20-2019%29%2C_South_Tangerang.jpg",
        carTitle: "Maruti Suzuki Ertiga 2023",
        ratings: 4.2,
        tags: ["Manual", "Petrol", "7 Seats"],
        trips: "38 Trips",
        pricePerHour: "₹223/hr",
        fees: "₹6,235 excluding fees",
      },
      {
        id: "56b1dbd7-4d6c-4f05-a4e2-3ee3f987eb49",
        img: "https://cdni.autocarindia.com/ExtraImages/20221006122500_Kwid_front.jpg",
        carTitle: "Renault Kwid 2024",
        ratings: 4.7,
        tags: ["Automatic", "Petrol", "5 Seats"],
        trips: "32 Trips",
        pricePerHour: "₹121/hr",
        fees: "₹3,388 excluding fees",
      },
      {
        id: "f15b4f9e-8d85-4cb4-bd59-04f5e019b99d",
        img: "https://www.team-bhp.com/sites/default/files/styles/check_extra_large_for_review/public/2022citroenc3india.jpg",
        carTitle: "Citroen C3 2022",
        ratings: 4.3,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "6 Trips",
        pricePerHour: "₹136/hr",
        fees: "₹3,808 excluding fees",
      },
      {
        id: "4f1cf89f-6c3b-4573-8593-d4d10c0dd8b1",
        img: "https://dt5rjsxbvck7d.cloudfront.net/eyJidWNrZXQiOiJtdHZkZWFsZXJhcHB1cyIsImtleSI6IjEwNzkyMzQvNjYyZjY1MzBlZGFjMDhkNTdlYTYwNTRiLTIwMjQtMDQtMjktMDktMTUtMjgvaW1hZ2UxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjY5LCJoZWlnaHQiOjM4OCwiZml0IjoiZmlsbCJ9fX0=",
        carTitle: "Maruti Suzuki Swift 2023",
        ratings: 4.1,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "77 Trips",
        pricePerHour: "₹109/hr",
        fees: "₹3,052 excluding fees",
      },
      {
        id: "3c9b6886-2c17-48e4-8101-92d06720f7bf",
        img: "https://www.rushlane.com/wp-content/uploads/2023/02/2023-maruti-baleno-upgrade-feature-new-list-price-1.jpg",
        carTitle: "Maruti Suzuki Baleno 2023",
        ratings: 4.4,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "182 Trips",
        pricePerHour: "₹111/hr",
        fees: "₹3,052 excluding fees",
      },
      {
        id: "d9e0d003-cdb9-4b19-8f33-2e99a67e88de",
        img: "https://stat.overdrive.in/wp-content/odgallery/2019/09/53921_Renault_Triber_2019_035.JPG",
        carTitle: "Renault Triber 2021",
        ratings: 4.7,
        tags: ["Automatic", "Petrol", "7 Seats"],
        trips: "63 Trips",
        pricePerHour: "₹199/hr",
        fees: "₹5,572 excluding fees",
      },
      {
        id: "d1046d3c-04c5-45e1-af73-fb0ee2a647b1",
        img: "https://images.hindustantimes.com/auto/img/2023/11/30/1600x900/Kia_Sonet_facelift_1697513241486_1701314248031.jpeg",
        carTitle: "KIA Sonet 2023",
        ratings: 4.5,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "50 Trips",
        pricePerHour: "₹276/hr",
        fees: "₹4,489 excluding fees"
    }
  ],
  delhi: [
    {
        id: "9e72bd4c-eeb4-42e0-bb6a-03f4c218f318",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20161027120226__PPC3149.jpg",
        ratings: 4.8,
        carTitle: "Hyundai Elantra 2016",
        tags: ["Automatic", "Petrol", "5 Seats"],
        trips: "10 Trips",
        pricePerHour: "₹406/hr",
        fees: "₹11,368 excluding fees ",
      },
      {
        id: "d914ef9f-2b03-4936-bd56-d9fa3d99d0c5",
        img: "https://stimg2.cardekho.com/images/roadTestimages/930x620/20210818_090834/732/mahindra0.jpg",
        ratings: 5.0,
        carTitle: "Mahindra XUV 700 2023",
        tags: ["Manual", "Diesel", "5 Seats"],
        trips: "9 Trips",
        pricePerHour: "₹317/hr",
        fees: "₹8,876 excluding fees ",
      },
      {
        id: "5f2798a7-d69f-4c1f-90d2-2a60fdcd36fc",
        img: "https://en.renault-club.cz/graphics/gallery/full/15773_0-578-872-0-100-http-cdni-autocarindia-com-extraimages-20160705121002-dsc-5363.jpg",
        carTitle: "Renault Lodgy 2016",
        ratings: 4.7,
        tags: ["Manual", "Diesel", "7 Seats"],
        trips: "53 Trips",
        pricePerHour: "₹162/hr",
        fees: "₹4,536 excluding fees ",
      },
      {
        id: "c40a2967-c3ec-46ab-ba67-eeb15f7a0b0e",
        img: "https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2023/12/Hyundai-Creta-Brazil-November-2023.jpeg?resize=600%2C400",
        ratings: 4.6,
        carTitle: "Hyundai Creta 2023",
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "59 Trips",
        pricePerHour: "₹286/hr",
        fees: "₹8,008 excluding fees ",
      },
      {
        id: "c40a2967-c3ec-59sa-ba67-eeb15f7a0b0e",
        img: "https://motorstar.in/cdn/shop/products/PHOTO-2022-07-25-20-06-19.jpg?v=1659380151",
        ratings: 4.6,
        carTitle: "Skoda 2018",
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "91 Trips",
        pricePerHour: "₹321/hr",
        fees: "₹5,697 excluding fees ",
      },
      {
        id: "f5c4b24b-2b88-4b35-b9dd-487b2cb7a524",
        img: "https://imgd.aeplcdn.com//642x361//n/cw/ec/44514/renault-triber-rear-view-5.jpeg?wm=1&q=75",
        ratings: 4.4,
        carTitle: "Renault Triber 2023",
        tags: ["Manual", "Petrol", "7 Seats"],
        trips: "33 Trips",
        pricePerHour: "₹183/hr",
        fees: "₹5,124 excluding fees ",
      },
      {
        id: "7a85ad6c-69a1-4c7c-bb09-8775fb1f2be0",
        img: "https://feeds.abplive.com/onecms/images/uploaded-images/2022/05/28/25743e817e9f187bcf4aced22d60aae0_original.jpg",
        carTitle: "Maruti Suzuki Eeco 2022",
        ratings: 4.4,
        tags: ["Manual", "Petrol", "7 Seats"],
        trips: "70 Trips",
        pricePerHour: "₹140/hr",
        fees: "₹2,920 excluding fees ",
      },
      {
        id: "7a85ad6c-45d1-4c7c-bb09-8775fb1f2be0",
        img: "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/64bfb901b7659.jpg",
        carTitle: "KIA Seltos 2022",
        ratings: 5.0,
        tags: ["Automatic", "Diesel", "5 Seats"],
        trips: "1 Trip",
        pricePerHour: "₹347/hr",
        fees: "₹9,716 excluding fees ",
      },
      {
        id: "b40fe33b-5501-4c8f-b5d1-360a0058311e",
        img: "https://imgctcf.aeplcdn.com/thumbs/p-nc-p-s600-ver4/images/cars/Hyundai/Grand-i10/Review-of-09022017/MG0963.jpg?q=75",
        carTitle: "Hyundai Grand i10 2022",
        ratings: 4.7,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "13 Trips",
        pricePerHour: "₹101/hr",
        fees: "₹2,828 excluding fees ",
      },
      {
        id: "67160d8e-0ae1-448a-b3e9-77a82e6a1b79",
        img: "https://usedcarkerala.in/oc-content/uploads/33/11244.jpg",
        carTitle: "Maruti Suzuki ALTO 2019",
        ratings: 3.2,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "31 Trips",
        pricePerHour: "₹85/hr",
        fees: "₹2,380 excluding fees ",
      },
      {
        id: "a86cbb3d-75f2-4f5a-8f6a-2be3de125b1f",
        img: "https://images.news9live.com/h-upload/2022/09/13/556859-hyundai-venue-2022-lead.jpg?w=1200&enlarge=true",
        ratings: 3.6,
        carTitle: "Hyundai Venue 2022",
        tags: ["Automatic", "Diesel", "7 Seats"],
        trips: "2 Trips",
        pricePerHour: "₹155/hr",
        fees: "₹4,340 excluding fees ",
      }
  ],
  mumbai: [
    {
        id: "aa8b9d10-0a44-4d82-94f5-5ab8f3fc3a94",
        img: "https://5.imimg.com/data5/SELLER/Default/2023/9/341701097/SA/DR/FF/94284151/4-500x500.jpg",
        carTitle: "Tata ALTROZ 2024",
        ratings: 4.3,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "21 Trip",
        pricePerHour: "₹209/hr",
        fees: "₹5,852 excluding fees ",
      },
      {
        id: "ec90e405-3ef2-4a8b-92c2-ef8531227d98",
        img: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fmedia.mahindrafirstchoice.com%2Flive_web_images%2Fusedcarsimg%2Fmfc%2F242%2F570487%2Fright_side_view-20230527162538.jpg&w=750&q=75",
        carTitle: "Toyota Glanza 2019",
        ratings: 4.2,
        tags: ["Automatic", "Petrol", "5 Seats"],
        trips: "102 Trips",
        pricePerHour: "₹203/hr",
        fees: "₹5,684 excluding fees ",
      },
      {
        id: "4886f0a1-2c6a-4fa5-86ac-fb07d90c8de2",
        img: "https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2015/01/Hyundai-i20-Austria-2014.-Picture-courtesy-of-autobild.de_-600x400.jpg?resize=600%2C400&ssl=1",
        carTitle: "Hyundai I20 2023",
        ratings: 4.5,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "102 Trips",
        pricePerHour: "₹179/hr",
        fees: "₹5,020 excluding fees ",
      },
      {
        id: "7f09b64b-cd94-4b99-8f4b-f0efbb1fb5aa",
        img: "https://feeds.abplive.com/onecms/images/uploaded-images/2023/07/20/22999c23435309146634fc0a4a0ac491168983195825019_original.jpg?impolicy=abp_cdn&imwidth=640",
        carTitle: "KIA Seltos 2022",
        ratings: 5.0,
        tags: ["Automatic", "Diesel", "5 Seats"],
        trips: "18 Trips",
        pricePerHour: "₹347/hr",
        fees: "₹9,716 excluding fees ",
      },
      {
        id: "7f56c64b-cd54-4b99-8f4b-f0efbb1fb5aa",
        img: "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/N78PYXS_f2wcrk5a_1_39657399.jpg?q=80",
        carTitle: "Maruti Suzuki Ciaz 2017",
        ratings: 4.3,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "12 Trips",
        pricePerHour: "₹170/hr",
        fees: "4,760 excluding fees ",
      },
      {
        id: "3b907b1f-d78d-468e-b2f2-6c200c792808",
        img: "https://i0.wp.com/bestsellingcarsblog.com/wp-content/uploads/2022/05/Maruti-Suzuki-Ertiga-India-April-2022.jpeg?resize=600%2C400",
        carTitle: "Maruti Suzuki Ertiga 2023",
        ratings: 4.3,
        tags: ["Manual", "Petrol", "7 Seats"],
        trips: "46 Trips",
        pricePerHour: "₹262/hr",
        fees: "₹7,336 excluding fees ",
      },
      {
        id: "3b50d951-6a8f-4b2b-8030-41a0281ff71c",
        img: "https://malalaneford.co.za/wp-content/uploads/2023/02/Ecosport_Driving_Experience_PDC.webp",
        carTitle: "Ford EcoSport",
        ratings: 4.0,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "26 Trips",
        pricePerHour: "₹240/hr",
        fees: "₹5,776 excluding fees ",
      },
      {
        id: "2a3e8082-fb06-4e6e-96a9-d3eef7505276",
        img: "https://www.ludhianarentacar.com/images/nissan.webp",
        carTitle: "Nissan Magnite 2022",
        ratings: 4.6,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "117 Trips",
        pricePerHour: "₹124/hr",
        fees: "₹3,472 excluding fees ",
      },
      {
        id: "dce82dd1-1a91-40c0-afad-84767fcf110f",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/creta-exterior-right-side-view.jpeg?q=80",
        carTitle: "Hyundai Creta 2023",
        ratings: 4.6,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "59 Trips",
        pricePerHour: "₹286/hr",
        fees: "₹8,008 excluding fees ",
      },
      {
        id: "579e8816-80b5-4348-bc8a-12f3d90e53d5",
        img: "https://dt5rjsxbvck7d.cloudfront.net/eyJidWNrZXQiOiJtdHZkZWFsZXJhcHB1cyIsImtleSI6IjEwNzkyMzQvNjYyZjY1MzBlZGFjMDhkNTdlYTYwNTRiLTIwMjQtMDQtMjktMDktMTUtMjgvaW1hZ2UxLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjY5LCJoZWlnaHQiOjM4OCwiZml0IjoiZmlsbCJ9fX0=",
        carTitle: "Maruti Suzuki Swift 2023",
        ratings: 4.1,
        tags: ["Manual", "Petrol", "5 Seats"],
        trips: "77 Trips",
        pricePerHour: "₹109/hr",
        fees: "₹3,052 excluding fees ",
      },
  ],
};
