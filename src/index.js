import { en, no } from './stopwords'
import nGram from './helpers/nGram'

const stopWordsByLangMap = { en, no }
const defaultLang = 'en'
const splittingRegExp = new RegExp(/[&\/\\#.,!?+() $~%:*<>{}]/g)

const getTokens = (query, lang) => {
  const stopwords = lang ? stopWordsByLangMap[lang] : defaultLang
  const queryWords = query && query.split(splittingRegExp)
  const filteredWords = queryWords && queryWords.filter(word => word !== '')
  const wordsFormatted =
    filteredWords && filteredWords.map(word => word.toLowerCase())
  const tokens = wordsFormatted.filter(word => !stopwords[word])

  return [...new Set(tokens)]
}

const getBigram = tokens => nGram.bigram(tokens)
const getTrigram = tokens => nGram.trigram(tokens)

export { getTokens, getBigram, getTrigram }
