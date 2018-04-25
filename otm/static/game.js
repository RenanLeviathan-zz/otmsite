$(document).ready(function(){
	function timer(m,s){//temporizador
			$('#timer').text(m+":"+s);
			if(s==0){
				m--;
				s=60;
			}
			if(m>0){
				window.setTimeout(function(){
					timer(m,(s-1)%60)
				},1000);
			}else{
				whosthewinner();
			}
	}
	function whosthewinner(){
		var markers = $('span').childNodes();
		var a =0,b=0;
		for(let m of markers){
			if(m.className=='a_mark') a++;
			if(m.className=='b_mark') b++;
		}
		if(a>b){
			$('#winner').text("The Winner is Human Player");
		}else if(a<b){
			$('#winner').text("The Winner is CPU Player");
		}
	}
	//iniciando o jogo
	timer(3,59);
	if(isGameOver){
		whosthewinner();
	}
	function CPUPlay(){
		l=parseInt(Math.random()*6)+1;
		c=parseInt(Math.random()*6)+1;
		while($('#'+l+'_'+c).className()=='b_mark' ||
			$('#'+l+'_'+c).className()=='a_mark'){
			l=parseInt(Math.random()*6)+1;
			c=parseInt(Math.random()*6)+1;
		}
		$('#m'+l).className('b_mark');
		$('#row').text(""+l);
		$('#col').text(""+c);
		$('#'+l+'_'+c).className('b_mark');
	}
		CPUPlay();
		$('#dice_roll').click(function(){
		l=parseInt(Math.random()*6)+1;
		c=parseInt(Math.random()*6)+1;
		while($('#'+l+'_'+c).className()=='a_mark'
			|| $('#'+l+'_'+c).className()=='b_mark'){
			l=parseInt(Math.random()*6)+1;
			c=parseInt(Math.random()*6)+1;
		}
		$('#m'+l).className('a_mark');
		$('#row').text(""+l);
		$('#col').text(""+c);
		$('#'+l+'_'+c).className('a_mark');
		setTimeout(CPUPlay,2000);
	});
});