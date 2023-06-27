function wordLengths(str){
    const newArrayList=str.split(" ");
    let newStr="";
    for(let i=0;i<newArrayList.length;i++){
       newStr+=newArrayList[i]
    }
      return newStr.length;
  }