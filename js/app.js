$(document).ready(function(){
	$('tr:even').css({
    backgroundColor: "#BFC5C5",
    opacity: "0.65"
  }); //end css

	$('#logo-img').fadeOut(2000).fadeIn(2000);

	$('#profile-btn').click(function(){
		$('#profile-img').removeClass('img-circle');
	}); //end profile btn
	$('#writing-btn').click(function(){
		$('#writing-img').removeClass('img-circle');
	}); //end writing btn
	$('#work-btn').click(function(){
		$('#work-img').removeClass('img-circle');
	}); //end work btn

	$('#writer-btn').hover(function(){
		console.log('The writer button was hovered over!')
		$('#writer-btn').css({
			backgroundColor: '#66FFCC'
		}); //end css
	}, function(){
		console.log('The writer button was left behind!')
		$('#writer-btn').css({
			backgroundColor: '#DAE329'
		}); //end css
	}); //end writer hover

	$('#filmmaker-btn').hover(function(){
		console.log('The filmmaker button was hovered over!')
		$('#filmmaker-btn').css({
			backgroundColor: '#FF99FF'
		}); //end css
	}, function(){
		console.log('The filmmaker button was left behind!')
		$('#filmmaker-btn').css({
			backgroundColor: '#DAE329'
		}); //end css
	}); //end filmmaker hover
	$('#storyteller-btn').hover(function(){
		console.log('The storyteller button was hovered over!')
		$('#storyteller-btn').css({
			backgroundColor: '#99CCFF'
		}); //end css
	}, function(){
		console.log('The storyteller button was left behind!')
		$('#storyteller-btn').css({
			backgroundColor: '#DAE329'
		}); //end css
	}); //end storyteller hover
		$('#marketer-btn').hover(function(){
		console.log('The marketer button was hovered over!')
		$('#marketer-btn').css({
			backgroundColor: '#9966FF'
		}); //end css
	}, function(){
		console.log('The marketer button was left behind!')
		$('#marketer-btn').css({
			backgroundColor: '#DAE329'
		}); //end css
	}); //end marketer hover
		$('#jumbotron-btn').click(function(){
		$('#jumbotron-img').remove();
		$('.jumbotron h1').text('Area of Expertise');
		$('.jumbotron p').text('For a complete Curriculum Vitae, please visit www.laylali.net');
		$('.jumbotron p').prepend('<div class="row top-buffer"><div class="col-md-4 col-xs-8"> <img src= "image/fast.jpg" width= "230px" class="img-responsive img-circle" /><p>Market Research </br> Data Analysis </br> Search Engine Optimization </p></div> <div class="col-md-4 col-xs-8"> <img src= "image/fun.gif" width ="150px" class="img-responsive img-circle"/> <p>Social Media Copywriting </br> Digital Marketing </br> PPC & Real Time Bidding </p> </div> <div class="col-md-4 col-xs-8"> <img src= "image/action.jpg" width="200px" class="img-responsive img-circle"/> <p>Event Planning </br> Web Development </br> Mobile App Design </p></div></div>');
		$('#jumbotron-btn').replaceWith();
	}); //end jumbotron click
		$('#worktype').change(function(){
			if ($('#worktype').val() == 'digital') {
				$('.search-group .help-block').text('A client portfolio with some of the worlds most famous brands: LANCÔME, Armani Fragrance, Kiehls, Gap, BVLGARI, Four Seasons Hotels & Resorts, Montblanc among many others, I have had experiences in conducting primary and secondary research on best practices and market trends, designing and conducting analysis, interpreting results and synthesizing recommendations, and developing presentation for clients.')
			} else if ($('#worktype').val() == 'web') {
				$('.search-group .help-block').text('Utilizing web development tools such as Wordpress, Bootstrap and knowledge of Java, JavaScript, PHP(Lavarel), HTML5, and CSS3, I can develop interactive websites for both personal and corporate use. Take this one as an example work!')
			} else if ($('#worktype').val() == 'appdesign') {
				$('.search-group .help-block').text('Always start with the user experience, my design makes the user happy!')
			} else if ($('#worktype').val() == 'copywriting') {
				$('.search-group .help-block').text('I have had a exemplary background in working on the agency side of public relations and a solid skill set in digital media: digital content creation, digital trends forecasting, social media marketing, and graphic design.')
			} else {
				$('.search-group .help-block').text('Will Work For Candy!')
			}
		}); //end change

			$('button').click(function(submit){
				if($('#name').val().length == 0) {
					$('.name-group .help-block').text('Please enter your name.');
					$('.name-group').attr({
						class: 'col-sm-6 form-group name-group has-error'
					}); // end attr
					submit.preventDefault();
				} else {
					$('#myModal').modal();
					submit.preventDefault();
				}	
			}); //end click
	}); //end ready