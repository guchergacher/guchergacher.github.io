'use strict';

const data = {
  'currentTariff': 3,
  'price': 34,
  'numbersLicenses': 10
};

const form = document.querySelector('.tariff-plans__form');
const radioList = form.querySelectorAll('.tariff-plans__field-radio');
const selectedNumber = form.querySelector('.tariff-plans__select');
const totalPrice = form.querySelector('.tariff-plans__total-price');
const totalPriceField = form.querySelector('.tariff-plans__field-price');
const selectedPlan = form.querySelector('.tariff-plans__selected-num');

const changePrice = function () {
  const total = data.price * data.numbersLicenses;

  totalPriceField.value = total;
  totalPrice.textContent = '$' + total;
};

radioList[2].checked = true;
selectedNumber.options[1].selected = true;
selectedPlan.textContent = '#' + data.currentTariff;

changePrice();

selectedNumber.addEventListener('change', function () {
  data.numbersLicenses = selectedNumber.value;

  changePrice();
});


const changeCurrentRadio = function (radio) {
  radio.addEventListener('change', function () {
    const priceElement = radio.parentNode.querySelector('.tariff-palns__price');

    data.currentTariff = radio.value;
    data.price = priceElement.dataset.price;

    changePrice();

    selectedPlan.textContent = '#' + data.currentTariff;
  });
};

for (let i = 0; i < radioList.length; i++) {
  changeCurrentRadio(radioList[i]);
}
