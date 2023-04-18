# runs the cypress interface on e2e testing and chrome as a browser
npx cypress open --e2e --browser chrome 

#cmd command to run and take screenshot of a test on failure
npx cypress run --spec testlocation 

# run tests on headed mode with chrome browser

npx cypress run --headed --spec testlocation --browser chrome