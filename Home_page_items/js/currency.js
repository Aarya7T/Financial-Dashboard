// API URL for fetching live currency rates
const apiURL = 'https://api.exchangerate-api.com/v4/latest/USD';

// Mapping of currency codes to country names
const currencyToCountryMap = {
  USD: 'United States',
  EUR: 'Eurozone',
  GBP: 'United Kingdom',
  JPY: 'Japan',
  AUD: 'Australia',
  CAD: 'Canada',
  CHF: 'Switzerland',
  CNY: 'China',
  SEK: 'Sweden',
  NZD: 'New Zealand',
  INR: 'India',
  BRL: 'Brazil',
  MXN: 'Mexico',
  ZAR: 'South Africa',
  ARS: 'Argentina',
  BGN: 'Bulgaria',
  BDT: 'Bangladesh',
  BMD: 'Bermuda',
  BHD: 'Bahrain',
  BTN: 'Bhutan',
  CLP: 'Chile',
  COP: 'Colombia',
  CZK: 'Czech Republic',
  DKK: 'Denmark',
  EGP: 'Egypt',
  FJD: 'Fiji',
  FKP: 'Falkland Islands',
  GHS: 'Ghana',
  GTQ: 'Guatemala',
  HUF: 'Hungary',
  IDR: 'Indonesia',
  ILS: 'Israel',
  IQD: 'Iraq',
  JMD: 'Jamaica',
  KES: 'Kenya',
  KHR: 'Cambodia',
  KRW: 'South Korea',
  KWD: 'Kuwait',
  LBP: 'Lebanon',
  LKR: 'Sri Lanka',
  LTL: 'Lithuania',
  LVL: 'Latvia',
  MAD: 'Morocco',
  MGA: 'Madagascar',
  MKD: 'North Macedonia',
  MMK: 'Myanmar',
  MNT: 'Mongolia',
  MYR: 'Malaysia',
  NOK: 'Norway',
  NPR: 'Nepal',
  OMR: 'Oman',
  PAB: 'Panama',
  PEN: 'Peru',
  PHP: 'Philippines',
  PKR: 'Pakistan',
  PLN: 'Poland',
  PYG: 'Paraguay',
  QAR: 'Qatar',
  RON: 'Romania',
  RUB: 'Russia',
  SAR: 'Saudi Arabia',
  SCR: 'Seychelles',
  SEK: 'Sweden',
  SGD: 'Singapore',
  THB: 'Thailand',
  TRY: 'Turkey',
  TWD: 'Taiwan',
  UAH: 'Ukraine',
  UGX: 'Uganda',
  UYU: 'Uruguay',
  VEF: 'Venezuela',
  VND: 'Vietnam',
  YER: 'Yemen',
  ZAR: 'South Africa',
  AED: 'United Arab Emirates',
  AFN: 'Afghanistan',
  ALL: 'Albania',
  AMD: 'Armenia',
  ANG: 'Netherlands Antilles',
  AOA: 'Angola',
  ARS: 'Argentina',
  AWG: 'Aruba',
  AZN: 'Azerbaijan',
  BAM: 'Bosnia and Herzegovina',
  BBD: 'Barbados',
  BDT: 'Bangladesh',
  BGN: 'Bulgaria',
  BHD: 'Bahrain',
  BIF: 'Burundi',
  BMD: 'Bermuda',
  BND: 'Brunei',
  BOB: 'Bolivia',
  BRL: 'Brazil',
  BSD: 'Bahamas',
  BTN: 'Bhutan',
  BWP: 'Botswana',
  BYN: 'Belarus',
  BZD: 'Belize',
  CAD: 'Canada',
  CDF: 'Democratic Republic of Congo',
  CHF: 'Switzerland',
  CLP: 'Chile',
  CNY: 'China',
  COP: 'Colombia',
  CRC: 'Costa Rica',
  CUP: 'Cuba',
  CVE: 'Cape Verde',
  DJF: 'Djibouti',
  DKK: 'Denmark',
  DOP: 'Dominican Republic',
  DZD: 'Algeria',
  EGP: 'Egypt',
  ERN: 'Eritrea',
  ETB: 'Ethiopia',
  EUR: 'Eurozone',
  FJD: 'Fiji',
  FKP: 'Falkland Islands',
  FOK: 'Faroe Islands',
  GBP: 'United Kingdom',
  GEL: 'Georgia',
  GGP: 'Guernsey',
  GHS: 'Ghana',
  GIP: 'Gibraltar',
  GMD: 'Gambia',
  GNF: 'Guinea',
  GTQ: 'Guatemala',
  GYD: 'Guyana',
  HKD: 'Hong Kong',
  HNL: 'Honduras',
  HRK: 'Croatia',
  HTG: 'Haiti',
  HUF: 'Hungary',
  IDR: 'Indonesia',
  ILS: 'Israel',
  IMP: 'Isle of Man',
  INR: 'India',
  IQD: 'Iraq',
  IRR: 'Iran',
  ISK: 'Iceland',
  JEP: 'Jersey',
  JMD: 'Jamaica',
  JOD: 'Jordan',
  JPY: 'Japan',
  KES: 'Kenya',
  KGS: 'Kyrgyzstan',
  KHR: 'Cambodia',
  KID: 'Kiribati',
  KMF: 'Comoros',
  KRW: 'South Korea',
  KWD: 'Kuwait',
  KYD: 'Cayman Islands',
  KZT: 'Kazakhstan',
  LAK: 'Laos',
  LBP: 'Lebanon',
  LKR: 'Sri Lanka',
  LSL: 'Lesotho',
  LYD: 'Libya',
  MAD: 'Morocco',
  MDL: 'Moldova',
  MGA: 'Madagascar',
  MKD: 'North Macedonia',
  MMK: 'Myanmar',
  MNT: 'Mongolia',
  MOP: 'Macao',
  MRU: 'Mauritania',
  MUR: 'Mauritius',
  MVR: 'Maldives',
  MWK: 'Malawi',
  MXN: 'Mexico',
  MYR: 'Malaysia',
  MZN: 'Mozambique',
  NAD: 'Namibia',
  NGN: 'Nigeria',
  NIO: 'Nicaragua',
  NOK: 'Norway',
  NPR: 'Nepal',
  NZD: 'New Zealand',
  OMR: 'Oman',
  PAB: 'Panama',
  PEN: 'Peru',
  PGK: 'Papua New Guinea',
  PHP: 'Philippines',
  PKR: 'Pakistan',
  PLN: 'Poland',
  PYG: 'Paraguay',
  QAR: 'Qatar',
  RON: 'Romania',
  RSD: 'Serbia',
  RUB: 'Russia',
  RWF: 'Rwanda',
  SAR: 'Saudi Arabia',
  SBD: 'Solomon Islands',
  SCR: 'Seychelles',
  SDG: 'Sudan',
  SEK: 'Sweden',
  SGD: 'Singapore',
  SHP: 'Saint Helena',
  SLE: 'Sierra Leone',
  SLL: 'Sierra Leone',
  SOS: 'Somalia',
  SRD: 'Suriname',
  SSP: 'South Sudan',
  STN: 'Saint Kitts and Nevis',
  SYP: 'Syria',
  SZL: 'Swaziland',
  THB: 'Thailand',
  TJS: 'Tajikistan',
  TMT: 'Turkmenistan',
  TND: 'Tunisia',
  TOP: 'Tonga',
  TRY: 'Turkey',
  TTD: 'Trinidad and Tobago',
  TVD: 'Tuvalu',
  TWD: 'Taiwan',
  TZS: 'Tanzania',
  UAH: 'Ukraine',
  UGX: 'Uganda',
  UYU: 'Uruguay',
  UZS: 'Uzbekistan',
  VES: 'Venezuela',
  VND: 'Vietnam',
  VUV: 'Vanuatu',
  WST: 'Samoa',
  XAF: 'Central African CFA Franc',
  XCD: 'East Caribbean Dollar',
  XDR: 'International Monetary Fund (IMF)',
  XOF: 'West African CFA Franc',
  XPF: 'CFP Franc',
  YER: 'Yemen',
  ZAR: 'South Africa',
  ZMW: 'Zambia',
  ZWL: 'Zimbabwe',
};

