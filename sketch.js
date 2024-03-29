//global variables that will store the toolboxm colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;
var img;

function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");
    
    var actualColour = 'black';
    var contents = "";

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    
    toolbox.addTool(new bucketTool());
    toolbox.addTool(new shapeTool());
    toolbox.addTool(new trailTool());
    
    toolbox.addTool(new eraserTool());
    toolbox.addTool(new stampTool());
    toolbox.addTool(new filterTool());
    
    pixelDensity(1);
    cursor(CROSS);
    background(255,255,255);
    

    img = loadImage('assets/windows.jpg');
    

    
    
}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user

	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
    
    

    
}


