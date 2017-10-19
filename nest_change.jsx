var selectedComp_count = new Array();
var selectedComp = new Array();

for (var i=1; i<=app.project.items.length; i++)//count  selected  composition
{  
    if(app.project.items[i] instanceof CompItem)
    {
        if(app.project.items[i].selected == true)
        {
            selectedComp_count.push(app.project.items[i])
        }
    }
}

app.beginUndoGroup("precomp")

if (selectedComp_count == 0)//judge selected  composition count
{
    for (var i=1; i<=app.project.items.length; i++)//Change all comp
    {  
        if(app.project.items[i] instanceof CompItem)//All items are composition or not 
        {
            app.project.items[i].preserveNestedFrameRate =  true;//All compositions change parameter
        }
    }
    alert("[All comp] Nested on!")
}
else
{
    for (var i=1; i<=app.project.items.length; i++)//change Selected comp
    {  
        if(app.project.items[i] instanceof CompItem)//All items are composition or not
        {
            if(app.project.items[i].selected == true)//"CompItem" is selected or not 
            {
                app.project.items[i].preserveNestedFrameRate =  true;//Appropriate compositions change parameter
            }
        }
    }
    alert("[Selected comp] Nested on!")
}

