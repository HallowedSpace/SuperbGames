//GEBI
function g(e){
    let o = document.getElementById(e);
    if(o){
        return document.getElementById(e);
    }else{
        return undefined;
    }
}
//functions
function stage2Variables(){
    window.sSwitch = g('settingsSwitch');
    window.s_sBar = g('settingsSidebar');
}
function stage2(){ 
    try {
        document.body.innerHTML = ``;
        setTimeout(() => {
          stage2Variables();  
        }, 1000);
        
        return true;  
    } catch (e) {
        return false;
        console.log(e);
    }
}
//variables
//global
const welcomeMsg = ["Welcome!", "Hello there!", "Greetings!", "Salutations!", "Nice to see ya!", "Glad you could make it!", "Enjoy!", "Have a good time!", "Hope you have a good time!"];
const articles = [`<div id="article-stage1"> Red dye 40 lake is a synthetic food coloring that is used to give food a bright red color. It is one of the most widely used food dyes in the world, and it can be found in a wide variety of foods, including candy, soda, cereals, and salad dressings. <h2>Potential Dangers of Red Dye 40 Lake</h2> There are a number of potential dangers associated with red dye 40 lake. Some of these dangers include: <ul> <li><b> Hyperactivity and behavioral problems in children:</b> Several studies have shown that red dye 40 lake can increase hyperactivity and behavioral problems in children. In one study, children who consumed foods containing red dye 40 lake were more likely to be fidgety, have trouble paying attention, and be disruptive in class.</li> <li><b> Allergic </b>reactions: Red dye 40 lake can cause allergic reactions in some people. These reactions can range from mild hives and itching to more serious reactions, such as anaphylaxis.</li> <li><b> Cancer: </b>Some studies have shown that red dye 40 lake may increase the risk of cancer. For example, one study found that rats that were fed high doses of red dye 40 lake developed bladder cancer.</li> <li><b> Other health problems: </b> Red dye 40 lake has also been linked to other health problems, such as headaches, migraines, and stomach upset.</li> </ul> <h3>What is to be gathered from this?</h3> The potential dangers of red dye 40 lake are a cause for concern. If you are concerned about the safety of this food dye, you can choose to avoid foods that contain it. There are many other natural food colorings available that are safe and healthy. Additional Information In addition to the potential dangers listed above, there are a few other things to keep in mind about red dye 40 lake: <ul> <li>It is made from petroleum, which is a fossil fuel.</li> <li>It is not vegan or vegetarian.</li> <li>It is not gluten-free.</li> </ul> <h3>Recommendations</h3> If you are concerned about the safety of red dye 40 lake, I recommend that you: <ul> <li>Read food labels carefully and avoid foods that contain this food dye.</li> <li>Choose natural food colorings instead, such as beet juice, turmeric, or spirulina.</li> <li>Talk to your doctor about your concerns.</li> </ul> <h3>References</h3> <ul> <li>Red Dye 40: Safety, Side Effects, and Food List: https://www.healthline.com/nutrition/red-dye-40</li> <li>What is Red Dye 40? ADHD And Brain Health: https://www.amenclinics.com/blog/brain-health-guide-red-dye-40/</li> <li>Red Dye 40: Side Effects and Food List: https://health.clevelandclinic.org/red-dye-40/</li> <li>Red Alert: The Risks Of Red Dye 40 In Food: https://www.slurrp.com/article/red-alert-the-risks-of-red-dye-40-in-food-1674321163692</li> </ul> </div>`, ``]
let settingsOpen = 0;
//stage1
let article_S1 = g('article-stage1');
let topbar_S1 = g('topbar-stage1');
let body_S1 = g('body-stage1');

//event listener
document.addEventListener("keydown", (event) => {
    if(event.keyCode === 81 && event.ctrlKey){
        window.stage2 = stage2();
        console.log(window.stage2)
    }
})