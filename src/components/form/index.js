import React from 'react';
import debounce from 'lodash.debounce';

const Forms = (props) => {

  const handleChange = event => props.handleUsernameChange(event.target.value)

  const debouncedChange = debounce(handleChange, 300)

  return (

    <form
      onSubmit={event => props.handleSubmit(event)}
      className="f-col-m4" >

      <input type="text" placeholder="Digite seu usuário Github"
        className="input-form"
        value={props.username}
        onChange={debouncedChange} />

      <button
        type="submit"
        className="btn-full btn-cyan"
      >Fazer Login</button>

    </form>
  );
};

export default Forms;