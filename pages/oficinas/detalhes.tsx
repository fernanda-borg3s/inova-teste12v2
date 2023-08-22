import { Tabs } from '@mantine/core';
import { IconListDetails, IconChecklist  } from '@tabler/icons-react';
import Inscritos from './incritos'
import TabelaDetails from './tabsDetails';


export default function Detalhes() {
  return (
    
    <Tabs defaultValue="detalhes" color="teal" variant="outline" >
      <Tabs.List>
        <Tabs.Tab value="detalhes" icon={<IconListDetails size="0.8rem" />}>Detalhes</Tabs.Tab>
        <Tabs.Tab value="incritos" icon={<IconChecklist size="0.8rem" />}>Incritos</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="detalhes" pt="xs">
        <TabelaDetails/>
      </Tabs.Panel>

      <Tabs.Panel value="incritos" pt="xs">
        <Inscritos/>
      </Tabs.Panel>

    </Tabs>
  );
}