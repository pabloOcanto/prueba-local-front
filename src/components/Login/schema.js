import * as Yup from 'yup';

const schema = Yup.object({
    dni: Yup.string().required('Requerido'),
    password: Yup.string().required('Requerido'),

});  

export default schema;