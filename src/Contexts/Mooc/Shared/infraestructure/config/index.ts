import convict from 'convict';

const moocConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The mongo url',
      format: String,
      default: 'mongodb://localhost:27017/mooc',
      env: 'MONGO_URL'
    }
  }
});

moocConfig.loadFile([__dirname + '/default.json',__dirname + '/' + moocConfig.get('env') + '.json']);

export default moocConfig;
