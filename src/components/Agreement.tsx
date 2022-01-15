import React from 'react';

type AgreementProp = {
  onAgree: () => void;
};

const Agreement = ({ onAgree = () => ({}) }: AgreementProp) => {
  return (
    <>
      <p>Terms...</p>
      <p>There are the terms and stuff. Do you agree?</p>
      <button onClick={onAgree}>I agree</button>
    </>
  );
};

export default Agreement;
