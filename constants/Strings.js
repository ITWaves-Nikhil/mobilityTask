export const UserTypes = {
  provider: {
    title: 'Providers',
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

export const ERROR_MESSAGES = {
  email_invalid: '',
  name_invalid: 'Must be characters only',
};
