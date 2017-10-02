export function uid(len) {
  len = len || 7;
  return Math.random().toString(35).substr(2, len);
}

export function rand(min, max) {
  return Math.random() * (max - min) + min;
}
  
export function randWithGap(min, max) {
  const val = Math.random() * (max - min) + min;
  
  return (val < 0 ? val - 1 : val + 1)
}
  