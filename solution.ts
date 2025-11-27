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

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}"`;
  }
}

type RatingInput = { title: string; rating: number }[];
const filterByRating = (items: RatingInput): RatingInput => {
  return items.filter((item) => item.rating >= 4);
};
