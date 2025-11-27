type FormatValue = string | number | boolean;
const formatValue = (value: FormatValue): FormatValue | void => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? false : true;
  }
};

const getLength = (input: string | unknown[]): number | void => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
};
