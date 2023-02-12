import listeners from '@/public/episodes/listeners.png';
import { Stack } from '@mui/system';

import audius from '@/public/about/audius.png';
import cosmos from '@/public/about/cosmos.png';
import looncast from '@/public/about/looncast.png';
import overcast from '@/public/about/overcast.png';
import podcast from '@/public/about/podcast.png';

import bg15 from '@/public/episodes/bg15.png';
export default function OurSponsor() {
  const data = [];
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
      <img src={listeners} alt="" width={'1920px'} height={'1086px'} />
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
          Distribution platform
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
          web2 & web3 podcatcher
        </Stack>

        <Stack
          direction={'row'}
          flexWrap="nowrap"
          overflow={'auto'}
          sx={{
            paddingLeft: '212px',
          }}>
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={looncast} alt="" width={'143px'} height={'40px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Looncast is an async and scalable podcasting protocol built on top of Layer1 such as Dfinity, Aptos, Sui
              and Sol. It provides a convenient BaaS application platform and NFTs marketplace, a multi-channel content
              platform, and RSS distribution, saving hosting costs and increasing revenue, such as encrypted ecological
              advertising access and TOKEN economy.
            </Stack>
          </Stack>
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={audius} alt="" width={'143px'} height={'40px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Audius is a decentralized, community-owned and artist-controlled music-sharing protocol. Audius provides a
              blockchain-based alternative to existing streaming platforms to help artists publish and monetize their
              work and distribute it directly to fans.
            </Stack>
          </Stack>
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={overcast} alt="" width={'173px'} height={'50px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Overcast works with the open, standard world of podcasts with public RSS feeds. Simply add your podcast to
              Apple Podcasts and it’ll show up here. It’s not a separate platform, and all downloads go directly to your
              servers. Learn more.
            </Stack>
          </Stack>
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={podcast} alt="" width={'254px'} height={'50px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Apple Podcasts is the best app for finding, following, and listening to millions of the world’s most
              popular podcasts. And you can also easily discover new shows through expert curation.
            </Stack>
          </Stack>{' '}
          <Stack
            sx={{
              minWidth: '581px',
              width: '581px',
              background: ' #FFFFFF',
              border: '3px dashed #DD8BEB',
              padding: '69px 56px ',
              marginRight: '22px',
              whiteSpace: '',
              fontSize: '18px',
              fontFamily: 'ArialMT',
              color: ' #10062F',
            }}>
            <Stack justifyContent={'center'} alignItems="center">
              <img src={cosmos} alt="" width={'143px'} height={'40px'} />
            </Stack>
            <Stack
              direction={'row'}
              alignItems="center"
              marginY={'43px'}
              height="1px"
              width={'100%'}
              bgcolor="#979797"></Stack>
            <Stack>
              Xiaoyuzhoufm is a podcast app that provides a "discovery" "listening" and "community" experience that fits
              Chinese podcast listeners. It allows users to discover their favorite podcasts, send pop-ups and comments,
              and find fellow podcasters with similar tastes.
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
