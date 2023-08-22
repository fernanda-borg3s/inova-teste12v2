// import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Cards from './components/cards';
import NovaOficina from './components/newoficina';

export default function Home(){
    return (
        <>
       
        <h1>Bem-vindo Usuário professor</h1>
        <NovaOficina/>
        <Cards></Cards>
        
        </>
      );
}