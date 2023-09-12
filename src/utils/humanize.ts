const humanize = (num: number): string => {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five'];
    if (num < 0) throw new Error('Negative numbers are not supported.');
    return ones[num];
  };
  
export default humanize;