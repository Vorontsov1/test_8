import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toast.error(e.message));
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      toast.success(` Contact ${data.name} added successfully`, {
        duration: 3000,
      });
      // console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toast.error(e.message));
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.success(` Contact ${data.name} delete successfully`, {
        duration: 3000,
      });
      // console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(toast.error(e.message));
    }
  }
);
