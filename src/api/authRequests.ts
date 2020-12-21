import { registerFormData, loginFormData } from './../types';
import API from './api';

export const register = async (formData: registerFormData) => {
  try {
    const res = await API.post('/auth/register', formData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const login = async (formData: loginFormData) => {
  try {
    const res = await API.post('/auth/login', formData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getMe = async (options = {}) => {
  try {
    const res = await API.get('/auth/me');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const updateDetails = async (formData: any) => {
  try {
    const res = await API.put('/auth/updatedetails', formData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const updatePassword = async (formData: any) => {
  try {
    const res = await API.put('/auth/updatepassword', formData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const logout = async () => {
  try {
    const res = await API.get('/auth/logout');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const res = await API.post('/auth/forgotpassword', { email });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const resetPassword = async (token: string, password: string) => {
  try {
    const res = await API.put(`/auth/resetpassword/${token}`, { password });
    return res.data;
  } catch (err) {
    throw err;
  }
};
