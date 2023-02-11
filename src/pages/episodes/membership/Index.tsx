import Membership1 from '@/public/episodes/Membership1.png';
import Membership2 from '@/public/episodes/Membership2.png';
import Membership3 from '@/public/episodes/Membership3.png';
import Membership4 from '@/public/episodes/Membership4.png';
import Membership5 from '@/public/episodes/Membership5.png';
import Membership6 from '@/public/episodes/Membership6.png';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import Style from './index.module.css';

export default function Membership() {
  const data1 = [
    {
      img: Membership1,
      text: 'Customizable Website',
      others:
        'Every podcast gets a beautiful, responsive website with episode pages, your images, custom pages, redirects, host and guest pages, and more. It’s all built-in.',
    },
    {
      img: Membership2,
      text: 'Import from anywhere',
      others:
        'Import your existing stories from platform or own service with one click. You can even ask us to import data for you.',
    },
    {
      img: Membership3,
      text: 'Responsive Design',
      others: 'We do our best to make your site, stories and episodes look beautiful on any screen or device.',
    },
  ];
  const data2 = [
    {
      img: Membership4,
      text: 'Decentralized Storage Hosting',
      others:
        'Your listeners want your show as soon as it is available. Based on a decentralized storage service, users can receive Episodes quickly, while using edge computing to accelerate their experience with the service.',
    },
    {
      img: Membership5,
      text: 'Data Ownership',
      others: 'Built entirely on web3, the user has data sovereignty.',
    },
    {
      img: Membership6,
      text: 'For podcasters',
      others: 'Listen to podcasts to generate revenue for podcasters.',
    },
  ];
  return (
    <Stack
      direction={'column'}
      justifyContent="center"
      alignItems={'center'}
      bgcolor="#10062F"
      position="relative"
      paddingBottom={'50px'}>
      <Stack className={Style.Membership}>Membership benefits</Stack>
      <Stack className={Style.benefits}>Become our sponsor and get all benefits</Stack>
      <Stack className={Style.MembershipWrapper} direction="row">
        {data1.map(item => (
          <Stack className={Style.MembershipItem} key={item.text}>
            <img src={item.img} alt="" />
            <Stack className={Style.MembershipItemText}>{item.text}</Stack>
            <Stack>{item.others}</Stack>
          </Stack>
        ))}
      </Stack>
      <Stack className={Style.MembershipWrapper} direction="row">
        {data2.map(item => (
          <Stack className={Style.MembershipItem} key={item.text}>
            <img src={item.img} alt="" />
            <Stack className={Style.MembershipItemText}>{item.text}</Stack>
            <Stack>{item.others}</Stack>
          </Stack>
        ))}
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          width: '180px',
          height: '52px',
          background: 'linear-gradient( rgba(250, 217, 97, 1), rgba(247, 107, 28, 1)) ',
          zIndex: '1',
          borderRadius: '26px',
        }}>
        <Button
          sx={{
            position: 'absolute',
            top: '2.5px',
            left: '2.5px',
            color: '#fff',
            fontSize: '20px',
            fontWeight: 900,
            paddingY: '6px',
            paddingX: '20px',
            borderRadius: '25px',
            zIndex: '20',
            bgcolor: '#10062F',
            whiteSpace: 'nowrap',
            ':hover': {
              bgcolor: '#10062F',
            },
          }}>
          SEE PRICING
        </Button>
      </Stack>
    </Stack>
  );
}
