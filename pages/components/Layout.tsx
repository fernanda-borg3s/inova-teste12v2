
import React, { ReactNode, useState } from 'react';
import { AppShell, Navbar, Header, useMantineTheme, Image, NavLink} from '@mantine/core';
import { IconHome2, IconCalendarEvent, IconMessages, IconTools, IconSchool, IconFriends} from '@tabler/icons-react';
import User  from './_user';

interface LayoutProps {
    children: ReactNode;
  }
export default function Layout({ children }: LayoutProps){
    const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
    return(
        
    <AppShell
        styles={{
        main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
             <Navbar.Section grow mt="md">
                <NavLink label="Início" component="a" href="/" icon={<IconHome2 size="1rem" stroke={1.5} />}/>
                <NavLink label="Suas Oficinas" icon={<IconTools size="1rem" stroke={1.5} />}/>
                <NavLink label="Equipe" icon={<IconFriends size="1rem" stroke={1.5} />}/>
                <NavLink label="Grade" icon={<IconSchool size="1rem" stroke={1.5} />}/>
                <NavLink label="Calendário" icon={<IconCalendarEvent size="1rem" stroke={1.5} />}/>
                <NavLink label="Fale com a coordenação" icon={<IconMessages size="1rem" stroke={1.5} />}/>
            </Navbar.Section>
            <Navbar.Section>
                <User/>
            </Navbar.Section>
        </Navbar>
        }
        header={
        <Header height={{ base: 20, md: 70 }} p="md" style={{background:'#004d2a'}}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Image width={150} height={45} p="lg" src="/img/logoif.png" fit="contain" alt="logo do Instituto Federal"></Image>

                </div>
        </Header>
        }
    >
        
        <main>
        {children}
        </main>
    </AppShell>
         
    )
}