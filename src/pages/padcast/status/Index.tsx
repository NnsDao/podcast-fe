import { useDeposit } from '@/api/podcast';
import { Principal } from '@dfinity/principal';
import { Button, Card, Divider, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { useReducer } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import List from './list/Index';

export default function Status() {
  const { cid } = useParams();
  const { principal } = useParams();

  console.log(principal, 898989);

  const AddDepositAction = useDeposit(principal as string);

  return (
    <Grid sm={12}>
      <Stack direction={'row'} justifyContent="space-between" alignItems={'center'} className="py-8  items-center">
        <Stack sx={{ fontWeight: '900', fontSize: '22px' }}>Status</Stack>
      </Stack>
      <Divider variant="middle" sx={{ marginY: '30px' }} />

      <AddCycle></AddCycle>

      <Grid container sm={12}>
        <List></List>
      </Grid>
    </Grid>
  );

  function AddCycle(props) {
    console.log(props, 282828);

    function changeForm(key, e) {
      console.log(key, e);
      setFormField({ key, value: e.target.value });
    }

    const [form, setFormField] = useReducer(
      (state, { key, value }) => {
        return {
          ...state,
          [key]: value,
        };
      },
      {
        Guests: '',
      }
    );

    async function AddCycleAction() {
      const toastID = toast.loading('Getting Add cycle...');
      try {
        const { AddCycle } = form;
        console.log(AddCycle, 90909090);
        //@ts-ignore
        const data = await AddDepositAction.mutateAsync({
          arg_0: await Principal.fromText(principal as string),
          arg_1: BigInt(AddCycle),
        });
        console.log(data);
        toast.success('Successfully!');
      } catch (error) {
        console.error('err', error);
        toast.error('Failed create');
      } finally {
        toast.dismiss(toastID);
      }
    }

    return (
      <Grid xs={11} sm={5} md={5}>
        <Card elevation={1} sx={{ height: '100%' }}>
          <Stack p={{ sm: 1, lg: 2 }} spacing={{ sm: 1 }} justifyContent="center" alignItems={'center'}>
            <TextField
              fullWidth
              variant="standard"
              required
              id="AddCycle"
              label="Add cycle"
              key="AddCycle"
              placeholder="Add cycle"
              value={form.AddCycle}
              onChange={e => changeForm('AddCycle', e)}
            />
            <Button onClick={() => AddCycleAction()}>deposit cycle</Button>
          </Stack>
        </Card>
      </Grid>
    );
  }
}
