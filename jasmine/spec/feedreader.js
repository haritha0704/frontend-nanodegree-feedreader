/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it(' urls are defined', function() {
            allFeeds.forEach(function(feed) {
                //checks if URL is defined
                expect(feed.url).toBeDefined();
                //checks if URL is not empty    
                expect(feed.url).not.toBe('');
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it(' names are defined', function() {
            allFeeds.forEach(function(feed) {
                //checks if name is defined
                expect(feed.name).toBeDefined();
                //checks if name is not empty
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden by default', function() {
            //checks if the menu element is hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu visibility changes on click', function() {
            //defines variable to be checked when clicked 
            var menuIcon = $('.menu-icon-link');
            //checks if menu-hidden is false when clicked the first time
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(false);
            //checks if menu-hidden is true when clicked the second time
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {


        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        // Before loading feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        // Load "loadFeed" function is called and completes it, and there
        // should at least 1 .entry element in the .feed contianer

        it("has at least 1 entry after loadFeed function is called", function() {
            //defines the to be checked entries
            var entries = $('.feed .entry');
            //expects that there is at least one entry
            expect(entries.length).not.toBe(0);

        });
    });


    /* TODO: Write a new test suite named "New Feed Selection"


        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */


    describe('New Feed Selection', function() {

        var CurrentContent;

        //Get the current content into a variable and load the new content
        beforeEach(function(done) {
            CurrentContent = $('.feed').html();
            loadFeed(1, function() {
                done();
            });
        });

        //Compare new content is not matching with the previously stored content 
        it('changes the content displayed', function(done) {
            var NewContent = $('.feed').html();
            expect(CurrentContent).not.toBe(NewContent);
            done();
        });
    });
}());