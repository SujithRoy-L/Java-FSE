package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookServiceDI;

public class MainAppDI {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContextDI.xml");

        BookServiceDI service =
                context.getBean("bookServiceDI", BookServiceDI.class);

        service.displayBook();

        ((ClassPathXmlApplicationContext) context).close();
    }
}