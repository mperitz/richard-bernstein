import keys from 'lodash/keys';

export const extractPraises = (praisesObj) => praisesObj[keys(praisesObj)[0]];

export const removeSymbols = (string) => string.replace(/(<br>)|(<\/?i>)|(&mdash;)|(<\/?b>)|(&#160;)|(&rsquo;)|(&hellip)|(&quot;)|(&#[0-9]+);/g, '');

export const getRandomIndex = (length) => Math.floor((length - 3) * Math.random());

export const parsePraises = (unparsed) => {
  if (!unparsed) return [];
  const split = unparsed.split('&ldquo;').slice(1);
  return split.map((unparsedItem) => {
    const [quoteWithBr, quoteByWithBr] = unparsedItem.split('&rdquo;');
    const quote = quoteWithBr ? removeSymbols(quoteWithBr) : '';
    const quoteBy = quoteByWithBr ? removeSymbols(quoteByWithBr) : '';
    return { quote, quoteBy };
  });
};

/* eslint-disable no-underscore-dangle */
export const combineBookData = (books, praise, description) => {
  const hashMap = {};
  return books.map((book) => {
    const newBook = { ...book, praise: praise[book._id], description: description[book._id], imgSrc: book._links[1].href, repeat: hashMap[book.title] };
    hashMap[book.title] = true;
    return newBook;
  }).filter((book) => !book.repeat);
};

export const flattenAuthor = ({ spotlight, _links }) => ({
  about: removeSymbols(spotlight).replace(/&nbsp;/g, ' '),
  imgSrc: _links[0].href,
});
/* eslint-enable no-underscore-dangle */

export const immutableIsValue = (item, key, value) => item.get(key) === value;
