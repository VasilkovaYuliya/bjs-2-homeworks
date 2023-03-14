class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type =null;
    }
           
    fix() {
    this.state *= 1.5;
    }

    set state (number) {
    if (number < 0) {
        this._state = 0;
    } else if (number > 100) {
        this._state = 100;
    } else {
        this._state = number;
    }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Второе задание //
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(book => book[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
       for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
            let remoteBook = this.books.splice(i, 1);
            return remoteBook[0];
        }
       }
       return null;
    }
}

// Третье задание //
class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

   addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
        console.log("Оценка не добавится, так как больше пяти");
    return;
        } 
    if (!this.marks[subject]) {
     this.marks[subject] = [];
        }
    this.marks[subject].push(mark);
    }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined || this.marks[subject].length === 0) {
        return 0;
        }
    let sum = this.marks[subject].reduce((acc, item) => acc + item, 0);
    return sum / this.marks[subject].length;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        let totalSum = subjects.reduce((acc, item) => acc + this.getAverageBySubject(item), 0);
        return totalSum / subjects.length;
    }
}


