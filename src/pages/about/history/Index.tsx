import { Stack } from '@mui/system';

export default function History() {
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
        paddingX: '100px',
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
        About and History
      </Stack>
      <Stack direction={'row'} justifyContent="center" spacing={10}>
        <Stack width={'643px'}>
          <Stack>
            Eu non diam phasellus vestibulum lorem. Fringilla est ullamcorper eget nulla facilisi etiam dignissim. Id
            diam vel quam elementum pulvinar.
            <br />
            <br />
            Elementum eu facilisis sed odio morbi quis commodo.
            <br />
            <br /> Sed odio morbi quis commodo odio aenean sed adipiscing odio diam. uno fablotoson louw uit.
          </Stack>
        </Stack>
        <Stack width={'643px'}>
          <Stack>
            Connect your ideas and export your stories, consectetur adipiscing elit. Quam pellentesque at bibendum
            euismod tellus duis cursus dignissim odio. Sit vulputate et integer in. Sit vel, senectus iaculis morbi.
            Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero.
            <br /> <br /> Ante enim eget. Viverra at porttitor accumsan. Orci non here
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
