import * as Yup from 'yup';

const schema = Yup.object({
    title: Yup.string().required('Requerido'),
    message: Yup.string().required('Requerido'),

});  

export default schema;