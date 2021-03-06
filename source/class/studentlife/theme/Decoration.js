/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("studentlife.theme.Decoration",
{
  extend : qx.theme.modern.Decoration,

  decorations :
  {
    "rootBackground" :
    {
      decorator : qx.ui.decoration.Background,
 
      style :
      {
        backgroundImage  : "/home/mike/git/tests/StudentLife/source/resource/studentlife/bg.png",
        backgroundRepeat : "repeat-x"
      }
    }, 

    "logo" :
    {
      decorator : qx.ui.decoration.Background,
 
      style :
      {
        backgroundImage  : "/home/mike/git/tests/StudentLife/source/resource/studentlife/logo.png"
      }
    },

    "separator-horizontal" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        
	baseImage : "/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png"
	//backgroundRepeat : "no-repeat",
	//backgroundPositionY: "bottom"
	
      }
    },

    "ad-background" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        backgroundImage  : "/home/mike/git/tests/StudentLife/source/resource/studentlife/bg-adcontainer.png",
        backgroundRepeat : "repeat-x"
	
      }
    },

    "menu-background" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        backgroundImage  : "/home/mike/git/tests/StudentLife/source/resource/studentlife/bg-menu.png"
        
	
      }
    }

  }

});