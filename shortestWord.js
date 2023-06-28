// str='The dog barked loudly at the cat up the tree';
function shortestWord(str){
  let myReg=[" "|| "," ||"."]
  const newArrayList=str.split(myReg);
  let count=1;
  let currentWordCount=newArrayList[0];
    for(let i=0;i<newArrayList.length;i++){
        if(currentWordCount<newArrayList[count]){
            currentWordCount=newArrayList[i];
            count++
           }
      else if(currentWordCount>=newArrayList[count]){
            count++
        
           }
    }console.log(currentWordCount)
  return currentWordCount;
  }