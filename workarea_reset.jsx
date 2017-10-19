var selectedComp_count = new Array();
var selectedComp = new Array();

for (var i=1; i<=app.project.items.length; i++)//count 
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

if (selectedComp_count == 0)
{
    for (var i=1; i<=app.project.items.length; i++)//コンポの尺とワークエリアを調整
    {  
        if(app.project.items[i] instanceof CompItem)
        {
            app.project.items[i].workAreaStart =  0;//ワークエリアのスタートを指定
            app.project.items[i].workAreaDuration =  app.project.items[i].duration - app.project.items[i].workAreaStart; //ワークエリアのエンドを指定
        }
    }
    alert("[All comp] workarea reseted!")
}
else
{
    for (var i=1; i<=app.project.items.length; i++)//コンポの尺とワークエリアを調整
    {  
        if(app.project.items[i] instanceof CompItem)
        {
            if(app.project.items[i].selected == true)
            {
                app.project.items[i].workAreaStart =  0;//ワークエリアのスタートを指定
                app.project.items[i].workAreaDuration =  app.project.items[i].duration - app.project.items[i].workAreaStart; //ワークエリアのエンドを指定
            }
        }
    }
    alert("[Selected comp] workarea reseted!")
}

