const stringSplit = function split(str, sep){
  var idx = str.indexOf(sep);
  if ( idx == -1 ) {
    return[str];
  }
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
}