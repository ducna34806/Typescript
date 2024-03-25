import Header from "./Header";
import { Dot } from "./props/Dot";
import Search from "./props/Search";
import Arrange from "./props/Arrange";
import Checkout from "./props/Checkout";
import Contact from "./Contact";
import Footer from "./Footer";
const Detail = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <Header />
      <div className="px-4 flex justify-center">
        <div className="">
          <div className=" flex justify-center bg-white w-1016 h-61 rounded-t-xl border-b mt-6 items-center">
            <Dot title="Xe khách" img="../../public/icon0.svg"></Dot>
            <Dot title="Xe khách" img="../../public/icon2.svg"></Dot>
            <Dot title="Xe khách" img="../../public/icon3.svg"></Dot>
          </div>
          <form
            action=""
            className="bg-white p-4 flex gap-5 w-1016 justify-center rounded-b-xl"
          >
            <div className="border rounded-lg flex ">
              <Search
                title="Nơi xuất phát"
                img="../../public/icon5.svg"
              ></Search>
              <Search
                title="Nơi xuất phát"
                img="../../public/icon6.svg"
              ></Search>
              <Search
                title="Nơi xuất phát"
                img="../../public/icon7.svg"
              ></Search>
              {/* end */}
              <div className="flex border-l">
                <img
                  src="../../public/icon5.svg"
                  alt=""
                  className="m-2 max-w-min "
                />
                <div>
                  <label htmlFor="HeadlineAct" className="text-gray-900 flex">
                    Thêm ngày về
                  </label>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
            <button className="w-36 h-14 bg-[#FFD333] rounded-lg text-center">
              Tìm kiếm
            </button>
          </form>
        </div>
      </div>

      {/* end */}
      <div className="w-1016 mx-auto">
        <div className="flex justify-center gap-4 ">
          <div className="h-80 bg-white w-1/3 pl-5 pb-10 rounded-lg mt-7">
            <h1 className="font-semibold text-lg mt-4">Sắp xếp</h1>
            <Arrange name="Mặc định" />
            <Arrange name="Giờ đi sớm nhất" />
            <Arrange name="Giờ đi muộn nhất" />
            <Arrange name="Đánh giá cao nhất" />
            <Arrange name="Giá tăng dần" />
            <Arrange name="Giá giảm dần" />
          </div>
          <form className="rounded-lg w-2/3">
            <Checkout />
            <Checkout />
            <Checkout />
          </form>
        </div>
      </div>

      <Contact></Contact>
      <div className="bg-white">
        {" "}
        <Footer></Footer>
      </div>
    </div>
  );
};
export default Detail;
