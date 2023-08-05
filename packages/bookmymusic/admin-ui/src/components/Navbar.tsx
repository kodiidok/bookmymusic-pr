import { Navbar, Group, Code, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons-react';
import { UserButton } from '../components/UserButton';
import { LinksGroup } from '../components/NavbarLinksGroup';
// import { Logo } from './Logo';

const mockdataCore = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Calendar',
    icon: IconCalendarStats,
    links: [
      { label: 'Events', link: '/' },
      { label: 'Bookings', link: '/' },
    ],
  },
  {
    label: 'Sales',
    icon: IconCalendarStats,
    links: [
      { label: 'Tickets', link: '/sales/tickets' },
    ],
  },
  {
    label: 'Inquiries',
    icon: IconCalendarStats,
    links: [
      { label: 'Events', link: '/' },
      { label: 'Bands', link: '/' },
      { label: 'Artists', link: '/' },
      { label: 'Direct', link: '/' },
    ],
  },
];

const mockdataPeople = [
  {
    label: 'Managers',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Band Managers', link: '/' },
      { label: 'Artists Managers', link: '/' },
      { label: 'Events Managers', link: '/' },
    ],
  },
  {
    label: 'Sellers',
    icon: IconCalendarStats,
    links: [
      { label: 'Bands', link: '/' },
      { label: 'Artists', link: '/' },
    ],
  },
];

const mockdataUtil = [
  {
    label: 'Settings',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Roles', link: '/' },
      { label: 'Shipping', link: '/' },
      { label: 'Payments', link: '/' },
    ],
  },
  { label: 'System', icon: IconGauge },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export function NavbarNested() {
  const { classes } = useStyles();
  const linksCore = mockdataCore.map((item) => <LinksGroup {...item} key={item.label} />);
  const linksPeople = mockdataPeople.map((item) => <LinksGroup {...item} key={item.label} />);
  const linksUtil = mockdataUtil.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={900} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          {/* <Logo width={rem(120)} /> */}
          {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links}>
        <div className={classes.linksInner}>{linksCore}</div>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links}>
        <div className={classes.linksInner}>{linksPeople}</div>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links}>
        <div className={classes.linksInner}>{linksUtil}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}