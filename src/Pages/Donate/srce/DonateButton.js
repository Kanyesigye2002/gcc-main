import React from 'react';
import {FlutterWaveButton, closePaymentModal} from './dist/index';

export default function App() {
    const config = {
        public_key: 'FLWPUBK-df0e1543bbd487e4ee7b619dd0a1251e-X',
        tx_ref: Date.now(),
        // amount: 100,
        currency: 'UGX',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: 'gloriouschurch@gmail.com',
            // phonenumber: '07064586146',
            // name: 'joel ugwumadu',
        },
        customizations: {
            title: 'Glorious Church',
            description: 'Donate Online',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const fwConfig = {
        ...config,
        className: '',
        text: 'Donate Online',
        callback: (response) => {
            console.log(response);
            closePaymentModal() // this will close the modal programmatically
        },
        onClose: () => {
        },
    };

    return (
        <div>
            <FlutterWaveButton {...fwConfig} />
        </div>
    );
}