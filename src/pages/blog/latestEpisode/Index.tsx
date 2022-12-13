import bg15 from '@/public/episodes/bg15.png';
import listeners from '@/public/episodes/listeners.png';
import { Divider } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/system';
import React from 'react';
import All from './all/Index';
import Business from './business/Index';
import News from './news/Index';
import Podcast from './podcast/Index';
import Productivity from './productivity/Index';
import Tips from './tips/Index';

export default function LatestEpisode() {
  const [inputVal, setInputVal] = React.useState('');
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const search = e => {
    setInputVal(e.currentTarget.value);
  };
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      bgcolor="#10062F"
      position="relative"
      paddingBottom={'200px'}>
      <Stack
        sx={{
          position: 'absolute',
          right: '351px',
          top: '-20px',
        }}>
        <img src={bg15} alt="" width={'195px'} height={'186px'} />
      </Stack>
      <img src={listeners} alt="" width={'1920px'} height={'1886px'} />
      <Stack
        justifyContent={'start'}
        sx={{
          width: '100%',
          position: 'absolute',
          top: '200px',
        }}>
        <Stack
          sx={{
            fontSize: '80px',
            fontFamily: 'Trebuchet-BoldItalic',
            color: '#10062F',
            lineHeight: '93px',
            textAlign: 'center',
          }}>
          Latest Episode
        </Stack>
        <Box sx={{ padding: '100px' }} ref={ref}>
          <Paper sx={{}} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              sx={{ background: '#DDECFF', display: 'flex', justifyContent: 'space-between' }}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}>
              <BottomNavigationAction label="All" />
              <BottomNavigationAction label="Business" />
              <BottomNavigationAction label="News" />
              <BottomNavigationAction label="Tips & Trick" />
              <BottomNavigationAction label="Podcast" />
              <BottomNavigationAction label="Productivity" />
            </BottomNavigation>
          </Paper>
          <Divider sx={{ paddingY: '25px' }} />
          <Stack sx={{ paddingY: '50px' }}>
            <Stack>{value == 0 ? <All /> : null}</Stack>
            <Stack>{value == 1 ? <Business /> : null}</Stack>
            <Stack>{value == 2 ? <News /> : null}</Stack>
            <Stack>{value == 3 ? <Tips /> : null}</Stack>
            <Stack>{value == 4 ? <Podcast /> : null}</Stack>
            <Stack>{value == 5 ? <Productivity /> : null}</Stack>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
