import * as Yup from 'yup';

// Repeated error messages
const REQUIRED_ERROR = 'Required';
const NUMBER_ERROR = 'Must be a number';
const LENGTH_ERROR = (len) => `Must be exactly ${len} digits`;

export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(REQUIRED_ERROR),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required(REQUIRED_ERROR),
    areaCode: Yup.number()
        .typeError(NUMBER_ERROR)
        .test('len', LENGTH_ERROR(3), (val) => {
            if (typeof val !== 'undefined') {
                return val.toString().length === 3;
            }
            return true;
        })
        .required(REQUIRED_ERROR),
    telNum: Yup.number()
        .typeError(NUMBER_ERROR)
        .test('len', LENGTH_ERROR(7), (val) => {
            if (typeof val !== 'undefined') {
                return val.toString().length === 7;
            }
            return true;
        })
        .required(REQUIRED_ERROR),
    email: Yup.string().email('Must be a valid email').required(REQUIRED_ERROR),
    orderType: Yup.string().required(REQUIRED_ERROR),
    order: Yup.string()
        .min(3, 'Too Short')
        .max(250, 'Too Long!')
        .required(REQUIRED_ERROR)
});
