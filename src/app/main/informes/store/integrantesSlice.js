import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getIntegrantes = createAsyncThunk(
  'informesApp/informes/getIntegrantes',
  async (params, { getState }) => {
    const response = await axios.post(
      'rest',
      {
        params: {
          endpoint: 'search_read',
          args: {
            sid: window.localStorage.getItem('session_id'), // session_id
            model: 'res.partner',
            filter: `[('red_id', '=', ${window.localStorage.getItem('red_id')})]`, // red_id
            fields: "['id', 'name']",
          },
        },
      },
      {
        withCredentials: true,
      });

    const data = await response.data;
    return data.result.data;
  }
);

const integrantesAdapter = createEntityAdapter({});

export const { selectAll: selectIntegrantes, selectById: selectIntegrantesById } =
  integrantesAdapter.getSelectors((state) => state.informesApp.integrantes);

const integrantesSlice = createSlice({
  name: 'informesApp/integrantes',
  initialState: integrantesAdapter.getInitialState([]),
  reducers: {},
  extraReducers: {
    [getIntegrantes.fulfilled]: integrantesAdapter.setAll,
  },
});

export default integrantesSlice.reducer;
