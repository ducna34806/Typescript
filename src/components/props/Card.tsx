import Cards from "./Cards";

const Card = () => {
  return (
    <div>
      <h1 className="ml-44 text-xl font-medium pt-10">Tuyến đường phổ biến</h1>

      <div className="flex gap-4 container m-auto justify-center pt-5 pb-10 ">
        {/* end */}
        <form action=""></form>
        <Cards
          name="Sài Gòn - Nha Trang"
          img="../../public/travel1.png"
          price="Từ 200.000đ"
          bgColor="bg-[#9E947C]"
        />
        <Cards
          name="Hà Nội - Hải Phòng"
          img="../../public/travel2.png"
          price="Từ 80.000đ"
          bgColor="bg-[#585279]"
        />
        <Cards
          name="Sài Gòn - Đà Lạt"
          img="../../public/travel3.png"
          price="Từ 200.000đ"
          bgColor="bg-[#C6324E]"
        />
        <Cards
          name="Sài Gòn - Phan Thiết"
          img="../../public/travel4.png"
          price="Từ 150.000đ"
          bgColor="bg-[#4C6C8C]"
        />
        {/* end */}
      </div>
    </div>
  );
};

export default Card;
