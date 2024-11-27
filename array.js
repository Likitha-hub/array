// Write a code snippet to find the length of an array.
// How do you add an element to the end of an array?
// How do you remove the last element from an array?
// How do you add an element to the beginning of an array?

var a="arraymethods"
var a1=a.length
console.log(a1)
var flowers=["lily","jasmine","marigold","rose"]
flowers.push("tulip")
console.log(flowers)
var fruits=["apple","banana","orange","watermelon"]
fruits.pop("watermelon")
console.log(fruits)
var flower=["lily","jasmine","marigold","rose"]
flower.unshift("lotus")
console.log(flower)

// How can you remove the first element from an array?
// How do you reverse the elements in an array?
// How can you find the index of a specific value in an array?
// How can you check if a certain value exists in an array?
// How can you sort the elements of an array in ascending order?
// How can you convert an array to a string using commas as separators?

var hero=["ntr","alluarjun","prabhas","ramcharan"]
hero.shift("ntr")
console.log(hero)
var rev_str=hero.reverse()
console.log(rev_str)
var vegetables=["brinjal","tomato","potato","cabbage"]
var index=vegetables.indexOf("tomato")
console.log(index)
var include=vegetables.includes("ladiesfinger")
console.log(include)
vegetables.sort()
console.log(vegetables)
var array=["ntr","alluarjun","prabhas","ramcharan"]
var result=array.join()
 console.log(result)

//  MULTIPLE ARRAYS

// 1.Write a code snippet that adds an element to the end of an array, then removes the first element.

var s=["one","two","three","four"]
s.push("five")
s.shift()
console.log(s)

// How can you reverse an array and then join the elements into a string?

var l=["one","two","three","four"]
l.reverse()
var pair=l.join();
console.log(pair)

// Write a code that first sorts an array in ascending order, then removes the last element.
 
var car=["Skoda","Thar","BMW","Duster"]
car.sort()
car.pop()
console.log(car)
// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var car=["Skoda","Thar","BMW","Duster"]
car.unshift("Audi","Ferrari")
car.shift()
var len=car.length;
console.log(len)

// // How do you combine two arrays, sort the combined array, and then remove the last element?
var car=["Skoda","Thar","BMW","Duster"]
var bikes=["KTM","Duke","Bmw","Pulsar"]
var concat=car.concat(bikes)
concat.pop()
console.log(concat)
 