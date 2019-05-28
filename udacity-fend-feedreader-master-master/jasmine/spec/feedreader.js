
$(function() {
    
    describe('RSS Feeds', function() {
       
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
         it('Has a URL defined and They are not empty', function() {
            allFeeds.forEach(function(urlFeed) {
                expect(urlFeed.url).toBeDefined();
                expect(urlFeed.url.length).not.toBe(0);
            });
        });

        it('has name defined and they are not empty', function() {
            allFeeds.forEach(function(nameFeed) {
                expect(nameFeed.name).toBeDefined();
                expect(nameFeed.name.length).not.toBe(0);
            });
        });
    });


   
     describe('The menu', function() {  
         
            it('Is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
            });

        
            it('working toggles on click', function() {
            $('.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click'); 
            expect($('body').hasClass('menu-hidden')).toBe(true);
            });

         });
    
   
     describe('Initial Entries', function() {
      
          beforeEach(function(done) {
            loadFeed(0, function(){
                done();
            });
        });

        it('If entry have more than 0 entries', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });
               
  

        describe('New Feed Selection', function() {
         var firstFeed, secondFeed;
       
            beforeEach(function(done) {
                loadFeed(1, function() {
                firstFeed = $('.feed').html();
                    loadFeed(2, function() {
                            done();
                    });
                });        
            });
            afterEach(function() {
            loadFeed(0);
            });
            
            it('checks if two feeds are different', function() {
            secondFeed = $('.feed').html();
            expect(firstFeed).not.toEqual(secondFeed);
            }); 
         });
    
});
