# Exercises

## Exercise one

* Create a mock sales web page which asks the user for the following information:
    * Name of the user (as text)
    * Date of birth (as a date)
    * Telephone number
    * The item they want to order (as radio buttons – from a choice of 4 items)
    * The quantity they want to order (as a number)
    * The colour they want their item to be (as a colour picker)
* Add a “Review order” button outside of the form which retrieves and displays all the information on the form.

## Exercise two

* Create another web page (unrelated to the first) which has a button.  When clicked the page should:
    i. Display a list of the names of all the document’s child nodes.  This does not have to display names of the child nodes’ child nodes, just the root elements.
    ii. (Advanced) Traverse the DOM tree and display all child nodes’ child nodes.  Output every element on the page.  This can be done using a recursive function.  The desired output is that your page will show an html representation of your page.

## Exercise three

* Create a web page which asks the user for two strings
* After clicking a button, display which of the strings comes before the other, or if they’re equal

## Exercise four 

* Create a mock login form which receives the user’s name and password.
* When the user submits the page, the browser should go to a new page, passing the name and password as a POST message.  N.B.: Sending a password via POST is a really bad idea.  [Explanation of GET/POST](https://jasonmbaker.wordpress.com/2009/05/10/http-and-you/).
* If the user gets the password wrong, it should open up a whole new browser window with some kind of threatening message on it.