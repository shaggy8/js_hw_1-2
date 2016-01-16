var names = [];

for (var i = 0; i < 5; i++) {
	names.push( prompt('Введіть ім\'я користувача', '') );
}

var guest = prompt('Назвіться, будь ласка', '');
var count = 0;

for (var k = 0; k < names.length; k++) {
	if (guest == names[k]) {
		count++
		alert('Вітаю, ' + guest +
			'! А ви знаєте, що це накодив Рома? Правда ж він молодець?)))');
		break;
	}
}

if (!count) {
	alert('Ану геть звідси, не знаю таких!');
}