export function immutableDelete(arr, index) {
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

export function immutblePush(arr, newData) {
  return [...arr, newData];
}
