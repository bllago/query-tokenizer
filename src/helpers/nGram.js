function nGram(n) {
  if (typeof n !== 'number' || n < 1 || n === Infinity) {
    throw new Error(`\`${n}\` is not a valid argument for n-gram`);
  }

  function grams(value) {
    const nGrams = [];
    let index;

    if (value === null || value === undefined) {
      return nGrams;
    }

    const valueChecked = value.slice ? value : String(value);
    index = valueChecked.length - n + 1;

    if (index < 1) {
      return nGrams;
    }

    while (index) {
      nGrams[index] = valueChecked.slice(index, index + n);
      index -= 1;
    }

    return nGrams;
  }

  return grams;
}

nGram.bigram = nGram(2);
nGram.trigram = nGram(3);

export default nGram;
