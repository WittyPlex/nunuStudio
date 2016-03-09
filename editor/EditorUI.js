function EditorUI(){}

EditorUI.initialize = function()
{	
	//Divisions
	EditorUI.top_bar = new Division();
	EditorUI.top_bar.size.y = 30 ;
	
	EditorUI.tool_bar = new Division();
	EditorUI.tool_bar.size.x = 60;

	EditorUI.explorer = new DivisionResizable(EditorUI);
	EditorUI.explorer.size.x = 300;

	EditorUI.asset_explorer = new Division();
	EditorUI.asset_explorer.size.y = 200;

	//Button
	EditorUI.but_text = new Button();
	EditorUI.but_text.setCallback(function()
	{
		var a = new Button();
		a.size.set(50,30);
		a.position.set(Math.random() * 500, Math.random() * 500);
		a.text = "test";
		a.updateInterface();
	});
	EditorUI.but_text.size.set(100,30);
	EditorUI.but_text.position.set(0,0);
	EditorUI.but_text.text = "File";

	//Dropdown
	EditorUI.dropdown = new DropdownMenu();
	EditorUI.dropdown.text = "Test";
	EditorUI.dropdown.size.set(100,30);
	EditorUI.dropdown.position.set(100,0);
	EditorUI.dropdown.addOption("a", function(){EditorUI.dropdown.addOption("a", function(){});});

	EditorUI.updateInterface();
}

EditorUI.update = function()
{
	EditorUI.explorer.update();
}

EditorUI.updateInterface = function()
{
	var canvas = document.getElementById("canvas");

	//Window size
	var size = new THREE.Vector2(window.innerWidth, window.innerHeight);

	//Top bar
	EditorUI.top_bar.size.x = size.x;

	//Tool bar
	EditorUI.tool_bar.position.set(0, EditorUI.top_bar.size.y);
	EditorUI.tool_bar.size.y = size.y - EditorUI.top_bar.size.y;
	
	//Explorer
	EditorUI.explorer.size.y = (size.y - EditorUI.top_bar.size.y);
	EditorUI.explorer.position.set(size.x - EditorUI.explorer.size.x, EditorUI.top_bar.size.y);

	//Asset explorer
	EditorUI.asset_explorer.size.x = size.x - EditorUI.explorer.size.x - EditorUI.tool_bar.size.x;
	EditorUI.asset_explorer.position.set(EditorUI.tool_bar.size.x, size.y - EditorUI.asset_explorer.size.y);

	//Canvas
	canvas.style.position = "absolute"; 
	canvas.style.top = EditorUI.top_bar.size.y + "px";
	canvas.style.left = EditorUI.tool_bar.size.x + "px";
	canvas.width = (size.x - EditorUI.tool_bar.size.x - EditorUI.explorer.size.x);
	canvas.height = (size.y - EditorUI.top_bar.size.y); 
	canvas.style.width = canvas.width + "px";
	canvas.style.height = canvas.height + "px";

	//Update interface status
	EditorUI.explorer.updateInterface();
	EditorUI.asset_explorer.updateInterface();
	EditorUI.tool_bar.updateInterface();
	EditorUI.top_bar.updateInterface();
	EditorUI.but_text.updateInterface();
	EditorUI.dropdown.updateInterface();
}