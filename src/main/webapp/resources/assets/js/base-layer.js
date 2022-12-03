//v20221202
window.addEventListener('DOMContentLoaded', function(){
	const styles = `
	.animation-scaler:hover{
		overflow: hidden;
	  	transform: scale(1.1);
	  	transition: transform .5s; 
	}
	
	@keyframes animation-spinner {
		0% {
			transform:scale(0.2);
			background-color:#30FFb7;
		}
		25% {
			transform:scale(1);
			background-color:#0761ff;
		}
		50% {
			transform:scale(1);
			background-color:#FF9999;
		}
		
		75% {
			transform:scale(1);
			background-color:#8e2de2;
		}
		100% {
			transform:scale(0.2);
			background-color:#3b8d99;
		}
	}
	@keyframes background-gradient {
	  0% {
	    background-position: 0% 0%;
	  }
	
	  20% {
	    background-position: 20% 20%;	
	  }
	  
	  40% {
	    background-position: 40% 40%;	
	  }
	
	  60% {
	    background-position: 60% 60%;	
	  }
	  80% {
	    background-position: 70% 70%;	
	  }
	  100% {
	    background-position: 100% 100%;
	  }
	}
	
	`;
	addStyleSheet(styles);
	//$bodySet.init($("body"));

});

$bodySet ={
	info:function(){
		alert('html body base setting');
	},
	init:function($object){
		$object.css("background","repeating-linear-gradient(45deg, #606dbc, #606dbc 10px,  #465298 10px,  #465298 20px) !important;");
		$object.css("box-shadow","0.5vh 0.5vh 1.5vh 0.5vh #000 inset !important")
		$object.css("margin","0 !important");
		$object.css("height", "100vh");
	}
}

$menu = {
	example:function(){
		$menu.set = {
			'uuidv4':(function(){
				alert(1);
			})
		}
		//start
		$menu.start();
	},
	set:{},
	close:function(){
		if($("#menu-panel")[0]){
			$("#menu-panel")[0].remove();
		}
	},
	makeExit:function(){
		let exit = $('<div>');
		exit.css("bottom","0");
		exit.text("close");
		exit.height("6vh");
		exit.css("font-size","2vh");
		exit.css("box-shadow","0vmin 0.2vmin 1vmin black");
		exit.css("display","flex");
		exit.css("flex-direction","row");
		exit.css("flex-wrap", "nowrap");
		exit.css("align-content","center");
		exit.css("justify-content","flex-start");
		exit.css("align-items","center");
		
		
		exit.click(function(){
			$menu.close();
		});
		return exit;
	},
	makeItem:function(title, callback){
		const item = $('<li>');
		item.text(title);
		item.click(function(){
			callback();
		});
				item.height("6vh");
		item.css("font-size","2vh");
				item.css("display","flex");
		item.css("flex-direction","row");
		item.css("flex-wrap", "nowrap");
		item.css("align-content","center");
		item.css("justify-content","flex-start");
		item.css("align-items","center");
		item.css("color","ivory");
		item.hover(function(){
			item.css("background","#4D377B");
		}, function(){
			item.css("background","");
		});
		return item;
	},
	makeCategory:function(){
		let tag = $('<ul>');
		tag.append('<hr>');
		tag.css("list-style","none");
		tag.css("padding","0");
		
		return tag;
	},
	makeContainer:function(){
		let div = $('<div>');
		
		div.css("height","100%");
		div.css("position","relative")
		div.css("overflow","auto");

		return div;
	},
	makePanel:function(){
		let panel = $('<div>');
		panel.css("width","30vh");
		panel.css("height","100%");
		panel.css("background-color","rgba(22, 22, 22, 1)");
		panel.css("position", "fixed");
		panel.css("top", "0");
		panel.css("right","-100vw");
		
		panel.css("box-shadow","-2vmin 0vmin 1vmin black");
		panel.css("display","flex");
		panel.css("flex-direction", "column");
		panel.css("align-content", "flex-start");
		panel.css("justify-content", "flex-start");
		panel.css("align-items", "stretch");	
		panel.attr("id","menu-panel");
		
				const category =$menu.makeCategory();
		Object.keys($menu.set).forEach(function(key, data) {
			category.append($menu.makeItem(key, $menu.set[key]));
		});
		
		const container = $menu.makeContainer();
		container.append(category);
		panel.append(container);
		panel.append($menu.makeExit());
		return panel;
	},
	start:function(){
		if($("#menu-panel")[0]){
			return;
		}
		var _form = {
			'test':function(){
				alert(1);
			}
		}
		const $panel = $menu.makePanel();
		$('body').append($panel);
		$panel.animate({
	      right: 0
	    }, 500);
	},
	OnBtnStart:function(){
		if($("#menu-On-Btn")[0]){
			
		}
	}
}


