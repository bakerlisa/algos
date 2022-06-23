const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008} ,
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]


// ============================ BASIC FOR LOOP
// for(var i=0;i<companies.length;i++){
//     console.log(companies[i].name)
// }

// ============================ FOREACH
companies.forEach(function(company){
    // console.log(company.name)
})

// ============================ FILTER: filter out or run an if statemtn on the data you're getting back from the obj/arr
let canDrink = []
for(var j=0;j<ages.length;j++){
    if(ages[j] >= 21){
        canDrink.push(ages[j])
    }
}
// console.log(canDrink)

const drinkUp = ages.filter(function(age){
    if(age >= 21){
        return true
    }
} )
// console.log(drinkUp)

const drinkers = ages.filter(age => age >=21)
// console.log(drinkers)

const retail = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true
    }
})
// console.log(retail)

const retailers = companies.filter(company => company.category === 'Retail')
// console.log(retailers)

const eighties = companies.filter(start => (start.start >= 1980 && start.start <= 1990))
// console.log(eighties)

const topTen = companies.filter(ten => (ten.end - ten.start) >= 10)
// console.log(topTen)

// ============================ MAP: manipulate the data you're getting
const names = companies.map(function(name){
    return `${name.name}: [${name.start} - ${name.end}]`
})
// console.log(names)

const companyNames = companies.map(company => `${company.name}: [${company.start} - ${company.end}]`)
// console.log(companyNames)

const squareRoot = ages.map(age => Math.sqrt(age))
const timesTwo = ages.map(age => age * 2)
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);
// console.log(ageMap)

// ============================ SORT
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
})

const sortCompanies = companies.sort((c1,c2) => c1.start > c2.start ? 1 : -1)
// console.log(sortCompanies)

// const sortAges = ages.sort((a,b) => a-b)
const sortAges = ages.sort((a,b) => b-a)
// console.log(sortAges)

// ============================ REDUCE
let ageSum =0;
for(var k=0;k<ages.length;k++){
    ageSum += ages[k]
}
// console.log(ageSum)

const ageSummed = ages.reduce(function(total,age){
    return total + age;
},0)
// console.log(ageSummed)

const agesSum = ages.reduce((total,age) => total + age, 0)
// console.log(agesSum)

const totalYears = companies.reduce(function(total,company){
    return total + (company.end - company.start)
},0)

const totalYear = companies.reduce((total,company) => total + (company.end - company.start), 0)
// console.log(totalYear)

// ============================ COMBINING METHODS
const combined = ages
    .map((age) => age * 2)
    .filter(age => age >= 40)
    .sort((a,b) => a-b)
    .reduce((total,age) => total + age, 0);
console.log(combined)




// Resources:
// 1. https://www.youtube.com/watch?v=rRgD1yVwIvE
// 2. 