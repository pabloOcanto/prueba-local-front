import * as Yup from 'yup';
import { REGEXP } from '../../constants/regexp';

const schema = Yup.object({
    userDNI: Yup.string()
        .required('Valor requerido')
        .matches(REGEXP.NUMBERS, "Solo números")
        .min(8, 'El DNI debe contener 8 digitos')
        .max(8, 'El DNI debe contener 8 digitos'),
    email: Yup.string().email('Capture un email válido').required('Valor requerido'),
    phone:
        Yup.string()
            .matches(REGEXP.PHONE, 'Capture un número de teléfono válido')
            .required('Valor requerido'),
    fullName:
        Yup.string()
            .matches(REGEXP.ALPHA_NUM_NAME, 'Capture sólo caracteres alfanuméricos')
            .required('Valor requerido'),
    password1: Yup.string().required("Valor requerido"),
    password2: Yup.string().when("password1", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password1")],
            "Las contraseñas no coinciden"
        )
    })


    /*
userDNI:'',
    email:'',
    phone:'',
    fullName:''
    */

});

export default schema;