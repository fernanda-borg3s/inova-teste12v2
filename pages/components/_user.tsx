import React from 'react';
import { IconChevronRight, IconChevronLeft, IconSettings, IconBell, IconUserCircle} from '@tabler/icons-react';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme, rem, Menu } from '@mantine/core';

export default function User() {
  const theme = useMantineTheme();

  return (
    <Menu shadow="md" width={200}>
        <Menu.Target>
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          },
        }}
      >
        <Group>
        <Avatar radius="xl" />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Amy Horsefighter
            </Text>
            <Text color="dimmed" size="xs">
              ahorsefighter@gmail.com
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <IconChevronRight size={rem(18)} />
          ) : (
            <IconChevronLeft size={rem(18)} />
          )}
        </Group>
      </UnstyledButton>
    </Box>
    </Menu.Target>
    <Menu.Dropdown>
        <Menu.Label>Usuário</Menu.Label>
        <Menu.Item icon={<IconUserCircle size={14} />}>Perfil</Menu.Item>
        <Menu.Item icon={<IconSettings size={14} />}>Configurações</Menu.Item>
        <Menu.Item icon={<IconBell size={14} />}>Notificações</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}