import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'

const tron = Reactotron
  .configure({
    name: "MovieSeries"
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: { // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => true }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
  
  tron.clear();
  console.tron = tron;