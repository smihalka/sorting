function bubbleSort(array){

  for(var i =0;i<array.length;i++){
    var element = array[i];
    var nextElm = array[i+1];
    if(element > nextElm){
      array[i+1] = element;
      array[i] = nextElm;
    }
  }

  var bool = false;
  for(var j =0;j<array.length;j++){
    var element = array[j];
    var nextElm = array[j+1];
    if(element > nextElm){
      return bubbleSort(array);
    }
  }
  bool = true;
  if(bool === true){
      return  array;
  }

}
