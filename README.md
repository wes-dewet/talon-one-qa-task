# Talon One QA Task

### Instructions

In order to run the app, you will need to Git, Node and NPM:

#### Local environment setup

1. Install [Git](https://git-scm.com/) if you don't have it installed.
1. Install [NodeJS](https://nodejs.org/en/) if you don't have it installed.
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
1. If at any point the initial test data needs to be seeded again, run `npm run seeds`.

### Running the tests:
 
To run the tests you have two options **Newman** or **Postman**:
 
### Newman
 
You can run the tests from the command line. This option uses the Newman runner to execute the tests with each request and its tests displayed in the terminal with a summary of the test run at the end.

To run the tests:
1. The application must be running
2. Open the Terminal
3. Run `cd talon-one-qa-task` to open the project folder
4. Run `npm run tests`
5. Sample output: 
  <img width="400" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/039c8fdb-bfe6-4ec7-8c25-3f0a82507edb">

### Postman
 You can run the tests with the Postman app, using the collection runner or manually sending each request.
 
- Download and install [Postman](https://www.postman.com/downloads/) if you don't have it installed. 
- Launch Postman 
- Click the Import button at the top left of the app: 

<img width="270" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/d3352e97-f33c-4459-9ea4-66c7927cd2f5"> 

- Import the `regression-tests.postman_collection.json` file 
- Import the `local.postman_environment.json` file 

- Select the `Local` environment on the top right of the app: 

<img width="270" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/341a6f8e-e37c-475e-9b11-e4e9abd6f19e"> 

- Open a run from the collection sub-menu: 

<img width="270" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/0ba88f80-1b3c-420a-996d-3db12502b69b"> 

- Click on the Run Regression Tests button:

<img width="1854" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/e1e80a30-3714-4207-8dd0-26c090ae5671">
  
- Sample Result:

<img width="799" src="https://github.com/wkdewet/talon-one-qa-task/assets/11028293/7a3245e9-8448-4cc6-888d-2d88c7f94f93">



