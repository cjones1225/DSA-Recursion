const triangle = function triangleNum(n){
  if (n<2){
    return n;
  } else {
    return n + triangle(n-1)
  }
}