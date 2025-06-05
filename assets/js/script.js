const dateElement = document.querySelector('.date');

const now = new Date();
const formattedDate = now.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
});

dateElement.textContent = formattedDate;


const actual_form = document.getElementById('form-container')
const convert = document.getElementById('submit')
const reset = document.getElementById('reset')
const result = document.querySelector('.result')
const h3 = document.querySelector('.result > h3')
const input_amount = document.querySelector('input')
const select_element = document.querySelectorAll('select')
const result_element = document.querySelector('.result > h3')

actual_form.addEventListener('submit', (e) => {
    e.preventDefault();

    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
    });

    // Update the content of the <p> element
    dateElement.textContent = formattedDate;


    // Fetch the values inside the event listener
    const convert_from = document.getElementById('convert-from').value
    const convert_to = document.getElementById('convert-to').value
    let amount = document.getElementById('amount').value.trim();


    result.style.top = '4.3rem'

    if (amount === '') {
        input_amount.style.border = '2px solid #f74b4b'
        result.style.top = '1.5rem'
        result.style.top = '4.3rem'
        result_element.textContent = '0.00 USD'
    } else {
        input_amount.style.border = '2px solid #4fc24f'
    }

    if (convert_from === 'zero') {
        select_element[0].style.border = '2px solid #f74b4b'
        result.style.top = '1.5rem'
        result_element.textContent = '0.00 USD'
    } else {
        select_element[0].style.border = ''
    }

    if (convert_to === 'zero') {
        select_element[1].style.border = '2px solid #f74b4b'
        result.style.top = '1.5rem'
        result_element.textContent = '0.00 USD'
    } else {
        select_element[1].style.border = ''
    }

    if (amount === '' || convert_from === 'zero' || convert_to === 'zero') {
        result.style.top = '1.5rem'
        result_element.textContent = '0.00 USD'
        return
    }

    currency_converter()

    // console.log(`Convert from value: ${convert_from}`)
    // console.log(`Convert to value: ${convert_to}`)
    // console.log(`Total amount: ${amount}`)
});

reset.addEventListener('click', () => {
    result.style.top = '1.5rem'
    result_element.textContent = '0.00 USD'
})

function currency_converter() {
    const convert_from = document.getElementById('convert-from').value
    const convert_to = document.getElementById('convert-to').value
    let amount = document.getElementById('amount').value.trim()

    amount = Number(amount)

    currencies = {
        USD: 1,
        JYP: 143.75,
        EUR: 0.88,
        RUB: 78.73,
        GBP: 0.74,
        NRA: 137.32,
        SHL: 129.20,
        RWF: 1414.20
    }

    if (convert_from != 'zero'|| convert_to != 'zero') {
        let total_amount = amount * currencies[convert_to] / currencies[convert_from]
        
        total_amount = total_amount.toFixed(4)
        result_element.textContent = `${total_amount} ${convert_to}`
        result.style.top = '4.3rem'
    } else {
        result.style.top = '1.5rem'
    }
}

// Applying the details js script

const toggle_convertFrom = document.getElementById('convert-from')
const toggle_convertTo = document.getElementById('convert-to')
const detail_from = document.querySelector('.from')
const detail_to = document.querySelector('.to')
currencies = {
    USD: 1,
    JYP: 143.75,
    EUR: 0.88,
    RUB: 78.73,
    GBP: 0.74,
    NRA: 137.32,
    SHL: 129.20,
    RWF: 1414.20
}


toggle_convertFrom.addEventListener('change', () =>  {
    const optionFrom_element = toggle_convertFrom.options[toggle_convertFrom.selectedIndex]
    selected_option = optionFrom_element.text
    if (optionFrom_element != 'zeroCurrency To Convert From') {
        detail_from.textContent = `1 ${selected_option} equals`   
    }
    // else {
    //     detail_from.textContent = 'Currency to convert from'
    // }
})

toggle_convertTo.addEventListener('change', () =>  {
    const convert_toValue = toggle_convertTo.value
    const convert_fromValue = toggle_convertFrom.value
    if (convert_toValue != 'zero' && convert_fromValue != 'zero') {

        let calculations = 1 * currencies[convert_toValue] / currencies[convert_fromValue]
        calculations = calculations.toFixed(4)

        detail_to.textContent = `${calculations} ${convert_toValue}`   
    }
    // else {
    //     detail_to.textContent = 'Currency to convert to'
    // }
})

    reset.addEventListener('click', () => {
    detail_from.textContent = 'Currency to convert from'
    detail_to.textContent = 'Currency to convert to'
})