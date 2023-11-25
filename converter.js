const units = {
    length: ['meter', 'kilometer', 'mile', 'foot', 'inch'],
    temperature: ['celsius', 'fahrenheit', 'kelvin'],
    weight: ['gram', 'kilogram', 'pound', 'ounce', 'milligram'],
    time: ['second', 'minute', 'hour', 'day', 'week'],
    currency: ['USD', 'PHP', 'JPY', 'EUR']
};

function updateUnits() {
    const category = document.getElementById('category').value;
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');

    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    units[category].forEach(unit => {
        const option = document.createElement('option');
        option.value = unit;
        option.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        fromUnitSelect.appendChild(option.cloneNode(true));
        toUnitSelect.appendChild(option);
    });
}

function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    const result = performConversion(value, fromUnit, toUnit);

    document.getElementById('result').innerText = `Result: ${result} ${toUnit}`;
}

function performConversion(value, fromUnit, toUnit) {

    if (fromUnit === toUnit) {
        return value; 
    } else if (fromUnit === 'meter' && toUnit === 'kilometer') {
        return value / 1000;
    } else if (fromUnit === 'meter' && toUnit === 'mile') {
        return value / 1609.34;
    } else if (fromUnit === 'meter' && toUnit === 'foot') {
        return value * 3.28084;
    } else if (fromUnit === 'meter' && toUnit === 'inch') {
        return value * 39.3701;
    } else if (fromUnit === 'kilometer' && toUnit === 'meter') {
        return value * 1000;
    } else if (fromUnit === 'kilometer' && toUnit === 'mile') {
        return value / 1.60934;
    } else if (fromUnit === 'kilometer' && toUnit === 'foot') {
        return value * 3280.84;
    } else if (fromUnit === 'kilometer' && toUnit === 'inch') {
        return value * 39370.1;
    } else if (fromUnit === 'mile' && toUnit === 'meter') {
        return value * 1609.34;
    } else if (fromUnit === 'mile' && toUnit === 'kilometer') {
        return value * 1.60934;
    } else if (fromUnit === 'mile' && toUnit === 'foot') {
        return value * 5280;
    } else if (fromUnit === 'mile' && toUnit === 'inch') {
        return value * 63360;
    } else if (fromUnit === 'foot' && toUnit === 'meter') {
        return value / 3.28084;
    } else if (fromUnit === 'foot' && toUnit === 'kilometer') {
        return value / 3280.84;
    } else if (fromUnit === 'foot' && toUnit === 'mile') {
        return value / 5280;
    } else if (fromUnit === 'foot' && toUnit === 'inch') {
        return value * 12;
    } else if (fromUnit === 'inch' && toUnit === 'meter') {
        return value / 39.3701;
    } else if (fromUnit === 'inch' && toUnit === 'kilometer') {
        return value / 39370.1;
    } else if (fromUnit === 'inch' && toUnit === 'mile') {
        return value / 63360;
    } else if (fromUnit === 'inch' && toUnit === 'foot') {
        return value / 12;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        return (value * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        return value + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        return (value - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        return (value - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        return value - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        return (value - 273.15) * 9/5 + 32;
    } else if (fromUnit === 'gram' && toUnit === 'kilogram') {
        return value / 1000;
    } else if (fromUnit === 'gram' && toUnit === 'pound') {
        return value / 453.592;
    } else if (fromUnit === 'gram' && toUnit === 'ounce') {
        return value / 28.3495;
    } else if (fromUnit === 'gram' && toUnit === 'milligram') {
        return value * 1000;
    } else if (fromUnit === 'kilogram' && toUnit === 'gram') {
        return value * 1000;
    } else if (fromUnit === 'kilogram' && toUnit === 'pound') {
        return value * 2.20462;
    } else if (fromUnit === 'kilogram' && toUnit === 'ounce') {
        return value * 35.274;
    } else if (fromUnit === 'kilogram' && toUnit === 'milligram') {
        return value * 1e+6;
    } else if (fromUnit === 'pound' && toUnit === 'gram') {
        return value * 453.592;
    } else if (fromUnit === 'pound' && toUnit === 'kilogram') {
        return value / 2.20462;
    } else if (fromUnit === 'pound' && toUnit === 'ounce') {
        return value * 16;
    } else if (fromUnit === 'pound' && toUnit === 'milligram') {
        return value * 453592;
    } else if (fromUnit === 'ounce' && toUnit === 'gram') {
        return value * 28.3495;
    } else if (fromUnit === 'ounce' && toUnit === 'kilogram') {
        return value / 35.274;
    } else if (fromUnit === 'ounce' && toUnit === 'pound') {
        return value / 16;
    } else if (fromUnit === 'ounce' && toUnit === 'milligram') {
        return value * 28349.5;
    } else if (fromUnit === 'milligram' && toUnit === 'gram') {
        return value / 1000;
    } else if (fromUnit === 'milligram' && toUnit === 'kilogram') {
        return value / 1e+6;
    } else if (fromUnit === 'milligram' && toUnit === 'pound') {
        return value / 453592;
    } else if (fromUnit === 'milligram' && toUnit === 'ounce') {
        return value / 28349.5;
    } else if (fromUnit === 'second' && toUnit === 'minute') {
        return value / 60;
    } else if (fromUnit === 'second' && toUnit === 'hour') {
        return value / 3600;
    } else if (fromUnit === 'second' && toUnit === 'day') {
        return value / 86400;
    } else if (fromUnit === 'second' && toUnit === 'week') {
        return value / 604800;
    } else if (fromUnit === 'minute' && toUnit === 'second') {
        return value * 60;
    } else if (fromUnit === 'minute' && toUnit === 'hour') {
        return value / 60;
    } else if (fromUnit === 'minute' && toUnit === 'day') {
        return value / 1440;
    } else if (fromUnit === 'minute' && toUnit === 'week') {
        return value / 10080;
    } else if (fromUnit === 'hour' && toUnit === 'second') {
        return value * 3600;
    } else if (fromUnit === 'hour' && toUnit === 'minute') {
        return value * 60;
    } else if (fromUnit === 'hour' && toUnit === 'day') {
        return value / 24;
    } else if (fromUnit === 'hour' && toUnit === 'week') {
        return value / 168;
    } else if (fromUnit === 'day' && toUnit === 'second') {
        return value * 86400;
    } else if (fromUnit === 'day' && toUnit === 'minute') {
        return value * 1440;
    } else if (fromUnit === 'day' && toUnit === 'hour') {
        return value * 24;
    } else if (fromUnit === 'day' && toUnit === 'week') {
        return value / 7;
    } else if (fromUnit === 'week' && toUnit === 'second') {
        return value * 604800;
    } else if (fromUnit === 'week' && toUnit === 'minute') {
        return value * 10080;
    } else if (fromUnit === 'week' && toUnit === 'hour') {
        return value * 168;
    } else if (fromUnit === 'week' && toUnit === 'day') {
        return value * 7;
    } else if (fromUnit === 'USD' && toUnit === 'PHP') {
        
        const exchangeRate = 55.87;
        return value * exchangeRate;
    } else if (fromUnit === 'PHP' && toUnit === 'USD') {
        
        const exchangeRate = 0.018;
        return value * exchangeRate;
    } else if (fromUnit === 'USD' && toUnit === 'JPY') {
        
        const exchangeRate = 151.39;
        return value * exchangeRate;
    } else if (fromUnit === 'JPY' && toUnit === 'USD') {
        
        const exchangeRate = 0.0066;
        return value * exchangeRate;
    } else if (fromUnit === 'USD' && toUnit === 'EUR') {
        
        const exchangeRate = 0.94;
        return value * exchangeRate;
    } else if (fromUnit === 'EUR' && toUnit === 'USD') {
        
        const exchangeRate = 1.07;
        return value * exchangeRate;
    } else if (fromUnit === 'PHP' && toUnit === 'JPY') {
        
        const exchangeRate = 2.71;
        return value * exchangeRate;
    } else if (fromUnit === 'JPY' && toUnit === 'PHP') {
        
        const exchangeRate = 0.37;
        return value * exchangeRate;
    } else if (fromUnit === 'PHP' && toUnit === 'EUR') {
        
        const exchangeRate = 0.017;
        return value * exchangeRate;
    } else if (fromUnit === 'EUR' && toUnit === 'PHP') {
        
        const exchangeRate = 59.73;
        return value * exchangeRate;
    } else if (fromUnit === 'EUR' && toUnit === 'JPY') {
        
        const exchangeRate = 161.80;
        return value * exchangeRate;
    } else if (fromUnit === 'JPY' && toUnit === 'EUR') {
        
        const exchangeRate = 0.0062;
        return value * exchangeRate;
    
    
    } else {
        
        alert('Unsupported conversion');
        return NaN;
    }
}

updateUnits();
