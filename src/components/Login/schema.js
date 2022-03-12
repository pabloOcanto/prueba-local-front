import * as Yup from 'yup';

const schema = Yup.object({
    user: Yup.string().email('invalid').required('Requerido'),
    password: Yup.string().required('Requerido'),

});  

export default schema;