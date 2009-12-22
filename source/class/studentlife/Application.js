/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/* ************************************************************************

#asset(studentlife/*)
#requires(studentlife/Server)

************************************************************************ */

/**
 * This is the main application class of your custom application "StudentLife"
 */
qx.Class.define("studentlife.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      //var button1 = new qx.ui.form.Button("First Button", "studentlife/test.png");

      // Document is the application root
      var doc = this.getRoot();
			
      // Add button to document at fixed coordinates

      var main = new qx.ui.container.Composite();
      main.set({
	  width:760, 
	  height:578,
	  backgroundColor:"white",
	  decorator: "rootBackground"
      });


      var logo = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/logo.png");

      
      doc.add(main);
    
      main.setLayout(new qx.ui.layout.Canvas());

      main.add(logo, {right:22, top:15});

      var left = new qx.ui.container.Composite().set({width:154, backgroundColor:"white", maxHeight:447});
      left.setLayout(new qx.ui.layout.VBox());

      var mycourses = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/mycourses.png");
      left.add(mycourses);

      var list = ["Mathematik1", "Mikroteilchen 1 - Einführung in die Teilchenlehre", "Physik 2"];
      var active = [true, false, false];

      for (var x in list) {
	  this.courseItems(left, list[x], active[x]);
      }
      
/*
      var seperator = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png");
      var hbox2 = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png");
      

      var label1 = new qx.ui.basic.Label(").set({
	  //decorator: "separator-horizontal",
	  padding: [5,0,5,0]
      });
      var label3 = new qx.ui.basic.Label().set({
	  //decorator: "separator-horizontal",
	  padding: [5,0,5,0]
      });
      
      left.add(label1);
      left.add(hbox1);
      left.add(label2);
      left.add(hbox2);
      left.add(label3);
*/
      var right = new qx.ui.container.Composite().set({width:154, maxHeight:256});
      var alsoAttending = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/alsoattending.png");
      right.setLayout(new qx.ui.layout.VBox());
      var hSeparator = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png");
      right.add(alsoAttending);
      
      this.addAlsoAttending(right, "/home/mike/git/tests/StudentLife/source/resource/studentlife/testprofilepic1.png", "Gustav Klimt", "http://orf.at", "also attending 3 equal courses", "http://orf.at");
      this.addAlsoAttending(right, "/home/mike/git/tests/StudentLife/source/resource/studentlife/testprofilepic2.png", "Gustav Klimt", "http://orf.at", "also attending 3 equal courses", "http://orf.at");

      main.add(left, {top:73, left:17});
      main.add(this.menuContainer(), {top:32, left:17});
      main.add(this.adContainer("/home/mike/git/tests/StudentLife/source/resource/studentlife/payedAD.png"), {top:445, left:195});
      main.add(right, {top:73, right:23});

      var html = new qx.ui.embed.Html();
      //html.setHtml("<div class=\"typeface-js\" style=\"font-family: Apex New\">Text here in Apex New Medium...</div>");
      html.setHtml("<div class=\"typeface-js\" style=\"font-family: Apex New\">Text here in Apex New Medium...</div>");

      main.add(html, {top: 73, left: 195});
      
    },  //main

    courseItems : function(container, text, isActive) {
      var bgColor = "white";
      if (isActive) {
	bgColor = "#F6F6F6"
      }
      var hSeparator = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png");
      var label = new qx.ui.basic.Label(text) .set({
	  rich : true,
	  selectable: true,
	font : "default", //new qx.bom.Font(10, ["Verdana", "sans-serif"]),
	  //font : new qx.bom.Font(10, ["ApexNew-Medium", "sans-serif"]),
	  backgroundColor: bgColor,  
	  //decorator: "separator-horizontal",
	  padding: [5,0,5,0],
	  maxHeight:37,
	  width : 154,
	  toolTip: new qx.ui.tooltip.ToolTip(text),
	  textColor : "#303950"
      });

      container.add(label);
      container.add(hSeparator);
   },

   addAlsoAttending : function (container, image, name, link, info, addLink) {	
      var bgColor = "white";
      var item = new qx.ui.container.Composite(new qx.ui.layout.HBox());
      var hSeparator = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/columnborder.png");
      //item.setLayout(new qx.ui.layout.HBox());

      var imageContainer = new qx.ui.container.Composite();
      
      imageContainer.setLayout(new qx.ui.layout.VBox());

      imageContainer.set({	
	width:35,
	height:42
      });

      var image = new qx.ui.basic.Image(image);
      image.set({
	width : 30, 
	height : 30,
	scale: true,
	margin:[0,4,0,1]
      });
      
      imageContainer.add(new qx.ui.core.Widget(), {flex:1});
      imageContainer.add(image);
      imageContainer.add(new qx.ui.core.Widget(), {flex:1});

      var textInfoContainer = new qx.ui.container.Composite();
      textInfoContainer.setLayout(new qx.ui.layout.VBox());
      textInfoContainer.set({
	  maxHeight:56
      });

      var profileContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());
	  
      var profileLabel = new qx.ui.basic.Label(name) .set({
	  rich : true,
	  selectable: true,
	  //font : "default", //new qx.bom.Font(10, ["Verdana", "sans-serif"]),
	  font : new qx.bom.Font(10, ["Lucida Grande", "sans-serif"]).set({bold:true}),
	  backgroundColor: bgColor,  
	  //decorator: "separator-horizontal",
	  padding: [2,0,0,0],
	  textColor : "#264393"
	  
      });
      
      var closeContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas());

      var closeImage = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/cross.png").set({
	  padding:[0,0,0,0]
      });

      var hoverImage = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/cross-hover.png").set({
	  padding:[0,0,0,0]
      });

      closeContainer.addListener("mouseover", function(e) {
	  this.info("mouseover");
	  closeContainer.removeAll();
	  closeContainer.add(hoverImage);
      });
      closeContainer.addListener("mouseout", function(e) {
	  this.info("mouseout");
	  closeContainer.removeAll();
	  closeContainer.add(closeImage);
      });
      closeContainer.addListener("click", function(e) {
	  this.info("click");
	  _typeface_js.initialize()
	  //remove this item and refresh
      });

      closeContainer.add(closeImage);

      profileContainer.add(profileLabel, {top:0, left:0});
      profileContainer.add(closeContainer, {top:2, right:1});
      
      textInfoContainer.add(profileContainer);

      var infoLabel = new qx.ui.basic.Label(info) .set({
	  rich : true,
	  selectable: true,
	  //font : "default", //new qx.bom.Font(10, ["Verdana", "sans-serif"]),
	  //font : new qx.bom.Font(10, ["Verdana", "sans-serif"]),
	  backgroundColor: bgColor,  
	  //decorator: "separator-horizontal",
	  textColor : "#303950",
	  width:119
      });

      textInfoContainer.add(infoLabel);

      var addFriendLabel = new qx.ui.basic.Label("Add as friend").set({
	  rich : true,
	  selectable: true,
	  //font : "default", //new qx.bom.Font(10, ["Verdana", "sans-serif"]),
	  //font : new qx.bom.Font(10, ["Verdana", "sans-serif"]),
	  backgroundColor: bgColor,  
	  //decorator: "separator-horizontal",
	  padding: [0,0,4,0],
	  textColor : "#264393"
      });
      //addFriendLabe.addListener("execute", addLink);

      textInfoContainer.add(addFriendLabel);


      item.add(imageContainer);
      item.add(textInfoContainer);
      //item.add(closeImage, {top:0, right:0});

      container.add(item);
      container.add(hSeparator);

   },

   menuContainer : function() {
      var menuContainer = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({
	  height:14,
	  width: 493,
	  decorator: "menu-background"
      });

      var leftContainer = new qx.ui.container.Composite(new qx.ui.layout.Flow());

      var label = new qx.ui.basic.Label("ABC");
      var agendaImage = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/menu-agenda.png").set({
	  padding:[3,0,0,4]
      });
      var menuImage = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/menu-courses.png").set({
	  padding:[3,0,0,19]
      });

      leftContainer.add(agendaImage);
      leftContainer.add(menuImage);
       //leftContainer.add(label);

      var flowLayout = new qx.ui.layout.Flow();
      var rightContainer = new qx.ui.container.Composite(flowLayout);

      flowLayout.setAlignX("right");


      var courseSettingsImage = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/menu-coursesettings.png").set({
	padding:[4,0,0,0]
      });

      var menuVBorderImage = new qx.ui.basic.Image("/home/mike/git/tests/StudentLife/source/resource/studentlife/menu-vborder.png").set({
	padding:[1,6,0,6]
      });

      rightContainer.add(courseSettingsImage);
      rightContainer.add(menuVBorderImage);


      menuContainer.add(leftContainer, {top:0, left:0});
      menuContainer.add(rightContainer, {top:0, right:0});

      return menuContainer;
    },

   adContainer : function(image) {

      var outerContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      outerContainer.set({
	width:363,
	height:88
      });

      var adContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox());
      adContainer.set({
	width:363,
	height:76,
	decorator: "ad-background"
      });

      var image = new qx.ui.basic.Image(image);
      image.set({
	width:363,
	height:70
      });

      var payedAd = new qx.ui.basic.Label("payed ad").set({
	rich:true,
	selectable: true,
	textColor : "#434445",
	font : new qx.bom.Font(9, ["Lucida Grande", "sans-serif"]),
	padding: [1,0,0,0]
      });
      
      adContainer.add(new qx.ui.core.Widget(), {flex:1});
      adContainer.add(image);
      adContainer.add(new qx.ui.core.Widget(), {flex:1});

      outerContainer.add(adContainer);
      outerContainer.add(payedAd);

      return outerContainer;
   }


  }
});
