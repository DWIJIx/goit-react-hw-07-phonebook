import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { Section, FilterInput, FilterLabel } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const inputValue = useSelector(getFilter);
  const changeFilter = event => {
    // console.log(event.currentTarget.value)
    // console.log(event.currentTarget.name)
    const filter = event.currentTarget.value;
    dispatch(setFilter(filter));
  };
  return (
    <Section>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          onChange={changeFilter}
          value={inputValue}
        />
      </FilterLabel>
    </Section>
  );
};
