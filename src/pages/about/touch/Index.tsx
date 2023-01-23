import { Button } from '@mui/material';
import { Stack } from '@mui/system';

export default function Touch() {
  return (
    <Stack
      bgcolor="#10062F"
      direction={'column'}
      justifyContent="center"
      alignItems={'center'}
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
        }}>
        Get in touch
      </Stack>
      <Stack
        sx={{
          fontSize: '24px;',
          fontFamily: 'Trebuchet-BoldItalic, Trebuchet',
          fontWeight: 'normal',
          textAlign: 'center',
          padding: '33px',
        }}>
        Send your message to us
      </Stack>
      <Stack
        sx={{
          width: '913px',
          height: '1px',
          background: '#DDECFF',
        }}></Stack>
      {/* <TextField
          variant="standard"
          color="success"
          style={{
            border: '1px solid #DDECFF',
            borderRadius: '8px',
            background: '#10062F',
            width: '404px',
            height: '64px',
            fontSize: '20px',
            fontFamily: 'Arial-Black, Arial',
            fontWeight: '900',
            color: '#FFFFFF',
            lineHeight: '64px',
          }}
          InputProps={{
            disableUnderline: true,
            color: 'success',
          }}
        /> */}
      <Stack padding={'60px'}>
        <Stack direction={'row'} spacing={12} paddingBottom="60px">
          <Stack direction={'column'} justifyContent="center" spacing={0}>
            <Stack
              sx={{
                fontSize: '18px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                paddingBottom: '38px',
              }}>
              Full name *
            </Stack>
            <input
              type="text"
              style={{
                border: '1px solid #DDECFF',
                borderRadius: '8px',
                background: '#10062F',
                width: '404px',
                height: '64px',
                fontSize: '20px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: '64px',
                paddingLeft: '20px',
              }}
            />
          </Stack>
          <Stack direction={'column'} justifyContent="center" spacing={0}>
            <Stack
              sx={{
                fontSize: '18px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                paddingBottom: '38px',
              }}>
              Email *
            </Stack>
            <input
              type="text"
              style={{
                border: '1px solid #DDECFF',
                borderRadius: '8px',
                background: '#10062F',
                width: '404px',
                height: '64px',
                fontSize: '20px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: '64px',
                paddingLeft: '20px',
              }}
            />
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={12} paddingBottom="60px">
          <Stack direction={'column'} justifyContent="center" spacing={0}>
            <Stack
              sx={{
                fontSize: '18px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                paddingBottom: '38px',
              }}>
              Phone *
            </Stack>
            <input
              type="text"
              style={{
                border: '1px solid #DDECFF',
                borderRadius: '8px',
                background: '#10062F',
                width: '404px',
                height: '64px',
                fontSize: '20px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: '64px',
                paddingLeft: '20px',
              }}
            />
          </Stack>
          <Stack direction={'column'} justifyContent="center" spacing={0}>
            <Stack
              sx={{
                fontSize: '18px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                paddingBottom: '38px',
              }}>
              Email *
            </Stack>
            <input
              type="text"
              style={{
                border: '1px solid #DDECFF',
                borderRadius: '8px',
                background: '#10062F',
                width: '404px',
                height: '64px',
                fontSize: '20px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: '64px',
                paddingLeft: '20px',
              }}
            />
          </Stack>
        </Stack>
        <Stack>
          <Stack direction={'column'} justifyContent="center" spacing={0}>
            <Stack
              sx={{
                fontSize: '18px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                paddingBottom: '38px',
              }}>
              Message *
            </Stack>
            <textarea
              placeholder="Your message goes here..."
              style={{
                border: '1px solid #DDECFF',
                borderRadius: '8px',
                background: '#10062F',
                width: '908px',
                height: '270px',
                fontSize: '20px',
                fontFamily: 'Arial-Black, Arial',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: '64px',
                paddingLeft: '20px',
              }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          position: 'relative',
          width: '170px',
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
          SUBMITING
        </Button>
      </Stack>
    </Stack>
  );
}
