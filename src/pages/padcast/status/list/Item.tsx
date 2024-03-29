import { Card, Chip, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/esm/Unstable_Grid2';

export default function Podcast(props) {
  return (
    <Grid container my={{ xl: 2, sm: 2 }} marginRight={'20px'}>
      <Card elevation={1}>
        <Stack
          sx={{ height: '80px', padding: '20px' }}
          spacing={1}
          direction="row"
          justifyContent={'center'}
          alignItems={'center'}>
          <Typography variant="h5" textOverflow="ellipsis" maxWidth={'100%'}>
            {props.text}:
          </Typography>
          {props.text !== 'Controllers' ? (
            <Chip variant="outlined" label={props.value} />
          ) : (
            props.value.map(item => <Chip variant="outlined" label={item.toText()} />)
          )}
        </Stack>
      </Card>
    </Grid>
  );
}

function controllers(props) {
  return props.map(item => <Chip variant="outlined" label={item} />);
}
