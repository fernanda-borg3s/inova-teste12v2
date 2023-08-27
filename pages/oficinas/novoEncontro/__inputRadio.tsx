import React, { useState } from 'react';
import { NumberInput, Radio, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';


type RadioInputsProps = {};

const RadioInputs: React.FC<RadioInputsProps> = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <>
      <Radio
        value="Não"
        onChange={() => handleRadioChange('Não')}
        checked={selectedValue === 'Não'}
      >
        Não
      </Radio>
      <Radio
        value="Até"
        onChange={() => handleRadioChange('Até')}
        checked={selectedValue === 'Até'}
      >
        Até
      </Radio>
      <Radio
        value="Durante"
        onChange={() => handleRadioChange('Durante')}
        checked={selectedValue === 'Durante'}
      >
        Durante
      </Radio>

      {selectedValue === 'Até' && (
            <DateInput valueFormat="DD/MM/AAAA" placeholder="DD/MM/AAAA" maw={400} mx="auto"/>
        
      )}

      {selectedValue === 'Durante' && (
            <NumberInput defaultValue={4} placeholder="Qtd" label="Semana(s)" />
      )}
    </>
  );
};

export default RadioInputs;
