const companies = [
    {name: "Company One", category: "Finance", start: 1982, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008} ,
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1982, end: 1989}
]

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]


// BASIC FOR LOOP
// for(var i=0;i<companies.length;i++){
//     console.log(companies[i].name)
// }

// FOREACH
companies.forEach(function(company){
    // console.log(company.name)
})

// FILTER
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
console.log(topTen)
//