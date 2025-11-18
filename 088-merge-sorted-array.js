// Função que JUNTA (merge) dois arrays ordenados em um só
// nums1: array principal (tem espaço extra no final com zeros)
// m: quantos números REAIS tem no nums1 (ignora os zeros extras)
// nums2: segundo array ordenado
// n: quantos números tem no nums2
// IMPORTANTE: Modifica o nums1 diretamente, não retorna nada
var merge = function (nums1, m, nums2, n) {
  
  // i = última posição dos números REAIS no nums1
  // Ex: nums1=[1,2,3,0,0,0] e m=3, então i=2 (apontando pro 3)
  let i = m - 1
  
  // j = última posição do nums2
  // Ex: nums2=[2,5,6] e n=3, então j=2 (apontando pro 6)
  let j = n - 1
  
  // k = última posição total do nums1 (onde tem os zeros extras)
  // Ex: nums1 tem 6 espaços total, então k=5 (última posição)
  // É aqui que vamos COMEÇAR a preencher (de trás pra frente!)
  let k = m + n - 1

  // Loop: enquanto ainda tem números no nums2 pra processar
  // Por que só checamos j? Porque se nums2 acabar, o resto do nums1 
  // já tá no lugar certo (já tá ordenado)
  while (j >= 0) {
    
    // Compara: qual é o MAIOR número entre os dois arrays?
    // i >= 0: ainda tem números no nums1 pra comparar?
    // nums1[i] > nums2[j]: o número do nums1 é maior que o do nums2?
    if (i >= 0 && nums1[i] > nums2[j]) {
      
      // O número do nums1 é MAIOR!
      // Coloca ele na posição k (começando do final)
      // Ex: se nums1[2]=3 e é maior, coloca 3 na última posição
      nums1[k] = nums1[i]
      
      // Move o ponteiro i uma posição pra esquerda
      // "Ok, já usei esse número, próximo!"
      i--
      
    } else {
      
      // O número do nums2 é MAIOR (ou nums1 já acabou, i < 0)
      // Coloca o número do nums2 na posição k
      // Ex: se nums2[2]=6 é maior, coloca 6 na última posição
      nums1[k] = nums2[j]
      
      // Move o ponteiro j uma posição pra esquerda
      // "Ok, já usei esse número do nums2, próximo!"
      j--
    }
    
    // Move o ponteiro k uma posição pra esquerda
    // "Preenchi essa posição, agora vou pra próxima (da direita pra esquerda)"
    k--
  }
  // Quando sair do loop, nums1 tá completamente ordenado!
}

// ========== TESTE ==========

// Array principal com 3 números reais [1,2,3] e 3 zeros extras pra caber o nums2
const nums1 = [1, 2, 3, 0, 0, 0]

// Junta nums1=[1,2,3] com nums2=[2,5,6]
// m=3 (três números reais no nums1)
// n=3 (três números no nums2)
merge(nums1, 3, [2, 5, 6], 3)

// Resultado esperado: [1,2,2,3,5,6]
// (nums1 foi modificado diretamente)
console.log(nums1)

// Estado inicial:
// nums1 = [1, 2, 3, 0, 0, 0]
//          ↑        ↑
//          i=2      k=5
// nums2 = [2, 5, 6]
//                ↑
//                j=2

// ========================================
// RODADA 1:
// Compara: nums1[2]=3 vs nums2[2]=6
// 3 > 6? NÃO! → Pega o 6 do nums2
// nums1[5] = 6
// nums1 = [1, 2, 3, 0, 0, 6]
//          ↑           ↑
//          i=2         k=4
// nums2 = [2, 5, 6]
//             ↑
//             j=1

// ========================================
// RODADA 2:
// Compara: nums1[2]=3 vs nums2[1]=5
// 3 > 5? NÃO! → Pega o 5 do nums2
// nums1[4] = 5
// nums1 = [1, 2, 3, 0, 5, 6]
//          ↑        ↑
//          i=2      k=3
// nums2 = [2, 5, 6]
//          ↑
//          j=0

// ========================================
// RODADA 3:
// Compara: nums1[2]=3 vs nums2[0]=2
// 3 > 2? SIM! → Pega o 3 do nums1
// nums1[3] = 3
// nums1 = [1, 2, 3, 3, 5, 6]
//       ↑        ↑
//       i=1      k=2
// nums2 = [2, 5, 6]
//          ↑
//          j=0

// ========================================
// RODADA 4:
// Compara: nums1[1]=2 vs nums2[0]=2
// 2 > 2? NÃO! → Pega o 2 do nums2 (empate vai pro else)
// nums1[2] = 2
// nums1 = [1, 2, 2, 3, 5, 6]
//       ↑     ↑
//       i=1   k=1
// nums2 = [2, 5, 6]
//         ↑
//         j=-1

// ========================================
// j=-1 → Saiu do loop!
// nums2 acabou, então nums1 tá completo ✅
// Resultado final: [1, 2, 2, 3, 5, 6]