import { useState } from 'react';
import { Table, Button, Group, Pagination, rem, createStyles, UnstyledButton, Text, Center, TextInput } from '@mantine/core';
import { IconSquareLetterX, IconSearch, IconFileSpreadsheet, IconSelector, IconChevronDown, IconChevronUp, } from '@tabler/icons-react';
import style from './oficina.module.css';
import { keys } from '@mantine/utils';


const aluno = [
  
    { "id": "1",
      "name": "Athena Weissnat",
      "email": "Elouise.Prohaska@yahoo.com"
    },
    { "id": "1",
      "name": "Deangelo Runolfsson",
      "email": "Kadin_Trantow87@yahoo.com"
    },
    { "id": "1",
      "name": "Danny Carter",
      "email": "Marina3@hotmail.com"
    },
    { "id": "1",
      "name": "Trace Tremblay PhD",
      "email": "Antonina.Pouros@yahoo.com"
    },
    { "id": "1",
      "name": "Derek Dibbert",
      "email": "Abagail29@hotmail.com"
    },
    { "id": "1",
      "name": "Viola Bernhard",
      "email": "Jamie23@hotmail.com"
    },
    { "id": "1",
      "name": "Austin Jacobi",
      "email": "Genesis42@yahoo.com"
    }
  ];
  const useStyles = createStyles((theme) => ({
    th: {
      padding: '0 !important',
    },
  
    control: {
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
  
      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },
  
    icon: {
      width: rem(21),
      height: rem(21),
      borderRadius: rem(21),
    },
  }));
  
  interface RowData {
    id: string;
    name: string;
    email: string;
   
  }
  
  interface TableSortProps {
    data: RowData[];
  }
  
  interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
  }
  
  function Th({ children, reversed, sorted, onSort }: ThProps) {
    const { classes } = useStyles();
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
      <th className={classes.th}>
        <UnstyledButton onClick={onSort} className={classes.control}>
          <Group position="apart">
            <Text fw={500} fz="sm">
              {children}
            </Text>
            <Center className={classes.icon}>
              <Icon size="0.9rem" stroke={1.5} />
            </Center>
          </Group>
        </UnstyledButton>
      </th>
    );
  }
  
  function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
      keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
  }
  
  function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
  ) {
    const { sortBy } = payload;
  
    if (!sortBy) {
      return filterData(data, payload.search);
    }
  
    return filterData(
      [...data].sort((a, b) => {
        if (payload.reversed) {
          return b[sortBy].localeCompare(a[sortBy]);
        }
  
        return a[sortBy].localeCompare(b[sortBy]);
      }),
      payload.search
    );
  }
  
export default function Incritos() {
  const [search, setSearch] = useState('');
  const [sortedData, setSortedData] = useState(aluno);
  const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  const setSorting = (field: keyof RowData) => {
    const reversed = field === sortBy ? !reverseSortDirection : false;
    setReverseSortDirection(reversed);
    setSortBy(field);
    setSortedData(sortData(aluno, { sortBy: field, reversed, search }));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedData(sortData(aluno, { sortBy, reversed: reverseSortDirection, search: value }));
  };
  const rows = aluno.map((aluno) => (
    <tr key={aluno.id}>
      <td style={{textAlign:'center', cursor:'pointer'}}>{aluno.id}</td>
      <td>{aluno.name}</td>
      <td>{aluno.email}</td>
      <td style={{textAlign:'center', cursor:'pointer'}}><IconSquareLetterX size={25} strokeWidth={2.0} color={'red'}></IconSquareLetterX></td>
    </tr>
  ));

  return (
    <>

    <h2>Inscritos nessa oficina</h2>
    <div className={style.divSearch}>
    <TextInput
        placeholder="Procurar Aluno"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Group position='right'>
        <Button component="a" target="_blank" rel="noopener noreferrer" href="#" className={style.btnPlanilha} leftIcon={<IconFileSpreadsheet size={rem(18)} />}>
          Gerar Planilhas
        </Button>
      </Group>
    </div>
    
    <Table fontSize="sm" striped highlightOnHover withBorder withColumnBorders verticalSpacing="sm" style={{marginBottom:'20px'}}>
      <thead>
        <tr>
          <th style={{width: '65px', textAlign:'center'}}>ID</th>
          <th>Nome do Aluno</th>
          <th>Email</th>
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