# Project Overview

In this project we are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# What does Jasmine do?
Testing a Feed Reader app using Jasmine testing framework.


# Test Cases

1. Suite - RSS Feeds:
* Test to verify that all variable has been defined.
* Test to verify that all URLs are defined and not empty.
* Test to verify that all feeds have names defined and names are not empty.

2. Suite - The Menu:
* Test to verify that menu is changing the visibility:
- visible when menu icon is clicked.
- hidden when menu icon is clicked again.

3. Suite - Initial Entries:
* Test to verify that loadFeed function is called and comletes its work, there is at least a sinle .entry element within the .feed container.

4. Suite - New Feed Selection:
* Test to verify that when a new feed is loaded by the loadFeed function that the content actually changes.

# Run the application
open index.html file, then you will see page of feeds contains Jasmine program. Click of each spec to check out if there are any problem. If the green colore arise, there are no problem in the page. Also, the red colore if its appear thats mean you have a problem. 
app.js and feedreader.js, these two files you should find an fix the problem in it.
