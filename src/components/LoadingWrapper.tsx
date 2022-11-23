import RefreshIcon from '@mui/icons-material/Refresh';
import LoadingButton from '@mui/lab/LoadingButton';
import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import type { UseQueryResult } from '@tanstack/react-query';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';

let toastID;
export default (WrappedComponent, queryFn: (...arg: any[]) => UseQueryResult) => {
  const hocComponent = ({ ...props }) => {
    const data = queryFn();
    useEffect(() => {
      if (data.isFetching && data.data) {
        if (toastID) {
          toastID = toast.loading('refetching...', { id: toastID });
        } else {
          toastID = toast.loading('refetching...');
        }
      }
      // else if (!data.isFetching) {
      //   toastID && toast.dismiss(toastID);
      // }

      return () => {
        toastID && toast.dismiss(toastID);
        toastID = null;
      };
    }, [data.isFetching]);

    if (data.data) {
      return (
        <WrappedComponent data={data.data} {...props} />
        // <Container maxWidth="xl" sx={{ position: 'relative' }}>
        //   {data.isFetching ? (
        //     <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, textAlign: 'center' }}>
        //       <CircularProgress />
        //     </Box>
        //   ) : null}
        // </Container>
      );
    }
    if (data.isLoading && !data.isFetched) {
      return (
        <Container maxWidth="xl" sx={{ position: 'relative' }}>
          <Stack spacing={2} justifyContent="center" alignItems={'center'}>
            <Typography variant="button" display="block" gutterBottom>
              loading...
            </Typography>
            <PulseLoader color="#2196f3"></PulseLoader>
          </Stack>
        </Container>
      );
    }
    return (
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Stack spacing={2} alignItems="center">
          <Typography variant="caption" display="block" gutterBottom>
            Error Occurs!
          </Typography>
          <LoadingButton
            loading={data.isFetching}
            onClick={() => data.refetch()}
            loadingIndicator="Loading…"
            startIcon={<RefreshIcon />}
            variant="outlined">
            Refresh
          </LoadingButton>
        </Stack>
      </Container>
    );
  };

  return hocComponent;
};
