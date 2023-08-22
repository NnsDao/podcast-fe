import { CloudUploadOutlined } from '@mui/icons-material';

import {
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  PutObjectCommand,
  S3,
  UploadPartCommand,
} from '@aws-sdk/client-s3';
import toast from 'react-hot-toast';

import { Avatar, CircularProgress, Typography } from '@mui/material/esm';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import React from 'react';
import { useToggle } from 'usehooks-ts';
import { v4 as uuidv4 } from 'uuid';

function readFileContents(file) {
  return new Promise(resolve => {
    const reader = new globalThis.FileReader();
    reader.onload = event => resolve(event?.target?.result);
    reader.readAsArrayBuffer(file);
  });
}

const REGION_US_EAST_1 = 'us-east-1';
const s3Client = new S3({
  region: REGION_US_EAST_1,
  endpoint: 'https://endpoint.4everland.co',
  credentials: {
    accessKeyId: import.meta.env.__APP__ACCESSKEY,
    secretAccessKey: import.meta.env.__APP__SECRETKEY,
  },
});

const BUCKET_NAME = 'looncast';

const queryEtag = async (key: string) => {
  const params = {
    Bucket: BUCKET_NAME,
    Prefix: key,
  };
  const res = await s3Client.listObjectsV2(params);
  if (!res.Contents?.[0]) {
    throw Error('not exist');
  }
  return res.Contents?.[0].ETag;
};

const createMultipartUpload = async (bucket, key, s3, type) => {
  const params = {
    Bucket: bucket,
    Key: key,
    ContentType: type,
  };
  const res = async () => {
    try {
      const data = await s3.send(new CreateMultipartUploadCommand(params));
      return data;
    } catch (err) {
      //@ts-ignore
      console.log('connect fail', err.message);
      return 1;
    }
  };
  return res();
};

const completeMultipartUpload = async (bucket, key, parts, uploadId, s3) => {
  const params = {
    Bucket: bucket,
    Key: key,
    MultipartUpload: {
      Parts: parts,
    },
    UploadId: uploadId,
  };
  const res = async () => {
    try {
      const data = await s3.send(new CompleteMultipartUploadCommand(params));
      return data;
    } catch (err) {
      //@ts-ignore
      console.log('combine fail: ', err.message);
      return 1;
    }
  };
  return res();
};

//upload part
const uploadPart = async (f, uploadId, key, bucket, num, s3) => {
  const params = {
    Bucket: bucket,
    Key: key,
    PartNumber: num,
    UploadId: uploadId,
    Body: f,
  };
  const res = async () => {
    try {
      const data = await s3.send(new UploadPartCommand(params));
      return data;
    } catch (err) {
      // return alert("There was an error listing your albums: " + err.message);
      //@ts-ignore
      console.log('upload truck fail', err.message);
      return 1;
    }
  };
  return res();
};

function Upload(props) {
  const { src, setSrc } = props;
  const uploaderRef = React.useRef<any>();
  const [progress, setProgress] = React.useState(0);
  const [isUploading, toggleIsUploading] = useToggle(false);

  async function uploadFile() {
    setSrc('');
    toggleIsUploading();
    let form: any = '';
    [...uploaderRef.current.files].map(file => {
      form = file;
    });

    const maxSize = 100 * 1024 * 1024;

    if (form.size > maxSize) {
      toast.error('do not more than 100 MB');
      return;
    }

    // new file upload

    let myuuid = uuidv4();

    console.log('Your UUID is: ' + myuuid);

    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: myuuid,
      Body: form,
    };

    const { $metadata } = await s3Client.send(new PutObjectCommand(uploadParams));

    const code = $metadata.httpStatusCode;
    if (!code || code > 299) {
      throw new Error(`got non-200 code when fetching file from s3: ${code}`);
    }

    const fileURL = 'https://ipfs.looncast.com/' + myuuid;

    const cid = await queryEtag(myuuid);

    console.log(cid, 'debug cid');
    console.log(fileURL);

    toast.success('upload success');

    setSrc(fileURL);
    toggleIsUploading();
    setProgress(0);
  }

  return (
    <IconButton disableRipple color="primary" size="large" component="label" sx={{ width: '108px', height: '108px' }}>
      {src ? (
        <Avatar src={src} sizes="large" sx={{ width: '108px', height: '108px' }}></Avatar>
      ) : isUploading ? (
        <UploadingProgress></UploadingProgress>
      ) : (
        <Avatar sx={{ width: '108px', height: '108px' }}>
          <CloudUploadOutlined sx={{ width: '48px', height: '48px' }}></CloudUploadOutlined>
        </Avatar>
      )}
      <input
        type="file"
        multiple
        name="uploader"
        ref={uploaderRef}
        id="uploader"
        hidden
        accept=""
        onChange={uploadFile}
      />
    </IconButton>
  );

  function UploadingProgress() {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress variant="determinate" value={progress} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Typography variant="caption" component="div" color="text.secondary">{`${progress}%`}</Typography>
        </Box>
      </Box>
    );
  }
}

export default Upload;
