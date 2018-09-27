## Phorest Assignment 
--------

* This assignment was created using React.js 
* I did not use bootstrap for the CSS, I designed that myself using CSS modules
* I used create-react-app to create the project. This helped ensure the project was structured correctly, had all the correct dependencies and so on. 

[The application can be found hosted on firebase here](https://phorest-assignment.firebaseapp.com/)

---------

The project is structured like so:
* Stateful components are found in the containers directory - as these are the components with the main logic, I have commented most of the functions in these components
* Stateless or Functional components are found in the components directory 
* Higher Order Components (HOC) - components which are used to order other components, such as the Layout component, 
can be found in the hoc directory. 

-------

My aim for this project was to try and make use of components as regulary as possible, designing with scalabilty in mind. Any time I used something whether it be a dropdown or a modal, I thought if it could be used again in the application, if the application was bigger and had more functionality, then it made sense to turn that into a reusable component. 

------

I also wanted to create a webapp that is responsive in design to the best of my abilities. For this I used media queries to also design the look of the application for mobile devices. When in browser, if you toggle the view to mobile device, you will see that the components adjust accordingly. 

------

I left a console.log() statement in for when the voucher is posted so that you can see the response status 201
from the API.

-------

I did include some small unit tests, however I have only begun to teach myself react in the past 3 weeks and I'm 
not as familiar with the testing framework jest as I would like to be. 


-----

For strictly display purposes, I have included a button at the bottom of the home page that allows the user to display
normal names instead of the ones returned from the API, as some of them are primarily just a long series of digits


--------

Thank you for taking the time to review my submission. 