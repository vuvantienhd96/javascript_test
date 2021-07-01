
//Count characters in your string

function count (string) {  
  // The function code should be here
  if(string === '') return {};
  let stringArr =  string.split('');
  return stringArr.reduce(function(allElm, el) {
    if(el in allElm){ allElm[el]++  } else allElm[el] = 1;
    return allElm;
  }, {});
 
}


// Alternate capitalization

function checkOddOrEven(expresion, str) {
  str.split("").map(function(val, index){
    if(expresion){
        return val.toUpperCase();
    }
    return val.toLowerCase();
  }).join('');
}


function capitalize(s){
  
  let el1 = s.split("").map(function(val, index){
    if(index%2 === 0){
        return val.toUpperCase();
    }
    return val.toLowerCase();
  }).join('');
  
  let el2 = s.split("").map(function(val, index){
    if(index%2 !== 0){
        return val.toUpperCase();
    }
    return val.toLowerCase();
  }).join('');
  
  return [el1, el2];
};

// solution2
function capitalize(s){
  return [0, 1].map(r => [...s].map((val, index) => index%2 === r? val.toUpperCase(): val).join("") )
};


//Mumbling
function accum(s) {
  // your code
  return s.split('').map(function(val, index) {
    return val.charAt(0).toUpperCase() + val.charAt(0).toLowerCase().repeat(index);
  }).join('-');
}


// solution2
function domainName(url){
  //your code here
  //regex code
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// accum("asdas")
// "A-Ss-Ddd-Aaaa-Sssss"