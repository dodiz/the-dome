const joiCustomMessages = {
    "string.empty": "Il campo non può essere vuoto",
    "string.min": "Almeno {{#limit}} caratteri",
    "string.max": "Il campo non può contenere più di {{#limit}} caratteri",
    "string.alphanum": "I caratteri speciali non sono ammessi",
    "string.email": "Dev'essere un email valida",
    "any.only": "Deve coincidere con {if(#valids.length == 1, '', 'uno tra ')}{{#valids}}"
}

export default joiCustomMessages