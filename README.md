# Talon One QA Task

### Instructions

In order to run the app, you will need to Git, Node and NPM:

#### Local environment setup

1. Install [Git](https://git-scm.com/) if you don't have it installed.
1. Install [the latest LTS version of NodeJS](https://nodejs.org/en/) if you don't have it installed.
1. NPM should be installed (after installing NodeJS) 

3. Clone this repository to your local machine by:

   1. Copying the Git URL:

      <img width="400" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/81acb0a0-fa29-459d-9203-c59e2e4cc157">
      
   1. Open a Terminal

   1. Running the command (where `url` is the URL you copied above):

      ```bash
      git clone [url]
      ```

1. Run `cd talon-one-qa-task` to open the project folder.
1. Run `npm i` to install the project dependencies.
1. Run `npm start` to start the application on http://localhost:3000.

### Running the tests:
 
 To run the tests you have two options:
 
#### Newman
 
 You can run the tests from the command line. This option uses the Newman runner to execute the tests with each request and its tests displayed in the terminal with a summary of the test run at the end.

 To run the tests:
1. The application must be running
2. Open the Terminal
3. Run `cd talon-one-qa-task` to open the project folder
4. Run `npm run tests`
5. Sample output: 
  <img width="400" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/039c8fdb-bfe6-4ec7-8c25-3f0a82507edb">

#### Postman
 You can run the tests with the Postman app, using the collection runner or manually sending each request.
 
1. Download and install [Postman](https://www.postman.com/downloads/) if you don't have it installed.
2. Launch Postman
3. Import the collection file: `regression-tests.postman_collection.json`
4. Import the environment file: `local.postman_environment.json`
