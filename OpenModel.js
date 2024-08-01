let BibleModel = require('../BibleModel/Bible');
let theOpenModel;
let theBooks;

class OpenModel {
    constructor(){
        this.BibleModel = BibleModel;
        this.books = BibleModel.books;

    console.log('BibleModel has been loaded.');

    }

theOpenModel = new OpenModel();

theBooks = theOpenModel.BibleModel.Book.books;

// console.log(theBooks);

}
