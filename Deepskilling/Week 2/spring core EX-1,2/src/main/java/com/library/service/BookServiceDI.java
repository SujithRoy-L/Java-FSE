package com.library.service;

import com.library.repository.BookRepositoryDI;

public class BookServiceDI {

    private BookRepositoryDI bookRepository;

    public void setBookRepository(BookRepositoryDI bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayBook() {
        System.out.println("BookService using Dependency Injection");
        bookRepository.getBookDetails();
    }
}