

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


var s=["one","two","three","four"]
s.push("five")
s.shift()
console.log(s)



var l=["one","two","three","four"]
l.reverse()
var pair=l.join();
console.log(pair)


 
var car=["Skoda","Thar","BMW","Duster"]
car.sort()
car.pop()
console.log(car)


var car=["Skoda","Thar","BMW","Duster"]
car.unshift("Audi","Ferrari")
car.shift()
var len=car.length;
console.log(len)


var car=["Skoda","Thar","BMW","Duster"]
var bikes=["KTM","Duke","Bmw","Pulsar"]
var concat=car.concat(bikes)
concat.pop()
console.log(concat)
 