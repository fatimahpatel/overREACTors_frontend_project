# Biblion

<h3>Front-end React app based on merge no-conflict's online bookshelf API, made by The OveREACTors.</h3>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

**Open and run back-end API in IntelliJ:**

  1.	Clone API from GitHub: https://github.com/nadia-dj98/online_bookshelf_group_6
  2.	Create local database called “bookshelf_api”: 
         -	In Terminal: `creatdb bookshelf_api`
  3.	Run on http://localhost:8080

**Open and run front-end project in VSCode:** 

  1.	Clone project from GitHub: https://github.com/fatimahpatel/overREACTors_frontend_project
  2.	Install node modules: 
        -	In Terminal: `npm i` or `npm install`
  3.	Run on http://localhost:3000:
        -	In Terminal: `npm start`

## Routes

The following are the Routes available on the React app, configured using the React Router library:

Landing page: `http://localhost:3000`

Books: `http://localhost:3000/books`

Contact: `http://localhost:3000/contact`

## Postman 

The following allows you to download all of the API requests (Get, Post, Put and Delete) for use in Postman:

`Bookshelf_API.postman_collection`

To use:

1. Import 'Bookshelf_API.postman_collection' into Postman: File > Import > Choose Files > 'Bookshelf_API.postman_collection'


## Data 

<h3>Authors</h3>

        Author maryShelly = new Author("Mary Shelly", LocalDate.of(1797, 8, 30), "United Kingdom", false);
        authorService.addNewAuthor(maryShelly);
        Author williamGolding = new Author("William Golding", LocalDate.of(1911, 9, 19), "United Kingdom", true);
        authorService.addNewAuthor(williamGolding);
        Author angieCruz = new Author("Angie Cruz", LocalDate.of(1972,2, 24), "United States of America", false);
        authorService.addNewAuthor(angieCruz);
        Author sayakaMurata = new Author("Sayaka Murata", LocalDate.of(1979,8, 14), "Japan", true);
        authorService.addNewAuthor(sayakaMurata);
        Author hanneloreCayre = new Author("Hannelore Cayre", LocalDate.of(1963,2, 24), "France", false);
        authorService.addNewAuthor(hanneloreCayre);
        Author andreAciman = new Author("Andre Aciman", LocalDate.of(1951,1,2), "Egypt", true);
        authorService.addNewAuthor(andreAciman);
        Author jKRowling = new Author("J.K Rowling", LocalDate.of(1965,7,31), "United Kingdom", true);
        authorService.addNewAuthor(jKRowling);
        Author trentonLeeStewart = new Author("Trenton Lee Stewart", LocalDate.of(1970,5,27), "United States of America", true);
        authorService.addNewAuthor(trentonLeeStewart);
        Author johnBoyne = new Author("John Boyne", LocalDate.of(1971,4,30), "Ireland", true);
        authorService.addNewAuthor(johnBoyne);
        Author johnSteinbeck = new Author("John Steinbeck", LocalDate.of(1902,2,27), "United States of America", true);
        authorService.addNewAuthor(johnSteinbeck);
        Author harperLee = new Author("Harper Lee", LocalDate.of(1926,4,28), "United States of America", true);
        authorService.addNewAuthor(harperLee);
        Author bellaMackie = new Author("Bella Mackie", LocalDate.of(1983,7,28), "United Kingdom", true);
        authorService.addNewAuthor(bellaMackie);

