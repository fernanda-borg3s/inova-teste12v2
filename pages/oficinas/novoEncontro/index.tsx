
import { Modal, Button, Group, Text, Input, Flex, Textarea, NumberInput} from '@mantine/core';

import FormNovoEncontro from './__novoEncontro';
import Layout from '@/pages/components/Layout';


export default function NovoEncontro() {
  

  return (
    <>
    <Layout>
    <h2>Adicionar Novo Encontro</h2>
      <FormNovoEncontro/>
      </Layout>
    </>
  );
}