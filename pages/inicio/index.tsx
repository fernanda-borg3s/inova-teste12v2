import { Button, Group } from '@mantine/core';
import Cards from '../components/cards';
import { IconPlus } from '@tabler/icons-react';
import Layout from '../components/Layout';
// import NovaOficina from './oficinas/novoEncontro/__novoEncontro';

export default function Home(){
    return (
        <>
       <Layout>
        <h1>Bem-vindo Usuário X</h1>
        <Group position="right">
        <Button color="gray" component="a" href="/oficinas/novoEncontro">
            <IconPlus size="1rem" stroke={1.5}> </IconPlus>
            Adicionar Encontro 
        </Button>
      </Group>
        {/* <NovaOficina/> */}
        <Cards></Cards>
        
      
      </Layout>
        </>
      );
}