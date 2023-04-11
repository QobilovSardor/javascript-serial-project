window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// TabsContent start
	const tabcontent = document.querySelectorAll('.tabcontent'),
		tabheaderItem = document.querySelectorAll('.tabheader__item'),
		tabsParent = document.querySelector('.tabheader__items');

	// tabcontent hide func~
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

	// modal start
	const modal = document.querySelector('.modal'),
		modalOpen = document.querySelector('[data-modal]'),
		modalClose = document.querySelector('[data-close]');

		const modalTimer = setTimeout(() => {
			showModal();
		}, 5000)
		function showModal() {
			modal.classList.add('show');
			modal.classList.remove('hide');
			clearInterval(modalTimer)
		}
		function hideModal() {
			modal.classList.add('hide');
			modal.classList.remove('show');
		}
		modalOpen.addEventListener('click', showModal);
		modalClose.addEventListener('click', hideModal);

		modal.addEventListener('click', (e) => {
			if(e.target === modal) {
				hideModal();
			}
		})

})