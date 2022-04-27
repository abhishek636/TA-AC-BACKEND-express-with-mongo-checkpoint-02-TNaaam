// JavaScript Document
//var frm=document.reg_frm;

function chkcookie(){
    if (navigator.cookieEnabled == 0) {
     // alert("You need to enable cookies for this site to load properly!");      
        //window.location='cookie_disabled.php';
        exit;
    }
}


function chkWindow(){
    //chkcookie();
    if(window.name!='ranjeet'){
        window.location='mainmenu2.php';
    }
}

function close_window() {
   close();
}

function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(c_name + "=");
         if (c_start!=-1)
        {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}


function getBrowserVersion()
{
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){ //test for MSIE x.x;
        var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
        if (ieversion>=8)
            return 'IE8';
         else if (ieversion>=7)
            return 'IE7';
         else if (ieversion>=6)
            return 'IE6';
        else if (ieversion>=5)
            return 'IE5';
    }else
     return 1;
}

