import React from 'react';

type ListProp<T> = {
  data: T[];
  renderItem: (data: T) => JSX.Element;
  renderEmpty: JSX.Element;
};

const List = <T,>({ data = [], renderItem, renderEmpty }: ListProp<T>) => {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default List;
