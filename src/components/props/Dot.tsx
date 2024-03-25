// Props: Là object đặc biệt, cho truyền dữ liệu từ cha xuống con
// Props không thể bị thay đổi
const Dot = (props: { title: string; img: string }) => {
  return (
    <div>
      {/* end */}
      <div className="flex items-center px-9">
        <img src={props.img} alt="" className="mr-2" />
        <p>{props.title}</p>
      </div>
      {/* end */}
    </div>
  );
};
const Good = (props: { title: string; img: string }) => {
  return (
    <div className="flex px-10">
      <img src={props.img} alt="" className="mr-2" />
      <p>{props.title}</p>
    </div>
  );
};
export { Good, Dot };
