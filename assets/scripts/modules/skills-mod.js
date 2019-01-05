(function ($) {
    function skillsMod() {
        var $thisSkillMod = $(this),
            $descriptionHolder = $thisSkillMod.find('.skills-description'),
            skillsObj = {
                cache:{
                    $skillsDetailer: $thisSkillMod.find('.skills-detailer'),
                    $descriptionElement: $descriptionHolder.find('.element'),
                    mouseEnterTimer: {},
                    clickTimer: {}
                },
                presentation: {
                    resetAccordion: function (){
                        skillsObj.cache.$descriptionElement.find('.text').slideUp();
                    }
                },
                events: {
                    module: function (){
                        // make the skills to highlight on hover
                        skillsObj.cache.$descriptionElement.on({
                            mouseenter: function () {
                                var $thisDescElem = $(this);
    
                                // functionality only for desktop
                                if (msp.cache.$window.width() > msp.config.breakpoints.X_MEDIUM_WIDTH) {                                                                        
                                    clearTimeout(skillsObj.cache.mouseOutTimer);
                                    skillsObj.cache.mouseEnterTimer = setTimeout(function () {
                                        // if th description is active then cancel the action 
                                        if (!$thisDescElem.hasClass('active')) {
                                            // if the description is not active, hide it change the text and show it afterwards
                                            skillsObj.cache.$skillsDetailer.children().fadeOut('fast', function () {                                            
                                                skillsObj.cache.$skillsDetailer.find('.sub-title').html($thisDescElem.find('.sub-title').html());
                                                skillsObj.cache.$skillsDetailer.find('.text').html($thisDescElem.find('.text').html());
                                                $(this).fadeIn();
                                            });
                                        }
                    
                                        // make the elements active, remove the active state from the siblings()
                                        $thisDescElem.addClass('active').siblings().removeClass('active');                                
                                    }, msp.cache.timer.fast);
                                }
                            }, 
                            click: function () {
                                var $thisDescElem = $(this);
        
                                // functionality only for mobile
                                if (msp.cache.$window.width() < msp.config.breakpoints.X_MEDIUM_WIDTH) {
                                    clearTimeout(skillsObj.cache.clickTimer);
                                    skillsObj.cache.clickTimer = setTimeout(function () {
                                        $thisDescElem.addClass('active').siblings().removeClass('active');
                                        $thisDescElem.find('.text').slideDown();
                                        $thisDescElem.siblings().find('.text').slideUp();
                                    }, msp.cache.timer.fast);
                                }
                            }
                        });
                    },
                    global: function (){
                        toolkit.scrollTimer.push(skillsObj.presentation.resetAccordion);
                    }
                },
                init: function (){
                    skillsObj.events.module();
                    skillsObj.events.global();
                }
            };
       
        skillsObj.init();
    };

    $(document).ready(function () {
        msp.cache.$main.find('.skills').each(skillsMod);
    });
})(jQuery);