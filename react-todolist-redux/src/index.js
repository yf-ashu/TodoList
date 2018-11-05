import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Layout from './js/components/Layout';

const wrapper = document.getElementById('App');
wrapper ? ReactDOM.render(<Layout />, wrapper) : false;
