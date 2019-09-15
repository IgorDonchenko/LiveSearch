// 1  Динамический поиск

document.querySelector('#elastic').oninput = function () {
	let val = this.value.trim();	
	let elasticItems = document.querySelectorAll('.elastic .control');
	if (val != '') {
		elasticItems.forEach(function (elem) {
			
			if (elem.innerText.search(val) == -1) {
				elem.classList.add('hide');
				//elem.innerHTML = elem.innerText;
				// console.log(elem.innerHTML);
				
			} else {
				elem.classList.remove('hide');
				//let str = elem.innerText;  Строка, меняющая HTML на ТЕКСТ
				//elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
			}
		});
	} else {
		elasticItems.forEach(function (elem) {
			elem.classList.remove('hide');
			//elem.innerHTML = elem.innerText;
		});
	}
}

// 2  AJAX
/*
function funcBefore () {
	$("#information").text ("Ожидание...");
}

function funcSuccess (data) {
	$("#information").text (data);
}

$(document).ready (function () {
	$("#load").bind("click", function () {
	var admin = "Admin";
		$.ajax ({
			url: "details.php",
			type: "POST",
			data: ({name: admin, number: 5}),
			dataType: "html",
			beforeSend: funcBefore,
			success: funcSuccess
		});
	});
});

// 3  Получение значения тега 

function funcDataMy () {
	var items = document.querySelectorAll('tr>td>p');

	//console.log(items);
	items.forEach(item => {
		item.addEventListener('click',(e)=>{
			var mytext = e.target.textContent;
			console.log(mytext);			
		});
		
	});
}



funcDataMy ();

*/

//  Окончательное решение передачи в AJAX

function funcBefore () {
	$("#information").text ("Ожидание...");
}

function funcSuccess (data) {
	$("#information").text (data);
}

function MyNewFunck(func) {
	var admin = func;
	$.ajax ({
		url: "details.php",
		type: "POST",
		data: ({name: admin, number: 5}),
		dataType: "html",
		beforeSend: funcBefore,
		success: funcSuccess
	});
	
}

//console.log(a);
