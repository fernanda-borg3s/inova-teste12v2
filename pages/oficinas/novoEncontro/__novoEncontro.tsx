
import { Button, Group, Text, Input, Flex, Textarea, NumberInput, Container} from '@mantine/core';
import { IconPlus, IconClock } from '@tabler/icons-react';
// import { useForm } from '@mantine/form';
import { TimeInput, DateInput } from '@mantine/dates';
import SelectOptions from './__selectOptions';
import RadioInputs from './__inputRadio';

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

export default function FormNovoEncontro() {
  // const [opened, { open, close }] = useDisclosure(false);
  // const [checked, setChecked] = useState(false);

  return (
    <>

      <Container >
        <Text>Prencha os campos corretamente</Text>
      
        <form >
          <SelectOptions groups={groups} />
            <Input.Wrapper id="input-demo" withAsterisk label="Nome do Professor(a):">
                <Input id="input-demo" placeholder="Digite seu nome" />
            </Input.Wrapper>
            <Input.Wrapper id="input-demo" withAsterisk label="Nome da oficina:">
                <Input id="input-demo" placeholder="Digite o nome da sua oficina" />
            </Input.Wrapper>
            <Text>Informar horário da semana</Text>
            <Flex mih={90}  gap="lg"  align="Flex-start" justify="Flex-start" direction="row"  wrap="wrap" >
            <TimeInput label="Horário de Início" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />
            <TimeInput label="Horário de Términio" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={400} mx="auto" />
            <DateInput valueFormat="DD/MM/YYYY" label="Data"  withAsterisk placeholder="Selecione a Data" maw={400} mx="auto"/>
            </Flex>
            <Group position="right">
              {/* analisar como fazer abrir as opções de cima para adicionar outros horarios */}
              <Button color="gray" style={{margin:'10px'}} >
                  <IconPlus size="1rem" stroke={1.5}> </IconPlus>
                  Adicionar Horário 
              </Button>
            </Group>
            {/* componente abaixo esta impedido que todo o conteudo seja carregado */}
            {/* <RadioInputs/> */}
            <Textarea placeholder="Descreva sua oficina" label="Descrição:" withAsterisk/>
            <Textarea placeholder="Digite aqui" label="Objetivos de aprendizagem:" withAsterisk/>
            <Textarea placeholder="Digite aqui qual a sala irá utilizar" label="Sala:" withAsterisk/>
            <NumberInput defaultValue={30} placeholder="Qtd" label="Quantidade de Vagas:"  withAsterisk/>
            <Flex mih={80}  gap="sm" justify="center" align="center" direction="row" wrap='wrap' style={{marginTop:'10px'}}>
            <Button style={{background:'#004d2a', width:'150px'}}>Salvar</Button>
            <Button style={{background:'#CD191E', width:'150px'}}>Cancelar</Button>
            </Flex>
        </form>
      </Container>
      
      
    </>
  );
}