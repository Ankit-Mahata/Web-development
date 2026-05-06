function countvowels(str)
{
    count=0;
    for(i=0;i<str.length;i++)
    {
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u")
        {
            count++;
        }
    }
    return count;
}
let naam=prompt("Enter your name");
let vowelcount=countvowels(naam);
console.log("Number of vowels in your name is: "+vowelcount);