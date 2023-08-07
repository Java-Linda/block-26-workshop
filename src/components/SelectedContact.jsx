//export default function SelectedContact() {}
import React, {useState, useEffect} from "react";

function selectedContact({ selectedContactId, setSelectedContactId}){
    const [contact, setContacts] = useState(null);

    useEffect(() => {
        async function fetchSelectedContact(){
            try{
                if (selectedContactId !== null){
                    const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`
    
                );
                const contactData = await response.json();
                setContact(contactData);
                }
            } catch (error){
                console.error(error);
            }
        }

        fetchSelectedContact();
    }, [selectedContactId]);

    if(contact === null){
        return<div>"No contact selected"</div>;
    }
}