$progressBar = {
	close:function(){
		if($("#progressBar-main")[0]){
			$("#progressBar-main").remove();
		}
	},
	progressSetZero:function(){
		if(!$("#progressBar-main")[0]){
			return;
		}
		
		$("#progressBar-progress").width(0);
	},
	countUpdate:function(index, length, fLoaded, fTotal){
		if(!$("#progressBar-main")[0]){
			return;
		}
		
		index+=1;
		let title = index+'/'+length;
	
		$("#progressBar-count").animate().width(100 * (fLoaded / fTotal) + '%');
		$("#progressBar-count-title").text(title);
	},
	progressUpdate:function(title, loaded, total){
		if(!$("#progressBar-main")[0]){
			return;
		}
		
		if(title){
			$("#progressBar-progress-title").text(title);
		}
		
		$("#progressBar-progress").animate().width(100 * (loaded / total) + '%');
	},
	makeCountBar:function(){
		let container = $('<div>');
		let progressPanel = $('<div>');
		let progress = $('<div>');
		let title= $('<h4>');
		
		container.css("display","flex");
		container.css("flex-direction","column");
		container.css("align-items", "center");
		container.css("justify-content", "center");
		container.css("align-content", "center");
		container.css("flex-wrap", "nowrap");
		
		
		progressPanel.css("border-radius","1rem");
		progressPanel.css("height","1vmin");
		progressPanel.css("width","100%");
		progressPanel.css("background","pink");
		progressPanel.css("padding","0.5vmin");
		
		progress.css("background","blue");
		progress.css("height","100%");
		progress.css("width","0%");
		progress.css("border-radius","1rem");		
		progress.attr("id","progressBar-count");
		progress.css("box-shadow","0.2vmin 0.2vmin 0.2vmin black");
		progress.css("-webkit-transition", "width 0.5s");
		progress.css("transition", "width 0.5s");
		
		title.attr("id","progressBar-count-title");
		title.text('Loading..');		
		progressPanel.append(progress);
		container.append(title);
		container.append(progressPanel);
		return container;
	},
	makeProgressBar:function(){
		let container = $('<div>');
		let progressPanel = $('<div>');
		let progress = $('<div>');
		let title= $('<h4>');
		
		
		
		container.css("display","flex");
		container.css("flex-direction","column");
		container.css("align-items", "center");
		container.css("justify-content", "center");
		container.css("align-content", "center");
		container.css("flex-wrap", "nowrap");
		
		
		progressPanel.css("border-radius","1rem");
		progressPanel.css("height","1vmin");
		progressPanel.css("width","100%");
		progressPanel.css("background","pink");
		progressPanel.css("padding","0.5vmin");
		
		progress.css("background","blue");
		progress.css("height","100%");
		progress.css("width","0%");
		progress.css("border-radius","1rem");		
		progress.attr("id","progressBar-progress");
		progress.css("box-shadow","0.2vmin 0.2vmin 0.2vmin black");
		progress.css("-webkit-transition", "width 0.5s");
		progress.css("transition", "width 0.5s");
		
title.attr("id","progressBar-progress-title");
		title.css("overflow-wrap","anywhere");
		title.text('Loading..');	
		progressPanel.append(progress);
		container.append(title);
		container.append(progressPanel);
		return container;
	},
	makeBackboard:function(){
		
		let board = $('<div>');
		
		board.css("width","100%");
		board.css("height","100%");

		board.css("position","fixed");
		board.css("top","0");
		board.css("background","rgba( 0, 0, 0, 0.8 )");
		board.css("display","flex");
		board.css("flex-direction","column");
		board.css("flex-wrap","nowrap");
		board.css("align-content","center");
		board.css("justify-content", "center");
		board.css("align-items", "center");
		board.attr("id","progressBar-main");
		board.css("z-index","20000");
		return board;
	},
	makeContainer:function(){
		let container = $('<div>');
		
		//가운데
		container.css("background","darkgray");
		container.css("border-radius","1rem");
		container.css("width","30vmax");
		container.css("display", "flex");
		container.css("flex-direction", "column");
		container.css("justify-content", "center");
		container.css("align-content", "center");
		container.css("align-items", "stretch");
		container.css("flex-wrap", "nowrap");		
    	container.css("padding","1rem");

		return container;
	},
	show:function(){
		if($("#progressBar-main")[0]){
			return;
		}
		
		const $count = $progressBar.makeCountBar();
		const $progress = $progressBar.makeProgressBar();
		const $container = $progressBar.makeContainer();
		const $backboard = $progressBar.makeBackboard();
		$container.append($count);
		$container.append($progress);
		$backboard.append($container);
		$('body').append($backboard);

	},
	show2:function(){
		if($("#progressBar-main")[0]){
			return;
		}
		
		const $progress = $progressBar.makeProgressBar();
		const $container = $progressBar.makeContainer();
		const $backboard = $progressBar.makeBackboard();
		$container.append($progress);
		$backboard.append($container);
		$('body').append($backboard);
	}
}