// Fetch the currency rates and populate the dropdowns
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    const currencies = Object.keys(data.rates);
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');

    // Populate the currency options dynamically with country names
    currencies.forEach(currency => {
      const optionFrom = document.createElement('option');
      optionFrom.value = currency;
      optionFrom.textContent = `${currency} - ${currencyToCountryMap[currency] || 'Unknown Country'}`;
      fromCurrencySelect.appendChild(optionFrom);

      const optionTo = document.createElement('option');
      optionTo.value = currency;
      optionTo.textContent = `${currency} - ${currencyToCountryMap[currency] || 'Unknown Country'}`;
      toCurrencySelect.appendChild(optionTo);
    });
  })
  .catch(error => console.error('Error fetching currency data:', error));

// Function to perform currency conversion
function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('from-currency').value.split(' ')[0]; // Extract currency code
  const toCurrency = document.getElementById('to-currency').value.split(' ')[0]; // Extract currency code

  if (amount === '') {
    alert('Please enter an amount.');
    return;
  }

  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const rateFrom = data.rates[fromCurrency];
      const rateTo = data.rates[toCurrency];
      const convertedAmount = (amount / rateFrom) * rateTo;
      
      // Display the result with full country names
      document.getElementById('result').textContent = `${convertedAmount.toFixed(2)} ${toCurrency} (${currencyToCountryMap[toCurrency] || 'Unknown Country'})`;
    })
    .catch(error => console.error('Error fetching conversion data:', error));
}
