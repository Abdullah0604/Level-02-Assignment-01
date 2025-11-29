### 1. What are some differences between interfaces and types in TypeScript? <br><br>

## TypeScript-এ interface এবং type দুটোই object এর structure define করার জন্য ব্যবহার করা হয়। কিন্তু কিছু গুরুত্বপূর্ণ পার্থক্য আছে। নিচে type interface and type alias এর পার্থক্য উদাহরণ সহ দেওয়া হলোঃ

<br>
 <p>
    1. interface এর মাধ্যমে শুধুমাত্র non-premetive value এর টাইপ ডিফাইন করার জন্য ব্যবহার করা হয়। non-premetive value এর  মধ্যে রয়েছে - object, array, ইত্যাদির জন্য ব্যবহার করা হয়। তবে interface er মাধ্যমে array, function এর জন্য টাইপ ডিফাইনের structure or syntax একটু ট্রিকি। নিচে উদাহর‍ণ দেয়া হলোঃ <br>
    interface Book {
        title: string;
        author: string;
        plublished: number;
        price : number;
        isAuthorized: boolean
    }
    <!-- interface for array -->
    interface Books {
        [index: number]: string;
    }
    <!-- interface for function -->
    interface getBookName {
        (book: {name: string; price: number}): string;
    }
    অন্যদিকে type alias এর মাধ্যমে আমরা খুব সহজে যেকোনো value এর টাইপ ডিফাইন করতে পারি। যেমনঃ 
    type Role = "Admin" | "User" <!-- literal type-->
    type Books = {name: string; price: number}
    type BookList = string[]
    type Loading = boolean
    <br>
    2. interface এর মাধ্যমে আমরা খুব সহজে অন্য একটা টাইপ কে extends করতে পারি। কিন্তু type alias এ আমরা extends use করতে পারি না। তবে intersaction or union ব্যবহার করা যায়। যেমনঃ 
    <!-- example for interface -->
    interface Book {
        name: string
    }
    interface BookDetails extends Book {
        price: number
    }
    <!-- example for type alias -->
    type Book = {name: string}
    type BookDetails = Book & {price: number}
 </p>

<hr>
