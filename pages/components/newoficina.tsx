import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group, Text, Input, Flex, Textarea, Select, TextInput } from '@mantine/core';
import { IconPlus, IconClock } from '@tabler/icons-react';
// import { useForm } from '@mantine/form';
import { TimeInput, DateInput } from '@mantine/dates';

export default function NovaOficina() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal  size="48%" opened={opened} onClose={close} title="Adicionar nova oficina">
        <Text>Prencha os campos corretamente</Text>
        <form >
            <Input.Wrapper id="input-demo" withAsterisk label="Nome da Oficina">
                <Input id="input-demo" placeholder="Sua oficina" />
            </Input.Wrapper>
            <Flex mih={80}  gap="sm"  align="center" direction="row" >
            <TimeInput label="HorÃ¡rio de InÃ­cio" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={300} mx="auto" />
            <TimeInput label="HorÃ¡rio de Terminio" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={300} mx="auto" />
            <DateInput valueFormat="DD/MM/YYYY" label="Date input"  withAsterisk placeholder="Data" maw={400} mx="auto"/>
            </Flex>
            <Textarea placeholder="Descreva sua oficina" label="DescriÃ§Ã£o" withAsterisk/>
            <Flex mih={80}  gap="xl"  align="center" direction="row" >
                <Select label="Reservar sala?" placeholder="Selecione" withAsterisk
                    data={[
                        { value: 'sim', label: 'Sim' },
                        { value: 'nÃ£o', label: 'NÃ£o' },
                    ]}/>
                    <TextInput placeholder="Sala" label="Onde Ã© a sala?" withAsterisk />
            </Flex>
            <Flex mih={80}  gap="xl" justify="center" align="center" direction="row" >
            <Button style={{background:'#004d2a', width:'150px'}}>Salvar</Button>
            <Button style={{background:'#CD191E', width:'150px'}}>Cancelar</Button>
            </Flex>
        </form>
      </Modal>
      
      <Group position="right">
        <Button color="gray" onClick={open}>
            <IconPlus size="1rem" stroke={1.5}> </IconPlus>
            Adicionar Nova Oficina</Button>
      </Group>
    </>
  );
}