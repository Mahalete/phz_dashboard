# Test descriptions

## App.js

## Components

### DataPage.js

1. There is a table

#### PageChanger

1. When clicking the arrow to right the page number increments (if there is more data).
2. When clicking the arrow to left the page number decrements (if it is not the first page).
3. When clicking the arrow to right the table shows next 10 data objects in the table (less if there is not 10).
4. When clicking the arrow to left the table shows previous 10 data objects in the table.

#### Sorting

1. When clicking Date arrow table shows the data in date order starting from oldest.
2. When clicking ID arrow table shows the data in the order of the id's starting from smallest id (Default).
3. When clicking Score arrow table shows the data in the order of the scores starting from the smallest score

#### DateChanger

1. When date is inserted in the format of 2022-01-01 it returns date in format 01.01.2022.
2. When date is inserted in the format of 2016-09-10 it returns date in format 10.09.2016.
3. When date is inserted in the format of 2010-12-28 it returns date in format 28.12.2010.

### CommentPage.js

### Dashboard.js

### GraphPage.js

### IntegrationPage.js

1. There is h1 with a text "Please copy the code below and add to your own webpage!".
2. There is instructions "You can adjust the size the of survey on your page by changing the
   values in the <iframe min-height: 100vh" width="100%">".
3. There is div with text including "</iframe>"
4. There is button with a text "Click here to copy!"
5. When you click the button you get following text on your clipboard: `<html lang="en"> <head> <meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <title>Survey</title> </head> <body style="min-height: 100vh"> <iframe src="https://6250087de54f4a00086ddc56--profound-pithivier-7c3ab2.netlify.app/" style="border: none; min-height: 100vh" width="100%" ></iframe> </body> </html>`

### SettingsPage.js
