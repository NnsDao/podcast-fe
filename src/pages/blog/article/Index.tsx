import img1 from '@/public/episodes/img1.png';
import img2 from '@/public/episodes/img2.png';
import img3 from '@/public/episodes/img3.png';
import img4 from '@/public/episodes/img4.png';
import img5 from '@/public/episodes/img5.png';
import img6 from '@/public/episodes/img6.png';
import img7 from '@/public/episodes/img7.png';
import img8 from '@/public/episodes/img8.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import Style from './index.module.css';
export default function Article() {
  const [inputVal, setInputVal] = React.useState('');

  const search = e => {
    setInputVal(e.currentTarget.value);
  };
  return (
    <Stack
      direction={'row'}
      justifyContent="center"
      alignItems={'center'}
      paddingY="120px"
      bgcolor="#10062F"
      paddingBottom={'220px'}>
      <Stack position="relative">
        <img src={img1} className={Style.img1} alt="" />
        <img src={img2} className={Style.img2} alt="" />
        <img src={img3} className={Style.img3} alt="" />
        <img src={img4} className={Style.img4} alt="" />
      </Stack>
      <Stack direction={'column'} justifyContent="center" alignItems={'center'}>
        <Stack
          sx={{
            width: '812px',
            fontSize: '106px',
            fontFamily: 'Trebuchet-BoldItalic',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Article <br />
          <Stack direction={'row'} justifyContent="center" alignItems={'center'}>
            and <span style={{ color: '#D74EE9' }}> &nbsp; News</span>
          </Stack>
        </Stack>
        <Stack
          sx={{
            paddingY: '50px',
            width: '1209px',
            fontSize: '24px',
            lineHeight: '50px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#FFFFFF',
            textAlign: 'center',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam–quis.
        </Stack>

        <Stack direction="row" spacing={{ xl: 2, sm: 1 }} position="relative">
          <Paper
            sx={{
              height: 74,
              width: 796,
              display: 'flex',
              alignItems: 'center',
              borderRadius: '16px',
              background: '#fff',
              border: '2px solid #10062F',
              zIndex: '10',
            }}>
            <IconButton aria-label="menu" sx={{ marginLeft: '20px' }}>
              <SearchIcon htmlColor="#000" />
            </IconButton>
            <InputBase
              sx={{
                flex: 1,
                color: '#000',
                '&::placeholder': {
                  color: '#000',
                },
              }}
              placeholder="Search..."
              onChange={search}
            />
          </Paper>
          <Stack
            sx={{
              position: 'absolute',
              left: '-5px',
              top: '10px',
              height: 74,
              width: 796,
              borderRadius: '16px',
              background: '#DD8BEB',
              border: '2px solid #10062F',
              zIndex: '5',
            }}></Stack>
        </Stack>
      </Stack>
      <Stack position="relative">
        <img src={img5} className={Style.img5} alt="" />
        <img src={img6} className={Style.img6} alt="" />
        <img src={img7} className={Style.img7} alt="" />
        <img src={img8} className={Style.img8} alt="" />
      </Stack>
    </Stack>
  );
}
