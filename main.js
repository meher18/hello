function openSideNav()
{
    document.getElementById("sidenav").style.transform="translateX(0%)"
    setTimeout(()=>{
      document.getElementById("closeSideNavButton").style.transform =
        "rotate(360deg)";
         document.getElementById("openSideNavButton").style.opacity = "0";
    },300)
}
function closeSideNav()
{
    document.getElementById("sidenav").style.transform="translateX(-100%)"
    
     document.getElementById("openSideNavButton").style.opacity = "1";
     document.getElementById("closeSideNavButton").style.transform =
       "rotate(0deg)";
}