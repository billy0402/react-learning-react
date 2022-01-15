import React, { FormEvent } from 'react';

import { useInput } from '../hooks/useInput';

type SearchFormProp = {
  value: string;
  onSearch?: (name: string) => void;
};

const SearchForm = ({ value, onSearch = () => ({}) }: SearchFormProp) => {
  const [nameProps, resetName] = useInput(value);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(nameProps.value);
    resetName();
  };

  return (
    <form onSubmit={submit}>
      <input type='text' {...nameProps} placeholder='user name...' required />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
