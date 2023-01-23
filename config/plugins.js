module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('S3_ACCESS_KEY'),
          secretAccessKey: env('S3_SECRET_KEY'),
          region: env('REGION'),
          endpoint: `s3.${env('REGION')}.${env('S3_DOMAIN')}`,
          params: {
            Bucket: env('S3_BUCKET_NAME'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      }
    },
    ckeditor: true
  });
