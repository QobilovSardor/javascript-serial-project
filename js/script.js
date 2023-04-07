window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// TabsContent start
	const tabcontent = document.querySelectorAll('.tabcontent'),
		tabheaderItem = document.querySelectorAll('.tabheader__item'),
		tabsParent = document.querySelector('.tabheader__items');

	// tabcontent hide func
	function hideTabContent() {
		tabcontent.forEach(tabs => {
			tabs.classList.add('hide')
		})
		tabheaderItem.forEach(item => {
			item.classList.remove('tabheader__item_active')
		})
	}

	// tabcontent hide func
	function showTabContent(i = 0) {
		tabcontent[i].classList.remove('hide');
		tabcontent[i].classList.add('slow')
		tabcontent[i].classList.add('show');
		tabheaderItem[i].classList.add('tabheader__item_active');
	}
	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabheaderItem.forEach((item, idx) => {
				if(target === item){
					hideTabContent();
					showTabContent(idx);
				}
			})
		}
	})

	// Loader start
	const loader = document.querySelector('.loader');

	setTimeout(() => {
		loader.style.opacity = '0';
		setTimeout(() => {
			loader.classList.add('hide');
		}, 500)
	}, 1000);

})