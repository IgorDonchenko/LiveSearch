document.querySelector('#elastic').oninput = function () {
	let val = this.value.trim();
	let elasticItems = document.querySelectorAll('.elastic li.my_seach');
	if (val != '') {
		elasticItems.forEach(function (elem) {
			
			if (elem.innerText.search(val) == -1) {
				elem.classList.add('hide');
				//elem.innerHTML = elem.innerText;
				// console.log(elem.innerHTML);
			} else {
				elem.classList.remove('hide');
				//let str = elem.innerText; Строка переводит элементы HTML в ТЕКСТ
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