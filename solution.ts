type FormatValue = string | number | boolean;
const formatValue = (value: FormatValue): FormatValue => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? false : true;
  }
  return "wrong input";
};

const getLength = (input: string | unknown[]): number | string => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return "wrong input";
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type RatingInput = { title: string; rating: number }[];
const filterByRating = (items: RatingInput): RatingInput => {
  return items.filter((item) => {
    if (item.rating > 0 && item.rating <= 5) {
      return item.rating >= 4;
    }
  });
};

type Users = { id: number; name: string; email: string; isActive: boolean }[];
const filterActiveUsers = (users: Users): Users => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {
  const { title, author, publishedYear, isAvailable } = book;
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const mergedArray = [];
  const uniqueValues = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArray[i] = arr1[i];
  }
  for (let j = 0; j < arr2.length; j++) {
    mergedArray[mergedArray.length] = arr2[j];
  }

  for (let i = 0; i < mergedArray.length; i++) {
    let isDuplicated = false;

    for (let j = 0; j < i; j++) {
      if (mergedArray[i] === mergedArray[j]) {
        isDuplicated = true;
        break;
      }
    }

    if (!isDuplicated) {
      uniqueValues[uniqueValues.length] = mergedArray[i];
    }
  }
  return uniqueValues;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  const totalPrice = products.reduce((total: number, product) => {
    const { price, quantity, discount } = product;
    if (discount) {
      if (discount > 0 && discount <= 100) {
        return total + (price - (price * discount) / 100) * quantity;
      }
    }

    return total + price * quantity;
  }, 0);

  return totalPrice;
};
