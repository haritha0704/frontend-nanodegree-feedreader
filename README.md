##Feed Reader Jasmine Testing

###Synopsis
  
  The main goal of this project is to write a test script based on Jasmine for a feedreader.
This goal was achieved by writing the following tests.

Tests

1. RSS Feeds Test Suite

      -Test to make sure allFeeds variable has been defined.
  
      -Test to ensure a URL has been defined and not empty for each allFeeds object.
  
      -Test to ensure it has a name defines and not empty for each allFeeds object.

 2. The menu Test Suite
      
      a)test to ensure the menu element is hidden by default.
      
      b)Test to ensure the menu changes visibility when menu icon is clicked.

 3. Initial Entries test suite
   
    a)Test to check that there is at least 1 .entry element in the feed container after loadFeed function is called.

 4. New Feed Selection Test Suite
  
    a)Test to ensure when a new feed is loaded by loadFeed function content actually changes.
