function transportFee(dayTime){
    let dayTime1=dayTime.toLowerCase;
        switch(dayTime1){
            case "morning": return "R20";
              case "afternoon": return "R10";
              default: return "free";
              
            }
  }