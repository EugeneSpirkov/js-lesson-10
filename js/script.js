

$(function() {

	var html = $('#tmpl').html();

	var articles = [
		{
			title: 'some first header',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ipsam.',
			val: 'submit 1'

		},
		{
			title: 'some second header',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nostrum quam soluta mollitia laborum eligendi.',
			val: 'submit 2'
		},
		{
			title: 'some third header',
			text: 'Lorem ipsum dolor sit amet.',
			val: 'submit 3'
		}
	];
	var content = tmpl(html, {
		data: articles
		});

	$('body').append(content);

})