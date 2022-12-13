import { Stack } from '@mui/system';

export default function Example() {
  return (
    <Stack
      direction={'row'}
      justifyContent="space-between"
      alignItems={'center'}
      bgcolor="#10062F"
      paddingX="212px"
      fontSize={'26px'}
      fontFamily="ArialMT"
      color="#FFFFFF"
      lineHeight="31px">
      <Stack>
        <Stack
          sx={{
            fontSize: '54px',
            fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
            color: '#FFFFFF',
            lineHeight: '63px',
            width: '640px',
          }}>
          Bullet list example:
        </Stack>
        <Stack paddingTop={'91px'} paddingBottom={'140px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis
          curs us dignissim odio. Sit vulputate et integer in.
          <br />
          Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim
          eget viverra at porttitor accumsan. Orci non here
          <br />
          Quis dictum cursus faucibus mattis dignissim. Pellentque purus in sed sodales in mauris molestie. Eleifend est
          consctetur interdum eu in auctor. Gravida leo et.
        </Stack>
        <Stack paddingBottom={'34px'}>
          <img src="" alt="" width={' 639px'} height="440px" />
        </Stack>
        <Stack textAlign={'center'}>this is an image with a caption example</Stack>
      </Stack>
      <Stack>
        <Stack
          sx={{
            fontSize: '54px',
            fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
            color: '#FFFFFF',
            lineHeight: '63px',
            width: '640px',
          }}>
          Bullet list example:
        </Stack>
        <Stack paddingTop={'91px'} paddingBottom={'140px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam pellentesque at bibendum euismod tellus duis
          curs us dignissim odio. Sit vulputate et integer in.
          <br />
          Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim
          eget viverra at porttitor accumsan. Orci non here
          <br />
          Quis dictum cursus faucibus mattis dignissim. Pellentque purus in sed sodales in mauris molestie. Eleifend est
          consctetur interdum eu in auctor. Gravida leo et.
        </Stack>
        <Stack paddingBottom={'34px'}>
          <img src="" alt="" width={' 639px'} height="440px" />
        </Stack>
        <Stack textAlign={'center'}>download here</Stack>
      </Stack>
    </Stack>
  );
}
