import { Container, Text, Button, Modal, Input, Flex, Textarea, TextInput, Select, Group, NumberInput } from '@mantine/core';
import { IconClock, IconPlus } from '@tabler/icons-react';
import { DateInput, TimeInput } from '@mantine/dates';
import RadioInputs from '../novoEncontro/__inputRadio';
import SelectOptions from '../novoEncontro/__selectOptions';

const groups = [
    {
      label: 'Base de Autonomia e Emancipação (BASE)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Projetos Integradores (PI)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Oficinas da Área Técnica (OF-TEC)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Oficinas Livres do Ensino Médio (OF-LEM)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Oficina de Línguas Estrangeiras (OF - LE)',
      options: [
        { label: 'Inglês', value: 'Inglês' },
        { label: 'Espanhol', value: 'Espanhol' },
      ],
    },
    {
      label: 'Conhecimentos da Área Técnica (AT)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Matemática e suas Tecnologias (MAT)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Língua Portuguesa e suas Literaturas (PORT)',
      options: [
        { label: 'Não se aplica', value: 'Não se aplica' },
      ],
    },
    {
      label: 'Ciências Humanas e Sociais Aplicadas (HUM)',
      options: [
        { label: 'História', value: 'História' },
        { label: 'Filosofia', value: 'Filosofia' },
        { label: 'Geografia', value: 'Geografia' },
        { label: 'Sociologia', value: 'Sociologia' },
      ],
    },
    {
      label: 'Linguagens e suas Tecnologias (LIN)',
      options: [
        { label: 'Música', value: 'Música' },
        { label: 'Dança', value: 'Dança' },
        { label: 'Cênicas', value: 'Cênicas' },
        { label: 'Educação Física', value: 'Educação Física' },
        { label: 'Visuais', value: 'Visuais' },
      ],
    },
    {
      label: 'Ciências da Natureza e suas Tecnologias (CNT)',
      options: [
        { label: 'Biologia', value: 'Biologia' },
        { label: 'Física', value: 'Física' },
        { label: 'Química', value: 'Química' },
      ],
    },
  ];
export default function FormEditar(){

    return (
        <>
        <Container >
        
        <Text>Prencha os campos corretamente</Text>
        <form >
          <SelectOptions groups={groups} />
            <Input.Wrapper id="input-demo" label="Nome do Professor(a):">
                <Input id="input-demo" value={"dados do banco"} />
            </Input.Wrapper>
            <Input.Wrapper id="input-demo" label="Nome da oficina:">
                <Input id="input-demo"  value={"dados do banco"} />
            </Input.Wrapper>
            <Text>Informar horário da semana</Text>
            <Flex mih={80}  gap="lg"  align="Flex-start" justify="Flex-start" direction="row"  wrap="wrap" >
            <TimeInput label="Horário de Início" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={300} mx="auto" />
            <TimeInput label="Horário de Términio" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={300} mx="auto" />
            <DateInput valueFormat="DD/MM/YYYY" label="Data"  withAsterisk placeholder="Selecione a Data" maw={400} mx="auto"/>
            </Flex>
            <Group position="right">
              {/* analisar como fazer abrir as opções de cima para adicionar outros horarios */}
              <Button color="gray" >
                  <IconPlus size="1rem" stroke={1.5}> </IconPlus>
                  Adicionar Horário 
              </Button>
            </Group>
            {/* <RadioInputs/> */}
            <Textarea defaultValue={"dados do banco"} label="Descrição:" withAsterisk/>
            <Textarea defaultValue={"dados do banco"}  label="Objetivos de aprendizagem:" withAsterisk/>
            <Textarea defaultValue={"dados do banco"}   label="Sala:" withAsterisk/>
            <NumberInput defaultValue={30} placeholder="Qtd" label="Quantidade de Vagas:" withAsterisk/>
            <Flex mih={80}  gap="xl" justify="center" align="center" direction="row" >
            <Button style={{background:'#004d2a', width:'150px'}}>Salvar</Button>
            <Button style={{background:'#CD191E', width:'150px'}}>Cancelar</Button>
            </Flex>
        </form>
      
        </Container>
        </>
    )
}