$Noti = {
	makeTitle:(function(titleMsg){
		let $div = $('<div>');
		let $h4 = $('<h4>');
		$h4.css("font-size","2vmax");
		$h4.text(titleMsg);  
		$div.append($h4);
		return $div;
	}),
	makeDescription:(function(desMsg){
		let $div = $('<div>');
		$div.css("width","100%");
		$div.css("overflow-wrap","break-word");
		$div.css("color","darkgray");
		$div.css("text-align","center");
		$div.css("font-size","2vmax");
		$div.text(desMsg);
		return $div;
	}),
	makeBox:(function(title, desc){
		let tNotiBox = $('<div>');
		//크기배경
		tNotiBox.css("background-color","white");
		tNotiBox.css("height","auto");
		tNotiBox.css("width","85vw");
		tNotiBox.css("max-width","800px");
		tNotiBox.css("box-shadow","1vmin 1vmin 1vmin black");
		//중앙정렬
		tNotiBox.css("position","fixed");
		tNotiBox.css("top","2vh");
		tNotiBox.css('margin','0 auto');
		tNotiBox.css("left", "0");
		tNotiBox.css("right", "0");
		//라운드
		tNotiBox.css('border-radius','1rem');	
		//마진패딩
		tNotiBox.css('padding','1vmax');
		//flex
		tNotiBox.css("display","flex");
		tNotiBox.css("flex-flow","row wrap");
		tNotiBox.css("justify-content","center");
		tNotiBox.css("flex-direction","column");
		tNotiBox.css("align-content","center");
		tNotiBox.css("flex-wrap","nowrap");
		tNotiBox.css("align-items","center");
		//맨앞
		tNotiBox.css("z-index","50000");
		tNotiBox.append($Noti.makeTitle(title));
		tNotiBox.append($Noti.makeDescription(desc));    	
		return tNotiBox;
	}),
	makeBtn:(function(NotiBox, map){
		let btnBox = $('<div>');
		
		btnBox.css("display", "flex");
		btnBox.css("width", "100%");
		btnBox.css("flex-direction", "row");
		btnBox.css("justify-content", "space-evenly");
		btnBox.css("align-content", "center");
		btnBox.css("flex-wrap", "nowrap");
		btnBox.css("align-items", "center");

    
    
		Object.keys(map).forEach(function(key, data) {
  			const btn = $('<button>');
			btn.css("border","none");
			btn.css("background-color", "pink");
			btn.css("border-radius","15px");
			btn.css("box-shadow","0 15px 35px rgb(0 0 0 / 20%)");
			btn.css("text-decoration", "none");
			btn.css("font-weight","600");
			btn.css("transition", "0.25s");
			btn.css("font-size", "2vmax");
			btn.css("padding-left", "3vmax");
			btn.css("padding-right", "3vmax");
			btn.text(key);
			btn.click(function(){
			NotiBox.fadeOut(300, function(){
					NotiBox.remove();
					map[key]();
				});
			});
			btnBox.append(btn);	
		});
		
		
		return btnBox;
	}),
	show:function(title, content){
		const time = 2300;
		const NotiBox = $Noti.makeBox(title, content);
		
		$('body').append(NotiBox);
		setTimeout(function(){
			NotiBox.fadeOut(300, function(){
				NotiBox.remove();
			});
		}, time);
	},
	showBtn:function(title, content, map){
		const NotiBox = $Noti.makeBox(title, content);
		const btn = $Noti.makeBtn(NotiBox, map);
		NotiBox.append(btn);	
		$('body').append(NotiBox);
	
	}
}

