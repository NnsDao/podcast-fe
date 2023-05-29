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
        Our Visions
      </Stack>
      <Stack direction={'row'} justifyContent="center" spacing={10}>
        <Stack width={'643px'}>
          <Stack>
            Looncast is an async and scalable podcasting protocol built on top of Layer1 such as Dfinity, Aptos, Sui and
            Sol.
            <br />
            <br />
            and it uses IPFS and AR to store and distribute data.
            <br />
            <br />
            The contract itself is scalable and the portability of WebAssembly technology is used to create an async and
            modular podcasting protocol.
          </Stack>
        </Stack>
        <Stack width={'643px'}>
          <Stack>
            Looncast focuses on infrastructure services, providing a decentralized storage hosting platform for
            creators, it provides a convenient BaaS application platform and NFTs marketplace, a multi-channel content
            platform, and RSS distribution, saving hosting costs and increasing revenue, such as encrypted ecological
            advertising access and Token economy.
            <br /> <br /> web3 era Looncast uses the native nature of podcasting, allowing users to enjoy a more
            authentic experience.
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
