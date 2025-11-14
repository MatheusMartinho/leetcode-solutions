function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++){
    const num = nums[i];
    const complement = target - num;
    if(map.has(complement)){
      return [map.get(complement)!,i];
    }
    map.set(num,i);
  }
  return [];
}

// Testes
console.log("Teste 1:", twoSum([2,7,11,15],9));
console.log("Teste 2:", twoSum([3,2,4],6));
console.log("Teste 3:", twoSum([3,3],6));