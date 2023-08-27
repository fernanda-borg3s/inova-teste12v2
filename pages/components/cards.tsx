import { Card, Text, Badge, Button, Group, Flex, Tooltip } from '@mantine/core';
import { IconEdit, } from '@tabler/icons-react';

const edit = (
    <IconEdit size="1rem" color={'white'} ></IconEdit>
);

export default function Cards(){
    return (
        <>
       
        <Flex mih={50} gap="sm" justify="flex-start" align="center" direction="row" wrap="wrap">
        <Card shadow="sm" padding="md" radius="md" withBorder>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Encontro X</Text>
            <Tooltip label="Editar">
            <Badge size="lg" radius="xs" variant="outline"  rightSection={edit} style={{backgroundColor: '#004d2a'}}></Badge>
            </Tooltip>
          </Group>
          <Text size="sm" color="dimmed"> Componente Curricular:</Text>
          <Text size="sm" color="dimmed"> Disciplina:</Text>
          <Text size="sm" color="dimmed"> Período:</Text>
          <Text size="sm" color="dimmed"> Horário:</Text>
          <Text size="sm" color="dimmed"> Descrição:</Text>
          <Text size="sm" color="dimmed"> Inscritos:</Text>
    
          <Button component="a" href="/oficinas" variant="filled"  fullWidth mt="md" radius="md" style={{backgroundColor: '#004d2a'}}>
            Detalhes
          </Button>
        </Card>
        </Flex>
        
        </>
      );
}