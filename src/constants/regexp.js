export const REGEXP = {
    ALPHA_NUM_NAME: RegExp(/^[^<>!":;`%@\$\*=\u005B-\u005E\u007B-\u007E\u002B]*$/),
    ALPHA_NUM: RegExp(/^[^<>!":;`%@\$\*()=\u005B-\u005E\u007B-\u007E\u002B]*$/),
    PHONE: RegExp(
        /((\[+]{1}[(]{1}[)]{1}\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{1,4})(-| )?(\d)(( x| ext)\d{1,5}){0,1}$/
    ),
    PHONE_USCA: RegExp(/^\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/),
    EMAIL: RegExp(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    ),
    CI_ALPHA_NUM: RegExp(/^[a-zA-Z0-9-= ]*$/),
    CI_COO: RegExp(/^[a-zA-Z ]*$/),
    CI_NUMERIC: RegExp(/^[0-9]*$/),
    BLOCK_SIMBOLS: RegExp(/[`!@#$%^&*()_+\-=\[\]{}'"\\|<>\/?~]/),
    EMAIL_NOTI: RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
    SHIPMENTS: RegExp('^[aA-zZ0-9, *]*$'),
    NUMBERS: RegExp('^[0-9]*$'),
    RMAS: RegExp('^[0-9, *]*$'),
    RMASRLSP: RegExp('^[0-9, *-]*$'),
    DATE: /(\d{4})(\d{2})(\d{2})/,
    MSG: /([a-zA-Z0-9-_]+):([a-zA-Z0-9-_@.'/\s]+)/g,
    ADDITIONAL_INFO: RegExp(/^[^'"]*$/)
};