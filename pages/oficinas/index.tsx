import { Button, Group } from "@mantine/core";
import { IconClipboardCheck } from '@tabler/icons-react';

import Detalhes from "./detalhes";
import Layout from "../components/Layout";

export default function Oficina(){
    return(
        <>
        <Layout>
        <h1>Detalhes sobre a oficina</h1>
        <Group position="right">
        <Button variant="white" color="teal" style={{border:'#004d2a'}}>
            <IconClipboardCheck size="1.5rem" stroke={1.5}> </IconClipboardCheck>
            Concluir essa atividade </Button>
      </Group>
        <Detalhes/>
        </Layout>
        </>
    );
}