import React, { useState } from 'react';
import { Select, Col } from '@mantine/core';


interface Option {
  label: string;
  value: string;
}

interface GroupOptions {
  label: string;
  options: Option[];
}

interface SelectOptionsProps {
  groups: GroupOptions[];
}

const SelectOptions: React.FC<SelectOptionsProps> = ({ groups }) => {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleGroupChange = (value: string) => {
    setSelectedGroup(value);
    setSelectedOption(null);
  };

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  const getOptionsForGroup = (groupName: string) => {
    const group = groups.find(group => group.label === groupName);
    return group ? group.options : [];
  };

  return (
    <>
      <Select
        data={groups.map(group => ({ label: group.label, value: group.label }))}
        placeholder="Selecione" label="Componente Curricular" withAsterisk
        value={selectedGroup || ''}
        onChange={(value) => handleGroupChange(value as string)}
      />

      {selectedGroup && (
        <Select
          data={getOptionsForGroup(selectedGroup).map(option => ({ label: option.label, value: option.value }))}
          placeholder="Selecione" label="Disciplina:" withAsterisk
          value={selectedOption || ''}
          onChange={(value) => handleOptionChange(value as string)}
          style={{ marginTop: '8px' }}
        />
      )}
    </>
  );
};

export default SelectOptions;
