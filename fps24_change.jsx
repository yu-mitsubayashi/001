/*
------------------------------------------------------------------------------
fps30_change.jsx
Scripted by Yu Mitsubayashi.
v 1.0
Created On: 17/10/19
Updated On: 17/10/19
tested using AfterEffects CS55
-------------------------------------------------------------------------------
-------------------------------------------------------------------------------
Description:

change compotision fps
-------------------------------------------------------------------------------
Revision History:
v1.00  New Create
-------------------------------------------------------------------------------
*/

var selectedComp_count = new Array();
var selectedComp = new Array();
var fps = 24;

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
            app.project.items[i].frameRate = fps;//All compositions change parameter
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
                app.project.items[i].frameRate = fps;//Appropriate compositions change parameter
            }
        }
    }
    alert("[Selected comp] Nested on!")
}

