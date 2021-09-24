export const calc = (w, h) => {
  let c = w / (h*h/10000);
  return Math.round(c * 100) / 100;
};
