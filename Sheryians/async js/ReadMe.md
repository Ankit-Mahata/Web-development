ek kam sakiye pachhi matra arko kam suru garnu sync behaviour ho

ek kam execute vayo tara na sakina paye or responsena aaye arko arko kam start vayo vane tyo async behaviour ho , execute vayeko kam background ma chaliraheko hunchha 

QSN) four line of code chha , jasma 3rd line le server ma request pathauchha ani pachhi matra 4rt line of code chalnu parne chha vane , yo sync behaviour ho ki async ?

  => yo code lekheko or function use gareko tarika ma farak parchha. 

  for instant
    console.log("1");
    let data = getData(); // maanau yo 5 sec lagyo
    console.log(data);
    console.log("4");
     
    o/p... 
    1  
    (wait 5 sec)
    data
    4
    this is sync behaviour. kina ki getData() nasakunjel 4th line chalnai paudaina.



    console.log("1");
    console.log("2");
    fetch("https://api.com/users");
    console.log("4");

    o/p... 
    1
    2
    4
    (server response pachhi aauchha)
    Yo asynchronous ho.



    main problem....

console.log("1");
console.log("2");
const data = await fetch(url);
console.log(data);

o/p...
  1
  2
  (server ko response ko wait)
  data
    
    yo sync ho ki async ?

    => fetch eauta async function ho , feri pani server bata response aaye pachhi matra data print vayo jun sync behaviour ho .
    khasma , operation asynchronous nai ho tara await le execution lai pause garchha.
    operation async nai ho tara code sequentially chalchha




 console.log("1");
 console.log("2");
 fetch(url);
 console.log("4");


 o/p...

 1
 2
 4
 (server response pachhi)
 Yo pure asynchronous behaviour ho.


 "Wait gareko" bhanda pani "kaam background ma chaleko ho ki main thread block bhayo?" bhanne kura le sync ra async ko farak nirdharit garchha. fetch + await ma wait gare pani operation asynchronous nai ho.

 server request ma duita alag kaam hunchha 
 1. request pathaune
 2. server le process garera response pathaune

 JavaScript normally asynchronous operation ko lagi wait gardaina server ma request pathaisake pachhi arko line execute garna khojchha tara await wa .then() use garepachi response aaepachi matra tyo result use hunchha 




 



 *************************


 all about Web APIs, Callback Queue and Event Loop .

 // browser structure

    Browser

 ┌─────────────────────────────┐
 │                             │
 │   JavaScript Engine         │
 │        (Call Stack)         │
 │                             │
 └─────────────┬───────────────┘
               │
               │
               ▼
        Web APIs
               │
               ▼
        Callback Queue
               │
               ▼
          Event Loop
               │
               ▼
        Call Stack
