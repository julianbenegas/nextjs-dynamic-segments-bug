export const dynamic = "force-static";

const Page = async ({ params: _params }) => {
  const params = await _params;
  console.log(params);
  return <div>{JSON.stringify(params)}</div>;
};

export const generateMetadata = async ({ params: _params }) => {
  const params = await _params;
  console.log(params);
  return { title: params.slug };
};

export const generateStaticParams = async () => {
  return [];
};

export default Page;
