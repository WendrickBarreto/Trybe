const assert = require('assert');

// 1
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = () => books.find(book => book.author.birthYear === 1947).author.name;

assert.equal(authorBornIn1947(), 'Stephen King');
// 2
const smallerName = () => {
  let nameBook = books[0].name;

  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}
assert.equal(smallerName(), 'Duna');

// 3
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
};

assert.deepEqual(getNamedBook(), expectedResult);
// 4
const expectedResult2 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  }
] ;

const booksOrderedByReleaseYearDesc = () => {
  return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
};

assert.deepEqual(booksOrderedByReleaseYearDesc(), expectedResult2);

// 5
const everyoneWasBornOnSecXX = () => {
  return books.every((book) => {
    book.author.birthYear > 1900 && book.author.birthYear <= 2000
  })
}

assert.equal(everyoneWasBornOnSecXX(), false);

// 6
const someBookWasReleaseOnThe80s = () => {
  return books.some(book =>
    book.releaseYear >= 1980 && book.releaseYear <= 1990)
};

assert.equal(someBookWasReleaseOnThe80s(), true);

// 7
const authorUnique = () => {
  return books.every((book)=>
    !books.some((bookSome)=> 
      (bookSome.author.birthYear === book.author.birthYear) && (bookSome.id !== book.id)
  ));
};

assert.equal(authorUnique(), false);