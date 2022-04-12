auto();
launchApp("知米背单词");
text("训练").findOne()
sleep(1000)

// 学习单词
if(text("开始学习").findOnce() != null){
    var isStart = text("开始学习").findOnce().bounds();
    click(isStart.centerX(), isStart.centerY());
    toastLog("开始学习")

    while(true){
        try{
            textContains("点我查看释义").findOne(1000)
            if(textContains("点我查看释义").findOnce() != null){
                var next = textContains("点我查看释义").findOnce().bounds();
                click(next.centerX(), next.centerY());
            }
            text("A.").findOne(1000)
            if(text("A.").findOnce() != null){// 答错次数多，进入答题环节
                var answer = ['A', 'B', 'C', 'D']
                var count = 0;
                var clickA = text("A.").findOnce().bounds();
                click(clickA.centerX() + 100, clickA.centerY());
                text("下一个").findOne(1000)
                if(text("下一个").findOnce() == null){// 选A不对
                    count += 1;
                    var clickB = text("B.").findOnce().bounds();
                    click(clickB.centerX() + 100, clickB.centerY());
                    text("下一个").findOne(1000)
                    if(text("下一个").findOnce() == null){// 选B也不对
                        count += 1;
                        var clickC = text("C.").findOnce().bounds();
                        click(clickC.centerX() + 100, clickC.centerY());
                        text("下一个").findOne(1000)
                        if(text("下一个").findOnce() == null){// 选C也不对
                            count += 1;
                            var clickD = text("D.").findOnce().bounds();
                            click(clickD.centerX() + 100, clickD.centerY());
                            text("下一个").findOne(1000)
                        }
                    }
                }
                toastLog("答题环节：经过测试，答案原来是" + answer[count])
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
            if(text("认识").findOnce() != null){
                isNext = Math.floor(Math.random()*10)+1
                if(isNext > 4){
                    toastLog("不认识" + isNext + "秒")
                    sleep(1000*isNext)
                    var next = text("不认识").findOnce().bounds();
                    click(next.centerX(), next.centerY());
                }
                else{
                    toastLog("认识" + isNext + "秒")
                    sleep(1000*isNext)
                    var next = text("认识").findOnce().bounds();
                    click(next.centerX(), next.centerY());
                }
                
            }

            // 学习完毕并退出。
            if(textContains("打卡").findOnce() != null){
                var submit = textContains("打卡").findOnce().bounds();
                click(submit.centerX(), submit.centerY())
                sleep(2000)
                while(textContains("打卡领取奖励") != null){
                    var reward = textContains("打卡领取奖励").findOnce().bounds()
                    click(reward.centerX(), reward.centerY())
                }
                for(var i = 0; i < 3; i++){
                    back();
                    sleep(1000)
                }
                home()
                toastLog("学习完毕，已领取奖励，接下来开始巩固今日所学！")
                launchApp("知米背单词");
                text("训练").findOne()
                sleep(1000)
                break;
            }
            if(textContains("分享至").findOnce() != null){
                for(var i = 0; i < 3; i++){
                    back();
                    sleep(1000)
                }
                home()
                toastLog("学习完毕，已领取奖励，接下来开始巩固今日所学！")
                launchApp("知米背单词");
                text("训练").findOne()
                sleep(1000)
                break;
            }
            
        }
        catch(e){
            // 大概率出现卡死在分享页面
            if(textContains("分享").findOnce() != null){
                for(var i = 0; i < 3; i++){
                    back();
                    sleep(1000)
                }
                home()
                toastLog("学习完毕，已领取奖励，接下来开始巩固今日所学！")
                launchApp("知米背单词");
                text("训练").findOne()
                sleep(1000)
                break;
            }
            else{
                console.log(e);
                console.log("这2.0版不知道发生了什么，但是似乎还能用");
            }
            
        }
        
    }
}

// 巩固今日所学
if(text("学习计划").findOnce() != null && text("开始学习").findOnce() == null){
    var isStart = text("复习").findOnce().bounds()
    click(isStart.centerX(), isStart.centerY())
    toastLog("开始巩固今日所学")
    sleep(1000)
    if(textContains("全拼练习").findOnce() != null){
        var prac = textContains("全拼练习").findOnce().bounds()
        click(prac.centerX(), prac.centerY())
        var count = 0;
        toastLog("开始第" + (count + 1) + "次巩固！")
        while(true){
            try{
                if(textContains("验证拼写").findOnce() != null){
                    think = Math.floor(Math.random()*10) % 4 + 4
                    toastLog("思考" + think + "秒。。。")
                    sleep(1000 * think)
                    var clickCenter = textContains("验证拼写").findOnce().bounds()
                    click(clickCenter.centerX(), clickCenter.centerY())
                    sleep(1000)

                    var right = textContains("正确").findOnce().bounds()
                    click(right.centerX(), right.centerY())
                    sleep(1000)
                }
                if(text("再来一遍").findOnce() != null){
                    count += 1;
                    if(count > 2){
                        var exit = text("结束").findOnce.bounds()
                        click(exit.centerX(), exit.centerY())
                        back()
                        break;
                    }
                    else{
                        toastLog("开始第" + (count + 1) + "次巩固！")
                    }
                    var again = text("再来一遍").findOnce().bounds()
                    click(again.centerX(), again.centerY())
                    sleep(1000)
                }
                
            }
            catch(e){
                if(text("结束").findOnce() != null){
                    if(count > 2){
                        var exit = text("结束").findOnce.bounds()
                        click(exit.centerX(), exit.centerY())
                        back()
                        break;
                    }
                }
                else{
                    console.log(e);
                    console.log("这2.0版不知道发生了什么，但是似乎还能用");
                }
                
            }
        }
        toastLog("知米背单词任务结束！")
        home()
    }
}
