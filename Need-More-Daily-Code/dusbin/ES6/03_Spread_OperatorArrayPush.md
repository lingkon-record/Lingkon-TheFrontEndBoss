let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

[].push.apply(rivers, moreRivers);

console.log(rivers.push(...moreRivers));             

why output is 7 ???????





The output of 7 is because of how the push method works in JavaScript. Let's break down your code step by step to understand why:

You have an array rivers initially containing three elements: 'Nile', 'Ganges', and 'Yangtze'.

You have another array moreRivers containing two elements: 'Danube' and 'Amazon'.

You use the apply method of the push function on an empty array [] to apply the push method to the rivers array while passing the moreRivers array as arguments. This effectively appends the elements of moreRivers to the rivers array. After this step, rivers contains five elements: 'Nile', 'Ganges', 'Yangtze', 'Danube', and 'Amazon'.

You then use console.log(rivers.push(...moreRivers));. Here, the push method is called again on the rivers array, and it's passed the elements of moreRivers using the spread operator .... The push method returns the new length of the array after the elements have been added.

The initial length of rivers was 5.
When you call rivers.push(...moreRivers), it adds the elements 'Danube' and 'Amazon' to the rivers array.
So, the new length of rivers becomes 7.
Hence, the console.log statement outputs 7, which represents the new length of the rivers array after pushing the elements 'Danube' and 'Amazon' into it.