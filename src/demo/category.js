const cats = ["CER",
"DST",
"SVS",
"BNB",
"VHV",
"FIT",
"WJW",
"LIT",
"HRB",
"NLW",
"BPH",
"VAR",
"CAC",
"DES",
"TEC",
"TAX",
"BDS",
"BAR",
"REG",
"BWP",
"REC",
"CAL",
"CAT",
"WCK",
"OPC",
"DJS",
"DNC",
"TRA",
"VID",
"PLN",
"ACC",
"PHB",
"RNT",
"FLO",
"FAV",
"GAC",
"ALP",
"TRV",
"BEA",
"INV",
"JWL",
"DEC",
"MEN",
"WPH",
"SPV",
"ENS"]

const showArea = 'BDS/OPC/DJS/SVS/PHB/WPH/ENS/TRA/VID/PLN/BPH/VAR/DES/FIT/FLO/BEA/RNT/LIT/DEC/WCK/DST/CAT/BAR'


;(() => {
    cats.forEach(c => {
        if (!showArea.includes(c)) {
            console.log(c)
        }
    })
})()

const cNotHaveArea = ['CER',
'BNB',
'VHV',
'WJW',
'HRB',
'NLW',
'CAC',
'TEC',
'TAX',
'REG',
'BWP',
'REC',
'CAL',
'DNC',
'ACC',
'FAV',
'GAC',
'ALP',
'TRV',
'INV',
'JWL',
'MEN',
'SPV']