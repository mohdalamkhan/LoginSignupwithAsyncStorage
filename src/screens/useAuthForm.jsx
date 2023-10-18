// hooks/useAuthForm.js
import {useForm, Controller} from 'react-hook-form';

export const useAuthForm = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  return {
    control,
    handleSubmit,
    errors,
    reset,
  };
};
