export const CustomRadioButton = ({ material, changeColor }) => {
  const materialName = Object.keys(material);
  if (!materialName) return <></>;
  return (
    <div>
      <input
        type='radio'
        name='accordion'
        id={materialName}
        className='accordion__input'
      />
      <label htmlFor={materialName} className='materialLabel'>
        {materialName}
      </label>
      <div className='items'>
        {material[materialName].map((item) => (
          <button onClick={changeColor} className='item' value={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
