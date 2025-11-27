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

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1325,
  isAvailable: false,
};

printBookDetails(myBook);
