const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// standard for loop

for (let i = 0; i < companies.length; i++) {
  // console.log(companies[i]);
}

// forEach

companies.forEach((company) => {
  // console.log(company.name);
});

// filter using a for loop

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

// console.log(canDrink);

// filter method using regular function syntax

const canVote = ages.filter(function (age) {
  if (age >= 18) {
    return true;
  }
});

// console.log(canVote);

// filter method using ES6 arrow function

const cantDrive = ages.filter((age) => age < 15);

// console.log(cantDrive);

// filter retail companies

const retailCompany = companies.filter(
  (company) => company.category === "Retail"
);

// console.log(retailCompany);

// filter companies started in the 1980s

const eightiesCompanies = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);

// console.log(eightiesCompanies);

// filter companies that lasted at least 10 years

const lastedTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

// console.log(lastedTenYears);

// map (create array of company names)

const companyNames = companies.map((company) => company.name);

// console.log(companyNames);

// test map (also template literals)

const testMap = companies.map(
  (company) => `${company.name} [${company.start} - ${company.end}]`
);

// console.log(testMap);

// use map to return a new array of the square root of every age

const agesSquare = ages.map((age) => Math.sqrt(age));

// console.log(agesSquare);

// sort

// sort every company by start date

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// used ternary operator for conditional

// console.log(sortedCompanies);

// sort ages

const sortAge = ages.sort((a, b) => a - b);

// console.log(sortAge);

// reduce

// add all ages together

const addAges = ages.reduce((start, item) => start + item, 0);

// console.log(addAges);

// add up all of the years that all of the companies have existed.

const totalYears = companies.reduce(
  (start, company) => start + (company.end - company.start),
  0
);

// console.log(totalYears);

// using multiple methods at once

// map and multiple every age by 2, filter ages 40 and up, sort the ages and then use reduce to add them all together.

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b);

// console.log(combined);
