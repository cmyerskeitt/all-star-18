function strCount(str, letter){  
    if (str.length == 0) return 0 
    let count = 0
    for (let i = 0; i < str.length;i++){
      if (str[i]== letter){
        count++
      }
    }
    return count
}