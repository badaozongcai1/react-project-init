interface SumFun {
  (a: number, b: number): number;
}
const sum: SumFun = (a, b) => {
  return a + b;
};

export default sum;
