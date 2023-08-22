import { Container, Text, Button, Modal, Input, Flex, Textarea, TextInput, Select } from '@mantine/core';
import { IconEdit, IconTrashX, IconClock } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import style from './oficina.module.css';
import NovaOficina from '../components/newoficina';
import { DateInput, TimeInput } from '@mantine/dates';

export default function TabelaDetails(){
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
        <Container className={style.containerDetails}>
        <h3>Título Oficina</h3>
        <Text>Data da Criação: <strong className={style.span}>DD/MM/AAAA</strong></Text>
        <div className={style.infoDocente}>Informações do Docente:</div>
        <div className={style.nomeMat}>
            <Text>Nome: <span className={style.span}>Nome</span></Text>
            <Text>Matrícula: <span className={style.span}>0000</span></Text>
        </div>
        <Text>Observações: <span className={style.span}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span></Text>
        <div className={style.infoDocente}>Detalhes da oficina:</div>
        <div className={style.dataHora}>
            <Text>Data Agendada: <strong className={style.span}>DD/MM/AAAA</strong></Text>
            <Text>Hora de Início: <strong className={style.span}>00:00</strong></Text>
            <Text>Hora do Termínio: <strong className={style.span}>00:00</strong></Text>
        </div>
        <div className={style.infoSala}>
            <Text>Reserva de sala: <strong className={style.span}>Não</strong></Text>
            <Text>Sala: <strong className={style.span}>Lorem ipsum dolor sit amet</strong></Text>
        </div>
        <Text>Descrição: <span className={style.span}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</span></Text>
        <div className={style.btnContainer}>
        <Modal  size="48%" opened={opened} onClose={close} title="Editar nova oficina">
        <Text>Prencha os campos corretamente</Text>
        <form >
            <Input.Wrapper id="input-demo" withAsterisk label="Nome da Oficina">
                <Input id="input-demo" placeholder="Sua oficina" />
            </Input.Wrapper>
            <Flex mih={80}  gap="sm"  align="center" direction="row" >
            <TimeInput label="Horário de Iní­cio" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={300} mx="auto" />
            <TimeInput label="Horário de Terminio" withAsterisk icon={<IconClock size="1rem" stroke={1.5} />} maw={300} mx="auto" />
            <DateInput valueFormat="DD/MM/YYYY" label="Date input"  withAsterisk placeholder="Data" maw={400} mx="auto"/>
            </Flex>
            <Textarea placeholder="Descreva sua oficina" label="Descrição" withAsterisk/>
            <Flex mih={80}  gap="xl"  align="center" direction="row" >
                <Select label="Reservar sala?" placeholder="Selecione" withAsterisk
                    data={[
                        { value: 'sim', label: 'Sim' },
                        { value: 'nao', label: 'Não' },
                    ]}/>
                    <TextInput placeholder="Sala" label="Em qual sala?" withAsterisk />
            </Flex>
            <Flex mih={80}  gap="xl" justify="center" align="center" direction="row" >
            <Button style={{background:'#004d2a', width:'150px'}}>Salvar</Button>
            <Button style={{background:'#CD191E', width:'150px'}}>Cancelar</Button>
            </Flex>
        </form>
      </Modal>
            <Button className={style.btnEditarDetails}onClick={open} ><IconEdit size={25}></IconEdit>Editar</Button>
          
            <Button className={style.btnRemoveDetails}><IconTrashX size={25}></IconTrashX>Remover</Button>
        </div>
        </Container>
        </>
    )
}