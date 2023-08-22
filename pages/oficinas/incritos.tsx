import { Table, Button, Group, ActionIcon, Flex, Pagination, rem } from '@mantine/core';
import { IconSquareLetterX, IconSearch, IconFileSpreadsheet } from '@tabler/icons-react';
import style from './oficina.module.css';

const aluno = [
    { id: 6, nome: "Nome aluno",  },
    { id: 7, nome: "Nome aluno",  },
    { id: 39, nome: "Nome aluno" },
    { id: 56, nome: "Nome aluno" },
    { id: 58, nome: "Nome aluno" },
  ];

export default function Incritos() {
  const rows = aluno.map((aluno) => (
    <tr key={aluno.id}>
      <td style={{textAlign:'center', cursor:'pointer'}}>{aluno.id}</td>
      <td>{aluno.nome}</td>
      <td style={{textAlign:'center', cursor:'pointer'}}><IconSquareLetterX size={25} strokeWidth={2.0} color={'red'}></IconSquareLetterX></td>
    </tr>
  ));

  return (
    <>

    <h2>Inscritos nessa oficina</h2>
    <div className={style.divSearch}>
     <div>
      <input type="search" placeholder='Procurar...' className={style.inputSearch}></input>
      <Button  radius="xs" size="md" compact className={style.btnIconSearch}><IconSearch size={12} strokeWidth={2.0}></IconSearch></Button>
      </div>
      <div>
        <Button component="a" target="_blank" rel="noopener noreferrer" href="#" className={style.btnPlanilha} leftIcon={<IconFileSpreadsheet size={rem(18)} />}>
          Gerar Planilhas
        </Button>
      </div>
    </div>
    
    <Table fontSize="sm" striped highlightOnHover withBorder withColumnBorders verticalSpacing="sm" style={{marginBottom:'20px'}}>
      <thead>
        <tr>
          <th style={{width: '65px', textAlign:'center'}}>ID</th>
          <th>Nome do Aluno</th>
          <th style={{width: '30px', textAlign:'center'}}>Excluir</th>
         
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
    <Group position="center">
      <Pagination total={10} radius="xs" />
    </Group>
    </>
  );
}