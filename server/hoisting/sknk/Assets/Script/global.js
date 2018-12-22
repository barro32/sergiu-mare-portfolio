function fqgMod (){
    var $thisFqg = $(this),
        quoteObj = {
            cache:{
                $quoteHolder: $thisFqg.find('.generated'),
                $fqgCta: $thisFqg.find('.cta'),
                quote: ['" Fashion fades. Only Style remains the same. "', '" Color does not add a pleasant quality to design, it reinforces it. "', '" Good design doesn\'t date. "', '" I like the body. I like to design everything to do with the body. "', '" Marketing is a contest for people\'s attention. "', '" There\'s been not a dime spent on marketing for any record I\'ve ever put out. "', '" Design is not just what it looks like and feels like. Design is how it works. "', '" Any product that needs a manual to work is broken. "', '" I don\'t design clothes, I design dreams. "', '" Think 8 hours, work 2 hours. "', '" It took me a few seconds to draw it, but it took me 34 years to learn how to draw it in a few seconds. "', '" This is the web. Fix it. "', '" Graphic design will save the world right after rock and roll does. "', '" Digital design is like painting, except the paint never dries. "', '"Creativity is intelligence having fun. "', '" The consumer is not a moron, she is your wife. "', '" People don’t buy what you do, they buy why you do it. "', '" Marketing is no longer about the stuff that you make, but about the stories you tell. "', '" You can\'t sell anything if you can\'t tell anything. "', '" Speak to your audience in their language about what’s in their heart. "', '" Social media is a contact sport. "', '" If your content isn\'t driving conversation, you\'re doing it wrong. "', '" Making promises and keeping them is a great way to build a brand. "', '" Simplicity is the keynote of all true elegance. "', '" If you can\'t explain it to a 6-year old, you don\'t know it yourself. "', '" If you’re not failing now and again, it’s a sign you’re not doing anything innovative. "', '"Failure is simply the opportunity to begin again, this time more intelligently. "', '" Be where the world is going. "', '" Inspiration doesn\'t respond to meeting requests. You can\'t schedule greatness. "', '" If you aim at nothing, you will hit it every time. "', '" Whether you think you can or you think you can’t, you’re right. "', '" Be yourself. Everyone else is already taken. "', '" Do or do not; there is no try. "', '"The question isn’t who is going to let me; it’s who is going to stop me. "', '" It’s quite fun to do the impossible. "', '" Everyone is not your customer. "', '" If it doesn\'t sell, it isn\'t creative. "', '" Banners have 99 problems and a click ain’t one. "', '" Give them quality. That’s the best kind of advertising. "', '" In advertising, not to be different is virtually suicidal. "', '" Stopping advertising to save money is like stopping your watch to save time. "', '" Don’t build links. Build relationships. "', '" Your brand is not what you sell.”', '" Business has only two functions – marketing and innovation. "', '" Clients don’t care about the labor pains; they want to see the baby. "', '" What helps people, helps business. "', '" Behind every piece of bad content is an executive who asked for it. "', '" Content is fire, social media is gasoline. "', '" Content is king. "', '" Content marketing is all the marketing that’s left. "', '" Bad artists copy, good artists steal. "', '" Make the customer the hero of your story. "', '" Think like a customer. "', '" You can’t be everything to everyone, but you can be something to someone. "', '" Marketers have to stop reporting on activities and start reporting on business outcomes. "', '" Google will know that you are hungry for sushi before you do. "', '" You can’t just place a few ‘Buy’ buttons on your website and expect your visitors to buy. "', '" I have not failed. I’ve just found 10,000 ways that won’t work. "', '" The cost of being wrong is less than the cost of doing nothing. "'],
                quoteOwner: ['- Coco Chanel    ', '- Pierre Bonnard ', '- Harry Seidler  ', '- Gianni Versace ', '- Seth Godin     ', '- Skrillex       ', '- Steve Jobs     ', '- Elon Musk      ', '- Ralph Lauren   ', '- Mirko Ilic     ', '- Paula Scher    ', '- Luke Wroblewski', '- David Carson   ', '- Neville Brody  ', '- Albert Einstein', '- David Ogilvy   ', '- Simon Sinek    ', '- Seth Godin     ', '- Beth Comstock  ', '- Jonathan Lister', '- Margaret Molloy', '- Dan Roth       ', '- Seth Godin     ', '- Coco Chanel    ', '- Albert Einstein', '- Woody Allen    ', '- Henry Ford     ', '- Beth Comstock  ', '- Jay Baer       ', '- Zig Ziglar     ', '- Henry Ford     ', '- Oscar Wilde    ', '- Master Yoda    ', '- Ayn Rand       ', '- Walt Disney    ', '- Seth Godin     ', '- David Ogilvy   ', '- Scott Sorokin  ', '- Milton Hershey ', '- Bill Bernbach  ', '- Henry Ford     ', '- Rand Fishkin   ', '- John Iwata     ', '- Milan Kundera  ', '- Tim Williams   ', '- Leo Burnett    ', '- Michael Brenner', '- Jay Baer       ', '- Bill Gates     ', '- Seth Godin     ', '- Pablo Picasso  ', '- Ann Handley    ', '- Paul Gillin    ', '- Drew Davis     ', '- Allen Gannett  ', '- Ben Kunz       ', '- Neil Patel     ', '- Thomas Edison  ', '- Seth Godin'],
                timeoutTimer: {
                    fast: 300,
                    moderate: 600
                },
                lastGeneratedNumber: '' 
            },
            data: {
                generateNumber: function (){
                    return parseInt(Math.random() * 59);
                }
            },
            presentation:{
                lineShow: function (){
                    $thisFqg.find('.message-line').addClass('animate');
                    quoteObj.cache.$quoteHolder.addClass('slide-up-show');
                }
            },
            events: function (){
                quoteObj.cache.$fqgCta.on('click', function (){
                    var $ctaBackground = $(this).find('.image-button'),
                        $quoteSubTitles = quoteObj.cache.$quoteHolder.find('.sub-title'),
                        generateNewNumber = quoteObj.data.generateNumber();

                    $ctaBackground.addClass('rotate-180');

                    // the generated number has to be different compared to the last number
                    if(quoteObj.cache.lastGeneratedNumber === generateNewNumber){
                        while (quoteObj.cache.lastGeneratedNumber === generateNewNumber) {
                            generateNewNumber = quoteObj.data.generateNumber();
                        }
                    }
                    
                    quoteObj.cache.$quoteHolder.addClass('slide-up-hide');
                    setTimeout(function (){
                        $quoteSubTitles.first().text(quoteObj.cache.quote[generateNewNumber]);
                        $quoteSubTitles.last().text(quoteObj.cache.quoteOwner[generateNewNumber]);
                        quoteObj.cache.$quoteHolder.removeClass('slide-up-show slide-up-hide').addClass('slide-up-show');

                        $ctaBackground.removeClass('rotate-180');

                        // cache the last number
                        quoteObj.cache.lastGeneratedNumber = generateNewNumber;
                    }, quoteObj.cache.timeoutTimer.moderate);
                });

                quoteObj.cache.$fqgCta.one('mouseup', function (){
                    setTimeout(function (){
                        quoteObj.cache.$quoteHolder.addClass('re-align');
                    }, quoteObj.cache.timeoutTimer.moderate);
                });
            },
            init: function (){
                quoteObj.presentation.lineShow();
                quoteObj.events();
            }
        };

    quoteObj.init();
}

(function ($) {
    $(document).ready(function () {
        $('.fqg').each(fqgMod);
    });
})(jQuery);