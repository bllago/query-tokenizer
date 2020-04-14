import { en, no } from './stopwords';
import allStopwords from './stopwords/all';
import nGram from './helpers/nGram';

const stopWordsByLangMap = { en, no };
const defaultLang = 'en';
const emailRegExp = new RegExp(/\S+[a-z0-9]@[a-z0-9\.]+/img);
const splittingRegExp = new RegExp(/[&/\\#.,!?+() $~%:*<>{}]/g);

const getTokensByLang = (query, lang) => {
  const stopwords = lang ? stopWordsByLangMap[lang] : defaultLang;
  const queryWords = query && query.split(splittingRegExp);
  const filteredWords = queryWords && queryWords.filter(word => word !== '');
  const wordsFormatted = filteredWords && filteredWords.map(word => word.toLowerCase());
  const tokens = wordsFormatted && wordsFormatted.filter(word => !stopwords[word]);

  return tokens ? [...new Set(tokens)] : [];
};

const getBigram = tokens => nGram.bigram(tokens);
const getTrigram = tokens => nGram.trigram(tokens);

const getTokens = (query) => {
  const stopwords = allStopwords;
  const extractedEmails = query.match(emailRegExp);
  const queryWords = query && query.split(splittingRegExp);
  const filteredWords = queryWords && queryWords.filter(word => word !== '');
  const wordsFormatted = filteredWords && filteredWords.map(word => word.toLowerCase());
  const tokens = wordsFormatted && wordsFormatted.filter(word => !stopwords[word]);
  const allTokens = extractedEmails && tokens ? [...extractedEmails, ...tokens] : tokens;
  const bigrams = getBigram(allTokens);
  const trigrams = getTrigram(allTokens);
  const resultTokens = allTokens && [...allTokens, ...bigrams, ...trigrams];

  return resultTokens ? [...new Set(resultTokens)] : [];
};

export {
  getTokens, getTokensByLang, getBigram, getTrigram
};
