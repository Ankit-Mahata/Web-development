// 1) print numbers from 1 to 10 using a for loop
for (let i=1; i<=10; i++)
{
    console.log(i);
}
console.log("\n");

// 2) print numbers from 10 to 1 using a while loop
let j=10;
while(j>0)
{
    console.log(j);
    j--;
}
console.log("\n");


// 3) print even numbers from 1 to 20 using a for loop
for (let k=1; k<=20; k++)
{
    if(k%2==0)
    console.log(k);
}

// 4) print odd numbers from 1 to 15 using a while loop
let l=1;
while(l<=15)
{
    if(l%2==1)
    console.log(l);
    l++;
}
console.log("\n");

// 5) print the multiplication table of 5 using a for loop
for(let m=1; m<=10; m++)
{
    console.log("5 x ",m," = ",5*m);
}
console.log("\n");

// 6) print sum of numbers from 1 to 100 using a loop
let sum=0;
for(let n=1; n<=100; n++)
{
    sum=sum+n;
}
console.log(`sum of numbers from 1 to 100 is ${sum}`);
console.log("\n");

// 7) print all numbers between 1 and 50 that are divisible by 3 using a loop
for(let i=1; i<=50; i++)
{
    if(i%3==0)
    console.log(i);
}
console.log("\n");

// 8) Ask the user for a number and print whether each number from 1 to that number is even or odd using a loop
let val=prompt("enter a number");
for( let i=1; i<=val; i++ )
{
    if (i%2==0)
        console.log(`${i} is even`);
    else
        console.log(`${i} is odd`);
}
console.log("\n");


// 9) count how many numbers btn 1 and 50 are divisible by 3 and 5 
let count=0;
for(let i=0; i<=50; i++)
{
    if(i%3==0 && i%5==0)
        count++;
}
console.log(`count of numbers divisible by both 3 and 5: ${count}`);
console.log("\n");

// 10) write a loop from 1 to 100 such that it print each number bot stops completely at the first multiple of 7
for (let i=1; i<=100; i++)
{
    console.log(i);
    if (i%7==0)
        break;
}
console.log("\n");


// 11) a loop from 1 to 20 such that it prints each number but skips the multiples of 3
for(let i=1; i<=20 ; i++)
{
    if(i%3==0)
        continue;
    console.log(i);
}
console.log("\n");


// 12) a loop from 1 to 100 such that it prints only first 5 odd numbers and stops completely after that
let counter=0;
for (let i=1; i<=100; i++)
{
    if(i%2==1)
    {
        console.log(i);
        counter++;
    }
    if (counter==5)
    break;
}