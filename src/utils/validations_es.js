// @flow

/* eslint-disable no-useless-escape */
export const required = (value: string): string | typeof undefined =>
  value === null || value === '' || value === undefined ? 'Campo requerido.' : undefined;

export const password = (value: string): string | typeof undefined =>
  value
    ? (value.length > 50 ? 'La contraseña solo puede tener hasta 50 caracteres.' : undefined) ||
      (value.length < 6 ? 'Mínimo 6 carácteres.' : undefined)
    : undefined;

export const phone = (value: string): string | null => {
  const regexIntegerOrDecimal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{4,6}$/im;
  if (value) {
    return regexIntegerOrDecimal.test(value) ? null : 'Teléfono inválido';
  }
  return value;
};

export const onlyWords = (value: string): string | null => {
  const regexWordsAndSpacesBetween = /^[a-zA-ZÀ-ÿ ]*$/;
  if (value) {
    return regexWordsAndSpacesBetween.test(value) ? null : 'Este campo solo admite letras.';
  }
  return value;
};

export const onlyNumbers = (value: string): string | null => {
  const regexWordsAndSpacesBetween = /^[1-9]+$/;
  if (value) {
    return regexWordsAndSpacesBetween.test(value) ? null : 'Este campo solo admite numeros.';
  }
  return value;
};

export const validateEmail = (value: string): string | null => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (value) {
    return emailRegex.test(value) ? null : 'Email inválido';
  }
  return null;
};

export const confirmPassword = (value: string, allValues: Object): string | null => {
  const pass = allValues.password;
  if (value) {
    if (pass) {
      return pass === value ? null : 'Las contraseñas no coinciden.';
    }
    return null;
  }
  return 'Debe introducir una contraseña.';
};
