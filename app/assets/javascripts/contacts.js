var contacts_autocomplete = function (){
	$('.search-query').autocomplete({
		source: $('.search-query').data('autocomplete-source')
		select: function(event, ui){
			$('.search-query').val(ui.item.label);		
			return false;
		}
	});
}
