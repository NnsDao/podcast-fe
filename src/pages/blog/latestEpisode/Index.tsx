import bg15 from '@/public/episodes/bg15.png';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/system';
import React from 'react';

import All from './all/Index';

export default function LatestEpisode() {
  const [inputVal, setInputVal] = React.useState('');
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const search = e => {
    setInputVal(e.currentTarget.value);
  };
  return (
    <Stack direction={'row'} width="100%" justifyContent="center" alignItems={'center'} bgcolor="#10062F">
      <Stack
        sx={{
          position: 'absolute',
          right: '351px',
          top: '800px',
        }}>
        <img src={bg15} alt="looncast" width={'195px'} height={'186px'} />
      </Stack>
      {/* <img src={listeners} alt="looncast" width={'100%'} /> */}
      <Stack direction={'column'}>
        <Stack
          sx={{
            fontSize: '80px',
            fontFamily: 'Trebuchet-BoldItalic',
            color: '#fff',
            lineHeight: '93px',
            textAlign: 'center',
            marginBottom: '30px',
          }}>
          Latest Episode
        </Stack>
        {/* <Paper sx={{ marginX: '100px', marginBottom: '30px' }} elevation={3}>
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
        </Paper> */}
        <Divider sx={{ marginX: '100px', marginY: '30px' }} />
        <Stack>
          <Stack direction={'row'}>
            <All />
          </Stack>
          {/* <Stack>{value == 1 ? <Business /> : null}</Stack>
          <Stack>{value == 2 ? <News /> : null}</Stack>
          <Stack>{value == 3 ? <Tips /> : null}</Stack>
          <Stack>{value == 4 ? <Podcast /> : null}</Stack>
          <Stack>{value == 5 ? <Productivity /> : null}</Stack> */}
        </Stack>
      </Stack>
    </Stack>
  );
}
