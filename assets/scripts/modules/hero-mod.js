(function ($) {
    function heroMod() {
        var heroObj = {
                presentaion:{
                    writeText: function(){
                        var name = "Sergiu Mare",
                        job = "Front-End Developer",
                        sirName = [],
                        sirJob = [],
                        $hero = $('.page-hero'),
                        $heroName = $hero.find('.page-hero-message .page-hero-message-name'),
                        $heroJob = $hero.find('.page-hero-message .page-hero-message-job'),
                        sirName = name.split(""),
                        sirJob = job.split(""),
                        emptyStringName = [],
                        emptyStringJob = [],
                        i = 0,
                        j = 0,
                        startNameInterval;
            
                        // make the braces visible
                        $hero.find('span.show').addClass('visible');
                
                        // initialise the name and the job description	
                        setTimeout(function () {
                            startNameInterval = setInterval(function () {
                                if (i < sirName.length) {
                                    emptyStringName += sirName[i];
                                    $heroName.text("" + emptyStringName + "");
                                    i++;
                                } else if (j < sirJob.length) {
                                    emptyStringJob += sirJob[j];
                                    $heroJob.text("" + emptyStringJob + "");
                                    j++;
                                } else {
                                    clearInterval(startNameInterval);
                                }
                            }, msp.cache.timer.veryFast);
                        }, msp.cache.timer.long);
                    }
                },
                init: function(){
                    heroObj.presentaion.writeText(); 
                }
        };

        heroObj.init();
    };

    $(document).ready(function () {
        msp.cache.$main.find('.page-hero').each(heroMod);
    });
})(jQuery);