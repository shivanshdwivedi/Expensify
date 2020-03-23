// jshint esversion: 6


const book = {

    title: 'Ego',
    author: 'Josh Vango',
    publisher: {
        name: 'Angelaa Kno'
    }
}

const {name : publisherName = 'Itself'} = book.publisher;

console.log(publisherName);



