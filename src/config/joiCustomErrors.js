const joiCustomMessages = {
    "string.empty": "Il campo non può essere vuoto",
    "string.min": "Almeno {{#limit}} caratteri",
    "string.max": "Il campo non può contenere più di {{#limit}} caratteri",
    "string.alphanum": "I caratteri speciali non sono ammessi",
    "string.email": "Dev'essere un email valida",
    "any.only": "Deve coincidere con {if(#valids.length == 1, '', 'uno tra ')}{{#valids}}",
    "number.max": "Non può superare {{#limit}}",
    "number.min": "Deve superare {{#limit}}",
    "number.base": "Dev'essere un numero",
    "date.base": "Dev'essere una data valida"
}

export default joiCustomMessages