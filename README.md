# 1. What are some differences between interfaces and types in TypeScript? <br>

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
    }<br>
    <!-- interface for array -->
    interface Books {
        [index: number]: string;
    }<br>
    <!-- interface for function -->
    interface getBookName {
        (book: {name: string; price: number}): string;
    }<br><br>
    অন্যদিকে type alias এর মাধ্যমে আমরা খুব সহজে যেকোনো value এর টাইপ ডিফাইন করতে পারি। যেমনঃ 
    type Role = "Admin" | "User" <!-- literal type--><br>
    type Books = {name: string; price: number}<br>
    type BookList = string[]
    type Loading = boolean
    <br>
    <p>
    2. interface এর মাধ্যমে আমরা খুব সহজে অন্য একটা টাইপ কে extends করতে পারি। কিন্তু type alias এ আমরা extends use করতে পারি না। তবে intersaction or union ব্যবহার করা যায়। যেমনঃ <br>
    <!-- example for interface -->
    interface Book {
        name: string
    }<br>
    interface BookDetails extends Book {
        price: number
    }<br>
    <!-- example for type alias -->
    type Book = {name: string}<br>
    type BookDetails = Book & {price: number}
</p>
</p>
<hr>

# 2. What is the use of the keyof keyword in TypeScript? Provide an example. <br>

<p> TypeScript শেখার সময় একটি গুরুত্বপূর্ণ operator হলো keyof। এটি একটি object type-এর সব property কে union type হিসেবে বের করার জন্য ব্যবহার করা হয়। keyof এর সাহায্যে আমরা যেকোনো object-এর সকল key কে  type হিসেবে পেতে পারি। এটি মূলত type-safe code লিখতে সাহায্য করে এবং ভুল key ব্যবহারের সম্ভাবনা কমায়। তাছাড়া, keyof operator, Generic function তৈরিতে সাহায্য করে এবং
Code maintainable ও bug-free করে। নিচে উদাহরণ দেওয়া হলোঃ <br>

interface User {
name: string;
age: number;
email: string;
} <br>
type UserKeys = keyof User;
এখন এখানে UserKeys এর মধ্যে টাইপ হবে, type UserKeys = 'name' | 'age' | 'email'

</p>
