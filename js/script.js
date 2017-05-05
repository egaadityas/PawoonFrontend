$(document).ready(function() {
	$('.validate input, .validate select, .validate textarea').blur(function() {
		var id = $(this).data('id');
		var values = $(this).val();
		var label = $("label[for='"+this.id+"']").text();
		if(values.length == 0) {
			var textAlertDanger = label + ' tidak boleh kosong';
			$('#'+id).after('<label id='+id+' class="error">'+textAlertDanger+'</label>');
			$('.validate input#'+id).css({'border':'1px solid #F22626'});
			$('.validate select#'+id).css({'border':'1px solid #F22626'});
			$('.validate textarea#'+id).css({'border':'1px solid #F22626'});
		} else {
			$('.validate input#'+id).addClass('valid');
			$('.validate input#'+id).css({'border':'1px solid #45CC02'});
			$('.validate select#'+id).css({'border':'1px solid #45CC02'});
			$('.validate textarea#'+id).css({'border':'1px solid #45CC02'});
			$('label#'+id).remove();
		}
	});

	$('form').submit(function(e) {
		if ($('.validate input').hasClass('valid')) {
			$('form').attr('action', 'abc.html');
		} else {
			$('input.form-control').css({'border':'1px solid #F22626'});
			$('select.form-control').css({'border':'1px solid #F22626'});
			$('textarea.form-control').css({'border':'1px solid #F22626'});
			alert('Failed to process, Because you have empty field.');
		}
	});

	$('li.dropdown').click(function(){
		if($(this).hasClass('active')){
			$(this).find('.dropdown-content').stop().slideUp();
			$(this).removeClass('active');
			$(this).find('.arrow').removeClass('active');
			$("span.arrow", this).toggleClass("fa-angle-left fa-angle-down");
		}else{
			$(this).find('.dropdown-content').stop().slideDown();
			$(this).addClass('active');
			$(this).find('.arrow').addClass('active');
			$("span.arrow", this).toggleClass("fa-angle-left fa-angle-down");
		}
	});

	$('#changeImage').hide();
	$('#imagePreview').hide();
	$('#imageUpload').change(function(){
		readImgUrlAndPreview(this);
		function readImgUrlAndPreview(input){
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function (e) {		
					$('.img-upload').hide(400);
					$('#imagePreview').attr('src', e.target.result);
					$('#imagePreview').show(400);
					$('#changeImage').show();
				}
			};
			reader.readAsDataURL(input.files[0]);
		}
	});

	$('#changeImage').click(function() {
		$('.img-upload').show(400);
		$('#imagePreview').attr('src', "");
		$('#imageUpload').val("");
		$('#imagePreview').hide(400);
		$('#changeImage').hide();
	});

	$('.btnOption').css({'opacity':'0'});
	$('.switcher').click(function(){
		var id = $(this).attr('id');
		console.log(id);
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			var a = $('.btnOption.'+id).css({'opacity':'0'});
			console.log(a);
		}else{
			$(this).addClass('active');
			var b =  $('.btnOption.'+id).css({'opacity':'1'});
			console.log(b);
		}
	});
});