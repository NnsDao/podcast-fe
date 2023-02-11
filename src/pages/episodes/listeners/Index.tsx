import listeners from '@/public/episodes/listeners.png';
import { Stack } from '@mui/system';

import bg15 from '@/public/episodes/bg15.png';
import { Avatar } from '@mui/material';

export default function Listeners() {
  const data = [
    {
      author: 'louis chan',
      content:
        'The app is fantastic. it controls where your podcasts run while improving decentralization and reliability.',
    },
    {
      author: 'masewang',
      content:
        'A podcast platform that focuses on users and privacy, I see more real content and podcasters in the podcast.',
    },
    {
      author: 'IAB',
      content:
        'Most host-read and announcer-read ads are dynamically inserted, and advertisers get the best of both worlds with podcast ads, the authenticity of the message with the scalability/flexibility of automated buying.',
    },
    {
      author: 'Charles',
      content:
        'Use the podcast to listen to more realistic Web3 projects and proposals, and see more about the beginnings and ideas of entrepreneurs at Looncast.',
    },
    {
      author: 'eMarketer',
      content:
        'Statistics show that 54 percent of podcast listeners are either somewhat or much more likely to consider buying from a brand after hearing its advertisement on a podcast (2019).',
    },
  ];
  return (
    <Stack direction={'row'} justifyContent="center" alignItems={'center'} bgcolor="#10062F" position="relative">
      <Stack
        sx={{
          position: 'absolute',
          right: '351px',
          top: '-20px',
        }}>
        <img src={bg15} alt="" width={'195px'} height={'186px'} />
      </Stack>
      <img src={listeners} alt="" width={'100%'} height={'1086px'} />
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
          What our listeners say
        </Stack>
        <Stack
          sx={{
            paddingTop: '40px',
            paddingBottom: '100px',
            fontSize: '24px',
            fontFamily: 'Arial-Black',
            fontWeight: '900',
            color: '#10062F',
            lineHeight: '33px',
            textAlign: 'center',
          }}>
          Their experience throughout every platform
        </Stack>

        <Stack
          direction={'row'}
          flexWrap="nowrap"
          overflow={'auto'}
          sx={{
            paddingLeft: '212px',
          }}>
          {data.map((itemSpeaker, index) => {
            return (
              <Stack
                key={index + 1}
                sx={{
                  minWidth: '581px',
                  background: ' #FFFFFF',
                  border: '3px dashed #DD8BEB',
                  padding: '140px 48px 35px 47px',
                  marginRight: '22px',
                  whiteSpace: '',
                  fontSize: '24px',
                  fontFamily: 'Arial-Black',
                  fontWeight: '900',
                  color: ' #10062F',
                  lineHeight: '33px',
                }}>
                <Stack>
                  {itemSpeaker.content}
                  {/* <br /> consectet piscing elit, sed do
                  <br /> eiusmod tempor incidi ut labore et
                  <br /> dolore magna aliqua. */}
                </Stack>
                <Stack direction={'row'} alignItems="center" paddingTop={'25px'}>
                  <Avatar></Avatar>

                  <Stack sx={{ marginLeft: '20px', fontSize: '18px', fontWeight: '500' }}>{itemSpeaker.author},</Stack>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
