const letterInput = document.getElementById("letter-input");

document.getElementById("vowel-number").innerText = "0";

letterInput.addEventListener("keyup", function(){
	var str = letterInput.value;
    var patt1 = /[aeiou]/g;
    let result = str.match(patt1);
    
    if(!result){
    	document.getElementById("vowel-number").innerText = "0";
        return [];
    }

    document.getElementById("vowel-number").innerText = result.length;

    console.log(result);
})

