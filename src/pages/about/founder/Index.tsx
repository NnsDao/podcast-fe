import { Stack } from '@mui/system';

export default function Founder() {
  return (
    <Stack
      bgcolor="#10062F"
      direction={'column'}
      justifyContent="center"
      spacing={3}
      sx={{
        fontSize: '18px',
        fontFamily: 'ArialMT',
        color: '#DDECFF',
        paddingTop: '105px',
      }}>
      <Stack
        sx={{
          fontSize: '56px',
          fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
          fontWeight: 'normal',
          lineHeight: '65px',
          textAlign: 'center',
          paddingBottom: '117px',
        }}>
        Founder and Main Host
      </Stack>
      <Stack direction={'row'} justifyContent="center" spacing={0}>
        {/* <EpisodeCard></EpisodeCard>
        <EpisodeCard></EpisodeCard> */}
      </Stack>
    </Stack>
  );
}