<h3>Books</h3>

        Book frankenstein = new Book("Frankenstein", maryShelly, 12, "Horror");
        bookService.addBook(frankenstein);
        Book lordOfTheFlies = new Book("Lord of the Flies", williamGolding, 15, "Contemporary");
        bookService.addBook(lordOfTheFlies);
        Book dominicana = new Book("Dominicana", angieCruz, 15, "Contemporary");
        bookService.addBook(dominicana);
        Book theGodMother = new Book("The Godmother", hanneloreCayre, 15, "Thriller");
        bookService.addBook(theGodMother);
        Book convenienceStoreWoman = new Book("Convenience Store Woman", sayakaMurata, 15, "Literary Fiction");
        bookService.addBook(convenienceStoreWoman);
        Book callMeByYourName = new Book("Call Me By Your Name", andreAciman, 15, "Romance" );
        bookService.addBook(callMeByYourName);
        Book harryPotterPhilosophers = new Book("Harry Potter and the Philosopher's Stone", jKRowling, 11, "Fantasy");
        bookService.addBook(harryPotterPhilosophers);
        Book harryPotterChamber = new Book("Harry Potter and the Chamber of Secrets", jKRowling, 11, "Fantasy");
        bookService.addBook(harryPotterChamber);
        Book harryPotterPrisoner = new Book("Harry Potter and the Prisoner of Azkaban", jKRowling, 11, "Fantasy");
        bookService.addBook(harryPotterPrisoner);
        Book harryPotterGoblet = new Book("Harry Potter and the Goblet of Fire", jKRowling, 11, "Fantasy");
        bookService.addBook(harryPotterGoblet);
        Book mysteriousBenedictSociety = new Book("Mysterious Benedict Society", trentonLeeStewart, 11, "Adventure");
        bookService.addBook(mysteriousBenedictSociety);
        Book boyInStripedPyjamas = new Book("The Boy in the Striped Pyjamas", johnBoyne, 12, "Historical");
        bookService.addBook(boyInStripedPyjamas);
        Book ofMiceAndMen = new Book("Of Mice and Men", johnSteinbeck, 15, "Tragedy");
        bookService.addBook(ofMiceAndMen);
        Book toKillAMockingbird = new Book("To Kill a Mockingbird", harperLee, 12, "Southern Gothic");
        bookService.addBook(toKillAMockingbird);
        Book howToKillYourFamily = new Book("How To Kill Your Family", bellaMackie, 18, "Dark Comedy");
        bookService.addBook(howToKillYourFamily);

<h3>Reader</h3>

        Reader nadia = new Reader("Nadia", "nadia.dj@hotmail.com", LocalDate.of(1998, 9, 12));
        readerService.addNewReader(nadia);
        Reader yasmine = new Reader("Yasmine", "yasmine.dj@hotmail.com", LocalDate.of(1996, 12, 1));
        readerService.addNewReader(yasmine);
        Reader sarah = new Reader("Sarah", "sarah.dj@hotmail.com", LocalDate.of(2011, 06, 7));
        readerService.addNewReader(sarah);
        Reader noorah = new Reader("Noorah", "noorah.dj@hotmail.com", LocalDate.of(2001, 01, 1));
        readerService.addNewReader(noorah);
        Reader amy = new Reader("Amy", "amy@hotmail.com", LocalDate.of(1999, 4, 3));
        readerService.addNewReader(amy);
        Reader bav = new Reader("Bav", "bav.@hotmail.com", LocalDate.of(2000, 01, 25));
        readerService.addNewReader(bav);
        Reader davis = new Reader("Davis", "dave@yahoo.com", LocalDate.of(2007, 03, 15));
        readerService.addNewReader(davis);
        
<h3>Reviews</h3>

        reviewService.addReview(new ReviewDTO(StarRating.FOUR_STAR,"Why did George kill Lenny?", bav.getId(), ofMiceAndMen.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.FIVE_STAR, "Brought me back to my childhood", amy.getId(), harryPotterPhilosophers.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.TWO_STAR, "The film was better", nadia.getId(), callMeByYourName.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.FOUR_STAR, "this novel is charmingly eccentric and the idiosyncrasies of the prose unfurl an odd, hauntingly beautiful story", nadia.getId(), convenienceStoreWoman.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.FIVE_STAR, "Loved it", nadia.getId(), frankenstein.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.ONE_STAR, "I hate it, so boring", bav.getId(), toKillAMockingbird.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.THREE_STAR, "A quirky and fun read but 'Lemony Snicket's A series of unfortunate events' was better", yasmine.getId(), mysteriousBenedictSociety.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.THREE_STAR, "meh", yasmine.getId(), harryPotterGoblet.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.FIVE_STAR, "Best book to ever to written", noorah.getId(), harryPotterGoblet.getId()));
        reviewService.addReview(new ReviewDTO(StarRating.FIVE_STAR, "Don't tell anyone I read this book!", davis.getId(), howToKillYourFamily.getId()));
    }
