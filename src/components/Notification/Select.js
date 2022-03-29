import * as React from 'react'
import { ErrorMessage} from 'formik'
import Select from 'react-select'
import renderError from './renderError';

const Select_ = ({
  field, // { name, value, onChange, onBlur }
  form,//: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const { options,id ,text,name,value,handleChange} = props
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <Select
        {...field}
        {...props}
        options={options}
        value={(options ? options.find(option => option.name === value) : '')}
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        isMulti={true}
      />
   <ErrorMessage name={id} render={renderError} />
    </div>
  )
}
export default Select_;
// const [field, meta, helpers] = useField(name);
// const Select_ = ({ text, props, id, value, elements }) => (
//   //const [field, meta, helpers] = useField(name);
 
//   <>
//     <label style={{ color: '#9F9F9F' }}>{text} :</label>
//     <Select
//       id={id}
//       name={id}
//       //onChange={props.handleChange} 
//       onBlur={props.handleBlur}
//       value={value}
//       isMultiple={true}
//       options={elements}

//       getOptionLabel={(option) => option.name}
//       getOptionValue={(option) => option.id}
//       onChange={(value) => helpers.setValue(value)}
//     >
//       {/* {elements.length>1 && elements.map(element => (
//           <option key={element.id} value={element.id}>{element.name}</option>   
//         ))} */}

//     </Select>
//     <ErrorMessage name={id} render={renderError} />
//     <br />
//   </>
// );

// export default Select_;