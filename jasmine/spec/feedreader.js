$(function() {
    describe('RSS Feeds', function() {
        /* check whether allFeeds are defined 
         * and the length of allFeeds is greater than 0
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* check whether url is undefined in the object 
         * and url is not empty
         */
		it('URL is not empty', function() {
            allFeeds.forEach(function(i){
            	 expect(i.url).toBeDefined(true);
                 expect(i.url).not.toBe('')
            })
        });
        /* check whether name is undefined in the object 
         * and name is not empty
         */
    	it('name is not empty', function() {
            allFeeds.forEach(function(i){
                 expect(i.name).toBeDefined(true);
                 expect(i.name).not.toBe('')
            })
        });
    });

    describe('The menu', function() {
        /* get the inicial value of whether body has class .menu-hidden 
         * check whether body has class .menu-hidden 
         * to ensure the menu is hidden
         */
        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
		/* click twice 
		 */
        it("click and the menu show and click again and then menu hidden.", function() {
        	$('.menu-icon-link').trigger("click");
        	expect($("body").hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        /* get the value of feed
         * and then check where entry in the dom is greater than 0
         */
        beforeEach(function(done) {
            loadFeed(0,done);
        });
        it("at least a single .entry element within the .feed container", function() {
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        /* get the value of feed one after another
         * compare two feed to check whether the content actually changes.
         */
        var b="",a="";
        beforeEach(function(done) {
            loadFeed(0,function(){
                b=$(".feed").html();
                loadFeed(1,function(){
	                a=$(".feed").html();
	                done();
	            });
            });
        });
        it(" when a new feed is loaded by the loadFeed function that the content actually changes.", function() {
            expect(b).not.toBe(a);
        });
    });
}());
