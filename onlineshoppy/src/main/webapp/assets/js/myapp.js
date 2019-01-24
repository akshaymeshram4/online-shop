
//for active menu
$(function(){
	switch(menu){
	
		
	case 'About Us':
		$('#about').addClass('active');		//jquery selector #
		break;
	
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
		
	default:
		$('#home').addClass('active');
				break;
	}
});