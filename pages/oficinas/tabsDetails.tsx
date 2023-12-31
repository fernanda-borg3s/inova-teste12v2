import { Container, Text, Button, Modal, Input, Flex, Textarea, TextInput, Select, Group, NumberInput } from '@mantine/core';
import { IconEdit, IconTrashX, IconClock, IconPlus } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import style from './oficina.module.css';
// import NovaOficina from '../components/newoficina';
import { DateInput, TimeInput } from '@mantine/dates';
import RadioInputs from './novoEncontro/__inputRadio';
import SelectOptions from './novoEncontro/__selectOptions';

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
export default function TabelaDetails(){
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
        <Container className={style.containerDetails}>
        <h3>Título do Encontro</h3>
        <Text>Data da Criação: <strong className={style.span}>DD/MM/AAAA</strong></Text>
        <div className={style.details}>Componente Curricular:</div>
        <div className={style.componenteCurricular}>
            <Text>Disciplina: <span className={style.span}>Biologia</span></Text>
            <Text>Professor(a): <span className={style.span}>0000</span></Text>
        </div>
        <div className={style.details}>Detalhes:</div>
       
        <Text>Período: <strong className={style.span}>DD/MM/AAAA</strong> até <strong className={style.span}>DD/MM/AAAA</strong></Text>
        <Text>Horários: <strong className={style.span}>Segundas-feira - 00:00 às 00:00</strong></Text>
        <Text>Número de Encontros: <strong className={style.span}>2</strong></Text>
        <Text>Sala: <strong className={style.span}>Lorem ipsum dolor sit amet</strong></Text>
        <Textarea defaultValue={"text text text"} label="Descrição:"/>
        <Textarea defaultValue={"text text text"} label="Componente Curricular:"/>
        {/* <div className={style.btnContainer}> */}
        <Flex mih={50} gap="md" justify="center" align="center" wrap="wrap"  className={style.btnContainer}>
            <Button className={style.btnEditarDetails} component='a' href="oficinas/editarEncontro"><IconEdit size={20}></IconEdit>Editar</Button>
          
            <Button className={style.btnRemoveDetails}><IconTrashX size={20}></IconTrashX>Remover</Button>
        {/* </div> */}
        </Flex>
        </Container>
        </>
    )
}