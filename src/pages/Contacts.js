import React from 'react';

import Layout from '../components/Layout';
import Styles from '../styles/contacts.module.css';

function Contacts() {
    document.title = 'Contacts | TSG';
    return (
        <Layout>
            <h1 className='pageHeading'>
                Contact Us
            </h1>
            <div className={Styles.contactsContainer}>

            </div>
        </Layout>
    )
}

export default Contacts;
