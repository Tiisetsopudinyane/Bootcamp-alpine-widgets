function longestWord(str){
  let myReg=[" "|| "," ||"."]
const newArrayList=str.split(myReg);
let currentWordCount="";
for(let i=0;i<newArrayList.length;i++){
  if(currentWordCount.length<=newArrayList[i].length){
     currentWordCount=newArrayList[i];
  }
}
return currentWordCount;
}