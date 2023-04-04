import React from "react";
import { ContactsForm } from "./ContactForm/ContactForm";
import { ContactsList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout";
import { GlobalStyles } from "./GlobalStyles";




export const App = () => {
    return (
      <Layout>
        <GlobalStyles/>
        <h1>Phonebook</h1>
        <ContactsForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </Layout>
    )
  
}