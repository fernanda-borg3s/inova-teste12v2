import { Table, Button, Group, ActionIcon, Flex, Pagination, rem } from '@mantine/core';
import { IconSquareLetterX, IconSearch, IconFileSpreadsheet } from '@tabler/icons-react';
const myOficina = [
    { id: 1, oficina: "Nome da oficina", horario:"00:00", data: "dd/mm/aa", inscritos: 0 },
    { id: 2, oficina: "Nome da oficina", horario:"00:00", data: "dd/mm/aa", inscritos: 0 },
    { id: 3, oficina: "Nome da oficina", horario:"00:00", data: "dd/mm/aa", inscritos: 0} ,   
    { id: 4, oficina: "Nome da oficina", horario:"00:00", data: "dd/mm/aa", inscritos: 0,},    
    { id: 5, oficina: "Nome da oficina", horario:"00:00", data: "dd/mm/aa", inscritos: 0,}  ];
export default function TableMinhaOficina(){
    const rows = myOficina.map((element) => (
        <tr key={element.id}>
          <td>{element.id}</td>
          <td>{element.oficina}</td>
          <td>{element.horario}</td>
          <td>{element.data}</td>
          <td>{element.inscritos}</td>
        </tr>
      ));
    return(
        <>
        <Table fontSize="sm" striped highlightOnHover withBorder withColumnBorders verticalSpacing="sm" style={{marginBottom:'20px'}}>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nome Oficina</th>
                <th>Horário</th>
                <th>Data</th>
                <th>Inscritos</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
            </Table>
        </>
    )
}