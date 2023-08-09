import React from "react";
import { useState, useEffect } from "react";
import ContactList from "./ContactList";

export default function ContactRow({ bubbles, pickId }) {
  return (
    <tr onClick={() =>{
      pickId(bubbles.id)
    }}>
      <td>{bubbles.name}</td>
      <td>{bubbles.email}</td>
      <td>{bubbles.phone}</td>
    </tr>
  );
}