$modal = {	
	show: function(name){
		$(name).removeClass("modal-none");
	},
	hide : function(name){
		$(name).addClass("modal-none");
	},
	ok: function(){
		
	}
}
$blockScreen = {	
	initialize:function(){
		if($blockScreen.this){
			$blockScreen.this.remove();
		}
		$blockScreen.this = $('<div>');
		$blockScreen.this.css("display","none");
		$blockScreen.this.css("width","100vw");
		$blockScreen.this.css("height","100vh");
		$blockScreen.this.css("top","0");
		$blockScreen.this.css("z-index","10000");
		$blockScreen.this.css("position","fixed");
		$blockScreen.this.css('background-color','rgba( 0, 0, 0, 0.8 )');
		$blockScreen.this.css('flex-direction','column');//세로
		$blockScreen.this.css('justify-content','center');//부모기준
		$blockScreen.this.css('align-items','center');//부모기준
		$blockScreen.this.css('font-size','3em');//부모기준
		
		const container = $('<div>');
			container.css('display','flex');
			
			container.css('padding','3vmin');

			container.css('box-shadow','2px 2px 6px black');
			container.css('width','auto');
	
			container.css('background','linear-gradient(45deg, #251327, #101010)');
			container.css('border-radius','0.5rem');
			container.css('flex-direction','column');//세로
			container.css('justify-content','center');//부모기준
			container.css('align-items','center');//부모기준
			container.addClass('animation-scaler');
	
		
		
		$blockScreen.message=$('<span>');
		$blockScreen.message.css('font-size','3vmin');
		$blockScreen.message.css('vertical-align', 'middle');
		$blockScreen.message.css('color','white');

	
		
		const spinnerSection = $('<section>');
			spinnerSection.css('display','flex');
			spinnerSection.css('flex-direction','row');
			spinnerSection.css('margin','2rem');
			spinnerSection.css('opacity','1');

		for(let i=0; i <= 1; i+=0.2){
			const spinner = $('<div>');
				spinner.css('height','5vmin');
				spinner.css('width','5vmin');
				spinner.css('border-radius','50%');
				spinner.css('display','inline-block');
				spinner.css('margin','.5rem');
				spinner.css('animation','animation-spinner 2.5s ease-in-out infinite');
				spinner.css('animation-delay',''+i+'s');
				spinnerSection.append(spinner);
		}
		
		container.append(spinnerSection);
		container.append($blockScreen.message);
		$blockScreen.this.append(container);
		
		
		$('body').append($blockScreen.this);

	},show : function(msg){
		
		if($blockScreen.this){
			if(msg){
				$blockScreen.message.text(msg);	
			}else{
				$blockScreen.message.text('Wait for a process to finish');
			}
			$blockScreen.this.css("display","flex");
		}
	},hide : function(){
		if($blockScreen.this){
			$blockScreen.this.css("display","none");	
		}
	}
}

