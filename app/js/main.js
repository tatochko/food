$(function(){
    
    var Menu = {

        el: {
        ham: $('.header__btn'),
        menuTop: $('.header__btn-top'),
        menuMiddle: $('.header__btn-middle'),
        menuBottom: $('.header__btn-bottom')
        },
        
        init: function() {
        Menu.bindUIactions();
        },
        
        bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
            function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
            }
        );
        },
        
        activateMenu: function() {
        Menu.el.menuTop.toggleClass('header__btn-top-click');
        Menu.el.menuMiddle.toggleClass('header__btn-middle-click');
        Menu.el.menuBottom.toggleClass('header__btn-bottom-click'); 
        }
    };
    
    Menu.init();

    $('.header__btn-global').on('click', function() {
        $('.menu ul').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });

    });
    


	
});