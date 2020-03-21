# Query tokenizer

This package can help you to extract keywords (tokens) from search query ⚡️

------------

### ➡️ Installation

`npm install --save query-tokenizer`

or 

`yarn add query-tokenizer`

------------

### ➡️ Usage

To import package write

`import { getTokens, getBigram, getTrigram } from 'query-tokenizer'`

Than

`const tokens = getTokens('I am looking for javascript developer who knows reactjs', 'en')`

Where first parameter - query and second one - lang.

It will return array with keywords

`['javascript', 'developer', 'reactjs']`

To get Bigram write

`const bigrams = getBigram(['javascript', 'developer', 'reactjs'])`

It will return 

`[['javascript', 'developer'], ['developer', 'reactjs']]`

The same with trigram

------------

### ➡️ Suported languages

1. English
2. Norwegian

------------

### ➡️ Contribution

If you're reading this, you're awesome! Thank you for helping us make this project great. Here are a few guidelines that will help you along the way.

[Contributor covenant](https://www.contributor-covenant.org/ "Contributor covenant")

[How to contribute to an open-source project on Github](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

------------

### ➡️ License

This project is licensed under the terms of the MIT license.