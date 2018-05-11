function changeText(str,ID,speed){
    var content=str.split("");
    var i=0;
    function show(){
        if(i<content.length){
            ID.append(content[i]);
            i++;
        }
    };
    var Otimer=setInterval(show,speed);	        
};
        
$(document).ready(function() {
    var ProfileImage = $('.ProfileImage');
    var infobox = $('.infobox');
    var text3 = $('#text3');
    var text4 = $('#text4');

    ProfileImage.fadeOut(0);           
    infobox.fadeOut(0);
    text3.fadeOut(0);
    text4.fadeOut(0);

    setTimeout(function(){
        infobox.fadeIn(0);
        setTimeout(function(){
            changeText("> ミリマス-P",$("#text0"),50);
            setTimeout(function(){
                changeText("> Novice-programmer",$("#text1"),25);
                setTimeout(function(){
                    changeText("> Undergraduate",$("#text2"),50);
                    setTimeout(function(){
                        text3.fadeIn(0);
                        setTimeout(function(){
                            ProfileImage.fadeIn(1000);
                            text4.fadeIn(1000);
                        },1000);
                    },800);
                },500);
            },500);
        },500);
    },0);
});