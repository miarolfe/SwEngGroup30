import Head from 'next/head';

const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Munich Re Automation Solution Ltd
        </title>
      </Head>
      <div className="flex justify-center items-center">
        <iframe className="aspect-video" width="100%" src="https://www.youtube-nocookie.com/embed/eRBOgtp0Hac?si=iFswfZ_i415CwqPV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default Index;