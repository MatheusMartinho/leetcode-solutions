// Função que recebe um array de números e um valor alvo (target)
// Retorna as POSIÇÕES dos dois números que somados dão o target
function twoSum(nums: number[], target: number): number[] {
  
  // Cria um "caderninho" (Map) pra guardar:
  // - Chave: o número que você já viu
  // - Valor: a posição (index) dele no array
  // Exemplo: se viu o número 2 na posição 0, guarda {2: 0}
  const map = new Map<number, number>();
  
  // Loop: passa por cada número do array, um por vez
  // i é a posição atual (index)
  for (let i = 0; i < nums.length; i++){
    
    // Pega o número atual que você tá olhando
    // Ex: se i=0 e array=[2,7,11,15], então num=2
    const num = nums[i];
    
    // Calcula: "Quanto falta pra chegar no target?"
    // Ex: se target=9 e num=2, então complement=7
    // Tradução: "Preciso achar o número 7 pra somar com 2 e dar 9"
    const complement = target - num;
    
    // Pergunta pro caderninho: "Eu já vi esse complement antes?"
    // Ex: "Eu já passei pelo número 7 em alguma posição anterior?"
    if(map.has(complement)){
      
      // ACHOU! Encontrou os dois números que somam o target
      // Retorna as DUAS POSIÇÕES:
      // - map.get(complement) = posição onde viu o complement antes
      // - i = posição atual
      // Ex: se achou 7 na posição 1 e tá no 2 na posição 0, retorna [1,0]
      // O "!" força TypeScript aceitar que o valor existe (ignora por enquanto)
      return [map.get(complement)!,i];
    }
    
    // Se NÃO achou o complement, anota no caderninho:
    // "Eu vi o número [num] na posição [i]"
    // Ex: viu o 2 na posição 0, anota {2: 0}
    // Assim, quando encontrar o 7 depois, vai lembrar que viu o 2 antes
    map.set(num,i);
  }
  
  // Se chegou aqui, não achou nenhuma combinação (mas no LeetCode sempre tem solução)
  return [];
}

// ========== TESTES ==========

// Teste 1: [2,7,11,15] com target 9
// Resposta esperada: [0,1] porque 2+7=9
console.log("Teste 1:", twoSum([2,7,11,15],9));

// Teste 2: [3,2,4] com target 6
// Resposta esperada: [1,2] porque 2+4=6
console.log("Teste 2:", twoSum([3,2,4],6));

// Teste 3: [3,3] com target 6
// Resposta esperada: [0,1] porque 3+3=6
console.log("Teste 3:", twoSum([3,3],6));


// Rodando: twoSum([2,7,11,15], 9)

// RODADA 1 (i=0):
// num = 2
// complement = 9 - 2 = 7  → "Preciso achar o 7"
// map.has(7)? NÃO (Map tá vazio: {})
// map.set(2, 0)  → Map vira: {2: 0}
// Continua...

// RODADA 2 (i=1):
// num = 7
// complement = 9 - 7 = 2  → "Preciso achar o 2"
// map.has(2)? SIM! (Map tem {2: 0})
// return [0, 1]  → ACHEI! ✅
// FIM