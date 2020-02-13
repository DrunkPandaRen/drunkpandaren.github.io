{Template {
    $classpath: "view.Main",
    $hasScript: true
}}

    {macro main()}

        <h1>扫清障碍! 消磨时间;)</h1>

        <div class="timer">关卡
            <strong>
                {section {
                    id: "level",
                    type: "span",
                    bindRefreshTo: [{to:"level",inside:data}],
                    macro: "displayLevel"
                }/}
            </strong>
            <span style="float:right">用时
                <strong>
                    {section {
                        id: "timer",
                        type: "span",
                        bindRefreshTo: [{to:"timer",inside:data}],
                        macro: "displayTimer"
                    }/}
                </strong>
            </span>
        </div>

        <div {on click "startGame"/}>
	        {section {
	            id: "board",
	            type: "div",
	            bindRefreshTo: [{to:"moves",inside:data}],
	            attributes: {style: "width:"+BOARDSIZE*25+"px"},
	            macro: "displayBoard"
	        }/}
	    </div>

        {section {
            id: "banner",
            type: "div",
            bindRefreshTo: [{to:"moves",inside:data}],
            macro: "displayBanner"
        }/}

    {/macro}

    {macro displayLevel()}
        ${data.level}
    {/macro}

    {macro displayTimer()}
        ${("00"+data.timer).slice(-3)}
    {/macro}

    {macro displayBoard()}
        {foreach line inArray data.board}
            <div class="line">
                {foreach cell inArray line}<span data-x="${cell_index}" data-y="${line_index}" {if cell==-1}class="fade"{else/}style="background:${COLORS[cell]}"{/if}></span>{/foreach}
            </div>
        {/foreach}
    {/macro}

    {macro displayBanner()}
        {if !data.gameStarted}
            <div class="msg">猫饼有 <span>${data.moves}</span> 次点击来扫清所有障碍<br/>点击色块开始游戏</div>
        {else/}
            {if data.cleaned==TOTAL}
                <div class="msg">${win()}</div>
                <div class="inset"><button type="button" {on click {fn:"newGame", args:true}/}>下一关</button></div>
            {elseif data.moves==0/}
                <div class="msg">${fail()}</div>
                <div class="inset"><button type="button" {on click "newGame"/}>再来一局!</button></div>
            {else/}
                <div class="msg">还有 <span>${data.moves}</span> 次点击</div>
                {for var c=1; c<COLORS.length; c++}
                    <span class="color" style="background:${COLORS[c]}" {on click {fn:"clean",args:c}/}></span>
                {/for}
            {/if}
        {/if}
    {/macro}

{/Template}
