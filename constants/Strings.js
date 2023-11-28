export const UserTypes = {
  provider: {
    title: 'Provider',
    desc: 'HMO / Workers Comp / SNF / ALF / Medical Centers / OP Centers',
  },
  patients: {
    title: 'Patients',
    desc: 'Patients can book service order and can also order the products online',
  },
  staff: {
    title: 'Staff',
    desc: 'To register as an Staff, you must have an enrollment id of Mobility Health Care',
  },
};

export const ProviderTypes = {
  SNF_ALF: {
    title: 'SNF/ALF',
    desc: 'Skilled Nursing Facility and Assisted Living facilities',
  },
  HMO: {title: 'HMO', desc: ''},
  MEDICAL_OP_CENTERS: {title: 'Medical Centers / OP Centers', desc: ''},
  WORKERS: {title: 'Workers Comp', desc: ''},
};

export const ERRORS = {
  required: 'Required*',
  name_invalid: 'Alphabets Only',
  email_invalid: 'Must be a valid email address',
  password_invalid: 'Must be atleast 8 characters',
  mobile_length: 'Must be exactly 10 characters',
  postcode_length: 'Must be exactly 6 characters',
  user_does_not_exist: 'User does not exist. Please sign up.',
};

export const PLACEHOLDERS = {
  email: 'Email*',
  password: 'Password*',
  firstname: 'Firstname*',
  lastname: 'Lastname*',
  gender: 'Gender*',
  dateOfBirth: 'Brithday*',
  address: 'Address*',
  city: 'City*',
  state: 'State*',
  postcode: 'Postcode*',
  country: 'Country*',
  mobile: 'Mobile*',
  altMobile: 'Alternate Mobile',
  companyName: 'Company Name',
};

export const FLAT_BUTTON_TITLES = {
  forgotPassword: 'Forgot Password?',
  signup: 'Sign Up?',
  services: 'Service Terms',
  policies: 'Policies',
};
export const PRIMARY_BUTTON_TITLES = {
  login: 'LOGIN',
  signup: 'SIGN UP',
  getStarted: 'GET STARTED',
  loginAsGuest: 'LOGIN AS GUEST',
  logout: 'LOGOUT',
};

export const LIST_ITEM_TITLES = {
  mobility_clinic: 'Mobility Clinic',
  ideal_healthcare: 'Ideal Healthcare',
  mobility_rehab: 'Mobility Rehab SVCS',
  greeen_prosthetics: 'Green Prosthetics',
  care_crafters: 'Care Crafters',
};

export const STATIC_TEXTS = {
  summaryText: 
  `Care with Personal Touch and Integrity 
  Provide the most appropriate and value based 
  care all the time. We are just an appointment
  away for your world class care!`,
  no_account: `Don't have an account?`,
};

export const FORM_PARAMS_TITLES = {
  signup: 'signup',
  login: 'login',
};

export const USER_TYPES = {
  staff: 'staff',
  patient: 'patient',
  guest: 'Guest',
  provider: 'provider',
};