$watermark = {
	initializeSpan : function(lines, fcolor){
		
		if($watermark.this){
			$watermark.this.remove();
		}	
		$watermark.this = $('<div>');
		$watermark.this.css("display","none");
		$watermark.this.css("width","100vw");
		$watermark.this.css("height","100vh");
		$watermark.this.css("top","0");
		$watermark.this.css("z-index","10001");
		$watermark.this.css("position","fixed");
		$watermark.this.css("opacity","0.2");
		$watermark.this.css('flex-direction','column');//가로
		$watermark.this.css('flex-wrap','wrap');//줄넘김
		$watermark.this.css('justify-content','center');
		$watermark.this.css('opacity','0.3');
		$watermark.this.css('pointer-events','none');
		$watermark.this.css('background-clip','content-box');
		$watermark.this.css('overflow','hidden');

		for(let i = 0; i < 50; i++){
			const $messageSection = $('<section>');
			$messageSection.css('display','flex');
			$messageSection.css('flex-direction','column');
			$messageSection.css('padding-left','1vmax');
			$messageSection.css('margin', '5vmax');
			$messageSection.css('transform','rotate(-25deg)');
			$messageSection.css('pointer-events','inherit');//부모기준에 따름
			$messageSection.css('font-size','1.7em');
			for(let j = 0; j < lines.length; j++ ){
				const $message = $('<span>');				
				$message.text(lines[j]);
				$message.css('pointer-events','inherit');	
				
				
				if(fcolor === 'darkmode'){
					$message.css('color', '#FFFFFF');
				}else{
					$message.css('color','#000000');	
				}
				

				$messageSection.append($message);			 	
			}
			$watermark.this.append($messageSection);	
		}
		
		
		$('body').append($watermark.this);
		
	},
	initializeImage : function(lines, fcolor){
		if($watermark.this){
			$watermark.this.remove();
		}
		
		$watermark.this = $('<div>');
		$watermark.canvas = document.createElement('canvas');
		$watermark.canvasCtx = $watermark.canvas.getContext("2d");
		
		
		$watermark.this.css("display","none");
		$watermark.this.css("width","100vmax");
		$watermark.this.css("height","100vmax");
		$watermark.this.css("top","0");
		$watermark.this.css("z-index","10001");
		$watermark.this.css("position","fixed");
		$watermark.this.css('pointer-events','none');
		$watermark.this.css('opacity','0.1');

		$watermark.canvasCtx.rotate(25);
		
			for(let j = 0; j < lines.length; j++ ){
				$watermark.canvasCtx.font = "bold 1.5em '맑은 고딕'";
				if(fcolor === 'darkmode'){
					$watermark.canvasCtx.fillStyle="rgba(255, 255, 255, 1)";	
				}else{
					$watermark.canvasCtx.fillStyle="rgba(0, 0, 0, 1)";
				}
				
				$watermark.canvasCtx.fillText(lines[j], 0, (j*15)+($watermark.canvas.height/lines.length));			
			}
			

			$watermark.canvasCtx.globalAlpha = 0.2;
			
			
			console.log($watermark.canvas.toDataURL());
			
			$watermark.this.css('background-image',`url("${$watermark.canvas.toDataURL()}")`);	
			$watermark.this.css('background-repeat',`space`);	
		
		$watermark.canvasCtx.setTransform(1, 0, 0, 1, 0, 0);
		$('body').append($watermark.this);
		
	},
	show : function(){
		
		$watermark.this.css("display","flex");
	}
	
	
	
}


function addStyleSheet(styles){
	if(!styles){
		return false;
	}
	const $styleSheet = document.createElement('style');
	$styleSheet.type = 'text/css';
	$styleSheet.append(styles);
	document.head.append($styleSheet);
	return true;
}


function simpleBackground(e){
	e.css('background',	'linear-gradient(-45deg, #ff9999, #2F1C53,#6FCEB6, #ff9999, #2F1C53)');
	e.css('animation','background-gradient 40s ease infinite');
	e.css('background-size','400vmax 400vmin');		
}

