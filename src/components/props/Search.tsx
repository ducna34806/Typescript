const Search = (props: { title: string; img: string }) => {
  return (
    <div className="flex">
      <img src={props.img} alt="" className="mr-2 max-w-min " />
      <div>
        <label htmlFor="HeadlineAct" className="text-gray-900 flex">
          {props.title}
        </label>
        <select
          name="HeadlineAct"
          id="HeadlineAct1"
          className="mt-1.5 w-full  text-gray-700 "
        >
          <option value="">Please select</option>
          <option value="JM">John Mayer</option>069+9
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
