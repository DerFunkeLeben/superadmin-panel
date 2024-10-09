import { DoctorRecord } from '@/types/api/doctors';

export const getDoctorFullName = (doctor?: DoctorRecord) => {
  if (!doctor) return '-';

  const { firstName, lastName, middleName } = doctor;

  if (!firstName && !lastName) return '-';

  return [lastName, firstName, middleName].filter(Boolean).join(' ');
};
