function result ()
{
    let myEnterNumber = Number(document.getElementById("math table 1").value);
    let myLimitNumber = Number(document.getElementById("math table 1").value);
    let output  = "" ;

    for(let i=1; i <= myLimitNumber; i++)
    {
     output += `<tr><td>${myEnterNumber}</td><td> * </td><td>${i}</td><td>=</td><td>${myEnterNumber * i}</td> <br>`;
    }
    document.getElementById("container").innerHTML = output;
}
