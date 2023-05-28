import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm } from './ContactForm.styled';
import { addContact } from '../../Redux/store';
import { nanoid } from 'nanoid';

export const ContactForm = ({ btn }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  // Контрольовані імпути
  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
      // dispatch(changeName(evt.target.value));
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  // Сабміт форми
  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const newContact = { name, number, id: nanoid() };

    // перевірка на наявний конткт
    const includesName = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (!includesName) {
      dispatch(addContact(newContact));
    } else {
      return alert(`${newContact.name} is already in contacts`);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    console.log('Clear');
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit">{btn}</button>
      </StyledForm>
    </div>
  );
};

// const handleDelete = id => {
//   setContacts(contacts.filter(contact => contact.id !== id));
// };

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = evt => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   onSubmit = evt => {
//     this.props.handleSubmit(event);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { btn } = this.props;

//     return (
//       <div>
//         <StyledForm onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//           <input
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />

//           <button type="submit">{btn}</button>
//         </StyledForm>
//       </div>
//     );
//   }
// }
