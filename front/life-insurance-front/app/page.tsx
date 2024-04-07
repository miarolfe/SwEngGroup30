import Head from "next/head";
import Header from "../components/Header";
import { Amplify } from "aws-amplify";
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
        <title>Munich Re Automation Solution Ltd</title>
      </Head>
      <div className="flex justify-center items-center"></div>
    </div>
  );
};

export default Index;
