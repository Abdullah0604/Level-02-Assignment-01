type FormatValue = string | number | boolean;
const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  }
  return value ? false : true;
};

console.log(formatValue("hello world"));
console.log(formatValue(10));
console.log(formatValue(false));
