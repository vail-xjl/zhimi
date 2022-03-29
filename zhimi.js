auto();
launchApp("知米背单词");
text("开始学习").findOne()
sleep(1000)
var isStart = text("开始学习").findOnce().bounds();
click(isStart.centerX(), isStart.centerY());
toastLog("开始学习")
while(true){
    try{
        text("A.").findOne(2000)
        if(text("A.").findOnce() != null){// 答错次数多，进入答题环节
            toastLog("答题环节")
            var clickA = text("A.").findOnce().bounds();
            click(clickA.centerX() + 100, clickA.centerY());
            text("下一个").findOne(1000)
            if(text("下一个").findOnce() == null){// 选A不对
                toastLog("A不对，试试B")
                var clickB = text("B.").findOnce().bounds();
                click(clickB.centerX() + 100, clickB.centerY());
                text("下一个").findOne(1000)
                if(text("下一个").findOnce() == null){// 选B也不对
                    toastLog("B也不对，试试C")
                    var clickC = text("C.").findOnce().bounds();
                    click(clickC.centerX() + 100, clickC.centerY());
                    text("下一个").findOne(1000)
                    if(text("下一个").findOnce() == null){// 选C也不对
                        toastLog("C也不对，肯定是D")
                        var clickD = text("D.").findOnce().bounds();
                        click(clickD.centerX() + 100, clickD.centerY());
                        text("下一个").findOne(1000)
                    }
                }
            }
            var next = text("下一个").findOnce().bounds();
            click(next.centerX(), next.centerY());
        }
        // 直接出来下一个的选项
        text("下一个").findOne(1000)
        if(text("下一个").findOnce() != null){
            var next = text("下一个").findOnce().bounds();
            click(next.centerX(), next.centerY());
        }
        
        // 出来认识或不认识的选项
        isNext = Math.floor(Math.random()*10)+1
        if(isNext > 4){
            toastLog("不认识。。。")
            sleep(1000*isNext)
            var next = text("不认识").findOnce().bounds();
            click(next.centerX(), next.centerY());
        }
        else{
            toastLog("认识！！！")
            var next = text("认识").findOnce().bounds();
            click(next.centerX(), next.centerY());
        }
    }
    catch(e){
        console.log("这1.0版不知道发生了什么，但是似乎还能用");
    }
    
}