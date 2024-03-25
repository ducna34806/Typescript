// Props: Là object đặc biệt, cho truyền dữ liệu từ cha xuống con
// Props không thể bị thay đổi
const Button = (props: { title: string }) => {
  return (
    <button className="rounded-md bg-[#E0E0E0] px-5 py-2.5 text-sm font-medium text-[#0D2E59]">
      {props.title}
    </button>
  );
};

export default Button;
