import settings from '../../config.json';
// import DatePlanner from './modules/DatePlanner';

/*
const dp = new DatePlanner({
	element: '#datePlanner',
	data: {
		'ma': [{
			value: 9,
			selected: false,
		},{
			value: 10,
			selected: true,
		},{
			value: 11,
			selected: true,
		},{
			value: 12,
			selected: false,
		},{
			value: 13,
			selected: false,
		},{
			value: 14,
			selected: false,
		},{
			value: 15,
			selected: false,
		},{
			value: 16,
			selected: false,
		},{
			value: 17,
			selected: false,
		}]
	}
});
*/

const $products = document.querySelectorAll('.product');
$products.forEach($product => {
	const $selectInputs = $product.querySelectorAll('.select');
	const $price = $product.querySelector('.price');
	const $orderButton = $product.querySelector('.order');

	if($selectInputs.length == 0) {
		return;
	}

	$selectInputs.forEach($input => {
		$input.addEventListener('change', event => {
			const value = $input.value;
			const label = $input.options[$input.selectedIndex].innerText;

			$price.innerText = Number($price.dataset.original) + Number(value);
			$orderButton.href = $orderButton.href.replace(/\((.*?)\)/, `(${label})`);
		})
	})
})



// Upgrade http to https
if(location.href.indexOf('http://') > -1 && location.href.indexOf('localhost') == -1){
	location.href = 'https://computerdokter.nl';
}