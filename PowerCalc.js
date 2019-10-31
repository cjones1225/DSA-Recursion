function powerCalculator(n1,n2){
  if(n1<=0 || n2<=0){
    console.log(`exponent should be >= 0`)
    return 0
  } else {
    return n1^n2
  }
}