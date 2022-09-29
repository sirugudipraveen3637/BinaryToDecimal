let txt=document.getElementById("binary");
//let btncnvrt=document.getElementsByClassName("btn");
//btncnvrt[0].addEventListener("click",calcaulateBinary);

let result=document.getElementsByClassName("result");


function calcaulateBinary()
{
    let inputval=txt.value;
    let inputvalarr= Array.from(inputval);
    let initialleftval=0;
        for (const element of inputvalarr) {
            if(parseInt(element)!=0 && parseInt(element)!=1){
                alert("Please provide valid Binary number");
                initialleftval=0;
                break;
            }
            else
            initialleftval=(initialleftval*2)+parseInt(element)
        }

    result[0].textContent=`Decimal Number: ${initialleftval}`;
}