import { Stack } from '@mui/system';

export default function Example() {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      bgcolor="#10062F"
      fontSize={'18px'}
      fontFamily="ArialMT"
      color="#FFFFFF"
      paddingX={'100px'}
      lineHeight="31px">
      <Stack paddingRight="100px">
        <Stack
          sx={{
            fontSize: '40px',
            fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
            color: '#FFFFFF',
            lineHeight: '63px',
          }}>
          Bullet list example:
        </Stack>
        <Stack paddingTop={'91px'} paddingBottom={'80px'}>
          Connect your ideas and export your stories, consectetur adipiscing elit. Quam pellentesque at bibendum euismod
          tellus duis curs us dignissim odio. Sit vulputate et integer in.
          <br />
          <br />
          Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim
          eget viverra at porttitor accumsan. Orci non here
          <br />
          <br />
          Quis dictum cursus faucibus mattis dignissim. Pellentque purus in sed sodales in mauris molestie. Eleifend est
          consctetur interdum eu in auctor. Gravida leo et.
        </Stack>
        <Stack paddingBottom={'34px'}>
          <img src="" alt="" width={' 539px'} height="440px" />
        </Stack>
        <Stack textAlign={'center'}>this is an image with a caption example</Stack>
      </Stack>
      <Stack>
        <Stack
          sx={{
            fontSize: '40px',
            fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
            color: '#FFFFFF',
            lineHeight: '63px',
          }}>
          Bullet list example:
        </Stack>
        <Stack paddingTop={'91px'} paddingBottom={'80px'}>
          Connect your ideas and export your stories, consectetur adipiscing elit. Quam pellentesque at bibendum euismod
          tellus duis curs us dignissim odio. Sit vulputate et integer in.
          <br />
          <br />
          Sit vel, senectus iaculis morbi. Amet interdum imperdiet laoreet morbi tincidunt fermentum, libero. Ante enim
          eget viverra at porttitor accumsan. Orci non here
          <br />
          <br />
          Quis dictum cursus faucibus mattis dignissim. Pellentque purus in sed sodales in mauris molestie. Eleifend est
          consctetur interdum eu in auctor. Gravida leo et.
        </Stack>
        <Stack paddingBottom={'34px'}>
          <img src="" alt="" width={' 539px'} height="440px" />
        </Stack>
        <Stack textAlign={'center'}>download here</Stack>
      </Stack>
    </Stack>
  );
}
