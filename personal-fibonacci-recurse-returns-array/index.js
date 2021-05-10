function fibonacci(num, result = [0, 1], index = 1) {
  if (!Number.isInteger(num)) return null;
  if (Math.sign(num) === -1) return null;
  if (num < 2) return result.slice(0, num + 1);
  if (index == num) return result;
  return fibonacci(
    num,
    result.concat(result[index] + result[index - 1]),
    index + 1
  );
}
