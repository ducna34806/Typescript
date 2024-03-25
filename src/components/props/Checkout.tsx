const Checkout = () => {
  return (
    <div className="flex justify-center py-10 bg-white  mt-7 rounded-lg">
      <div className="flex">
        <div>
          <img src="../../../public/check1.svg" alt="" />
        </div>
        <div className="ml-4">
          <h1 className="font-semibold">Hải Phòng Travel (Đất Cảng)</h1>
          <div className="flex mt-14 gap-3">
            <div>
              <img src="../../../public/iconcheck1.svg" alt="" />
            </div>
            <div>
              <div className="flex">
                <h2 className="text-xl font-semibold">07:01</h2>
                <p className="flex items-center">• Hà Nội</p>
              </div>
              <p>1h30m</p>
              <div className="flex">
                <h2 className="text-xl font-semibold">08:31</h2>
                <p className="flex items-center">• Hải Phòng</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right ml-10">
          <h2 className="text-xl font-semibold text-[#2474E5]">Từ 230.000đ</h2>
          <div className="flex items-center justify-end mt-2">
            <img src="../../../public/iconCheck2.svg" alt="" />
          </div>
          <p className="mt-8">Còn 11 chỗ trống</p>
          <button className="w-28 h-9 bg-[#FFC700] rounded-sm my-2">
            Chọn chuyến
          </button>
          <h2 className="font-semibold">Không cần thanh toán trước</h2>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
