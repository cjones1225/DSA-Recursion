function countSheep(n){
  if(n===0){
    console.log(`All sheep have jumped over the fence`)
  } else {
    console.log(`${n}: Another sheep jumped the fence`)
    countSheep(n-1)
  }
}