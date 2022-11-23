import fleekStorage from '@fleekhq/fleek-storage-js';
import { CloudUploadOutlined } from '@mui/icons-material';
import { Avatar, Paper, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import React from 'react';

function readFileContents(file) {
  return new Promise(resolve => {
    const reader = new globalThis.FileReader();
    reader.onload = event => resolve(event?.target?.result);
    reader.readAsArrayBuffer(file);
  });
}

function Upload(props) {
  const uploaderRef = React.useRef<any>();
  const [src, setSrc] = React.useState('');
  async function uploadFile() {
    const file = uploaderRef.current.files[0];
    const buffer = await readFileContents(file);

    const uploadedFile = await fleekStorage.upload({
      apiKey: 'tY/tQQtffm+CEqHFHmQXqQ==',
      apiSecret: 'fgjadsHiuaBA5kT1QSlVIcemrp97XZWW9sEBL6YS3+E=',
      key: (Date.now() * Math.random() * 1e4).toString(16),
      // @ts-ignore
      ContentType: file.type,
      data: buffer,
      httpUploadProgressCallback: event => {
        console.log(Math.round((event.loaded / event.total) * 100) + '%');
      },
    });
    //
    setSrc(`${uploadedFile.publicUrl}?hash=${uploadedFile.hash}`);
    console.log('file url', uploadedFile);
  }
  const UploadButton = () => {
    return (
      <IconButton color="primary" size="large" component="label">
        <CloudUploadOutlined fontSize="inherit"></CloudUploadOutlined>
        <input
          type="file"
          name="uploader"
          ref={uploaderRef}
          id="uploader"
          hidden
          accept="image/*"
          onChange={uploadFile}
        />
      </IconButton>
    );
  };
  if (!src) {
    return (
      <Paper
        sx={{
          width: '100px',
          height: '100px',
          textAlign: 'center',
        }}>
        <Stack justifyContent="center" direction="column" spacing={0} alignItems="center" height="100%">
          <UploadButton></UploadButton>
          <Typography variant="body1">upload</Typography>
        </Stack>
      </Paper>
    );
  }
  return (
    <Paper sx={{ position: 'relative' }}>
      <Avatar src={src} sizes="large"></Avatar>
      <UploadButton />
    </Paper>
  );
}

export default Upload;
