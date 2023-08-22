import { Tabs } from '@mantine/core';
import { IconListDetails, IconChecklist  } from '@tabler/icons-react';
import TableMinhaOficina from './tabelaOficina';

export default function TabMyOficina(){
    return(
        <>
        <Tabs defaultValue="myOficinas" color="teal"  >
      <Tabs.List>
        <Tabs.Tab value="myOficinas">Minhas Oficinas</Tabs.Tab>
        <Tabs.Tab value="historico">Histórico de Oficinas</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="myOficinas" pt="lg">
        <TableMinhaOficina/>
      </Tabs.Panel>

      <Tabs.Panel value="historico" pt="lg">
        
      </Tabs.Panel>

    </Tabs>
        </>
    )
}