const Arrange = (props: { name: string }) => {
  return (
    <fieldset className="mt-5">
      <div className="flex gap-2 text-sm font-medium">
        <input
          type="radio"
          name="DeliveryOption"
          value="DeliveryStandard"
          id="DeliveryStandard"
          className="size-5 "
          checked
        />
        <div>
          <p className="text-gray-700">{props.name}</p>
        </div>
      </div>
    </fieldset>
  );
};

export default Arrange;
