import Head from 'next/head';
import Header from '../components/Header';
import { Amplify } from 'aws-amplify';
import awsconfig from "../aws-exports";
//import config from '../aws-exports';

// Amplify.configure({
//     Auth: {
//         Cognito: {
//             userPoolClientId: '557612919820',
//             userPoolId: 'eu-west-2_K0AH1uos7',
//             identityPoolId: 'eu-west-2:887b10c4-d131-41b2-83bd-9bfa0f17c4c6'
//         }
//     }
// });
Amplify.configure(awsconfig);


const Index: React.FC = () => {
  return (
    <div>
      <Head>
        <title>
          Munich Re Automation Solution Ltd
        </title>
      </Head>
      <div className="flex justify-center items-center">
        <iframe className="aspect-video" width="100%" src="https://www.youtube-nocookie.com/embed/eRBOgtp0Hac?si=iFswfZ_i415CwqPV" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Index;