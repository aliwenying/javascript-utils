// 算法原理
// 问题描述 洗牌算法是常见的随机问题；它可以抽象成：得到一个M以内的所有自然数的随机顺序数组。
// 常见问题描述：

// 1.将自然数1 ～ 100随机插入到一个大小为100的数组，无重复元素

// 1 ～ 52张扑克牌重新洗牌

// 什么是好的洗牌算法：

// 洗牌之后，如果能够保证每一个数出现在所有位置上的概率是相等的，那么这种算法是符合要求的；这在个前提下，尽量降低时间和空间复杂度。

// ————————————————

// 费雪耶茨算法（Fisher-Yates shuffle），用来将一个集合随机排列，常用在扑克洗牌，打乱抽奖奖池等场景中。

// 使用 Fisher-Yates 算法打乱顺序，得到的每种排列都是等概率的。Fisher-Yates 算法运行时不占用额外的存储空间，消耗的时间正比于需要打乱的数的数量，改良后的算法时间复杂度仅有O(n)。

//随机打乱顺序
function shuffle(arr) {
  let result = arr;
  let j;
  for (let i = result.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}