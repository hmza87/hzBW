var a=false;
(function ($) {
    alert(window.location.href);

    
    function hrefHandler(){
        this.oldhref = window.location.href;
        this.Check;

        var that = this;
        var detect = function(){
            loc = window.location.href;
            if (that.oldhref != loc){
                that.oldhref = loc;
                
                //do
            }
        };

        this.Check = setInterval(function(){ detect() }, 1000);
    }



    function getSite() {
        var loc = window.location.href;
        if (/^https?\:\/\/www\.youtube\.com\/watch\?v\=.*/.test(loc)) {
            return "youtube";
        }





    }

})(jQuery);


