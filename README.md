# Articles Application Using Angular and Laravel by LEEROY MUBAIWA

This is a project that integrates Angular and Laravel to create an articles application that allows users to perform all CRUD (Create, Read, Update, Delete) operations on articles.

## Requirements

To run this project, you will need to have the following installed on your system:

- PHP >= 7.3
- MySQL >= 5.7
- Composer
- Node.js >= 12.0
- Angular CLI

## Installation

To get started, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the root directory of the project.
3. Run `composer install` to install the PHP dependencies.
4. Create a new MySQL database for the project.
5. Copy the `.env.example` file and rename it to `.env`.
6. Update the database configuration in the `.env` file with your MySQL credentials.
7. Run `php artisan key:generate` to generate a new application key.
8. Run `php artisan migrate` to run the database migrations.
9. Run `npm install` to install the front-end dependencies.
10. Run `ng serve` to start the Angular development server.
11. In a separate terminal window, run `php artisan serve` to start the Laravel development server.

## Usage

Once the installation is complete, you can access the application by visiting `http://localhost:4200` in your web browser.

The application allows users to:

- View a list of all articles
- View a single article
- Create a new article
- Edit an existing article
- Delete an article

## Folder Structure

The project follows a standard Laravel folder structure, with the Angular front-end code located in the `resources/angular` directory. The front-end code is built using the Angular CLI, and the resulting files are stored in the `public` directory.

## Conclusion

This project demonstrates how to integrate Angular and Laravel to create a full-featured articles application. With this application, users can perform all CRUD operations on articles, making it a great starting point for building more complex applications.
