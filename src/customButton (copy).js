{
  product && (product.materials ||).map((material, index) => (
    <CustomRadioButton key={index} material={material} changeColor={changeColor} />
  ))
}
