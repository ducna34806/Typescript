import { Good, Dot } from "./props/Dot";
import Search from "./props/Search";
const Banner = () => {
  return (
    <>
      <section className="relative bg-[url('./public/banner-main-vi.jpg.png')] bg-cover bg-center bg-no-repeat h-max">
        <div className="px-4 py-32 flex justify-center">
          <div className="">
            <h1 className="text-2xl font-medium text-white text-center ">
              Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
            </h1>

            <div className=" flex justify-center bg-white w-1016 h-61 rounded-t-xl border-b mt-6 items-center">
              <Dot title="Xe khách" img="../../public/icon0.svg"></Dot>
              <Dot title="Máy bay" img="../../public/icon2.svg"></Dot>
              <Dot title="Tàu hỏa" img="../../public/icon3.svg"></Dot>
              <Dot title="Thuê xe" img="../../public/icon4.svg"></Dot>
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
                <Search title="Nơi đến" img="../../public/icon6.svg"></Search>
                <Search title="Ngày đi" img="../../public/icon7.svg"></Search>
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

        <div className="absolute  left-0 right-0 bottom-0 flex justify-center items-center text-white bg-black bg-opacity-50  py-4 ">
          <Good title="Chắc chắn có chỗ" img="../../public/icon8.svg"></Good>
          <Good title="Hỗ trợ 24/7" img="../../public/icon9.svg"></Good>
          <Good title="Nhiều ưu đãi" img="../../public/icon10.svg"></Good>
          <Good title="Thanh toán đa dạng" img="../../public/icon11.svg"></Good>
        </div>
        {/* end */}
      </section>
    </>
  );
};

export default Banner;
