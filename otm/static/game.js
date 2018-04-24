$(document).ready(function(){
	var isGameOver=false;
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
				isGameOver=true;
				whosthewinner();
			}
	}
	function whosthewinner(){
		var a = $('.a_mark').childNodes().length;
		var b = $('.b_mark').childNodes().length;
		if(a>b){
			$('#winner').text("The Winner is Human Player");
		}else if(a<b){
			$('#winner').text("The Winner is CPU Player");
		}
	}
	//iniciando o jogo
	timer(3,59);
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
		vez=0;
		setTimeout(CPUPlay,2000);
	});
});