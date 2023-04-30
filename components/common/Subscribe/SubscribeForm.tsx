import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../../utils/baseUrl';

const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your are now part of our email list',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  email: ""
};

const SubscribeForm = () => {
  const [contact, setSubscribeForm] = useState(INITIAL_STATE);
  const { register, handleSubmit } = useForm();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setSubscribeForm(prevState => ({ ...prevState, [name]: value }));
  }

  const onSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    try {
      const url = `${baseUrl}/api/subscribe`;
      const { email } = contact;
      const payload = { email };
      await axios.post(url, payload);
      setSubscribeForm(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error)
    }
  };

  const textField = register('email', { required: true, pattern: /^\S+@\S+$/i  })

  return (
    <>
    <form className="newsletter-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="input-newsletter"
        placeholder="Enter your email address"
        value={contact.email}
        {...textField}
        onChange={(e) => {
          textField.onChange(e);
          handleChange(e);
        }}
      />

      <button type="submit" className="default-btn">
        <i className="flaticon-user"></i> Subscribe Now <span></span>
      </button>
    </form>
    </>
  )
}

export default SubscribeForm;