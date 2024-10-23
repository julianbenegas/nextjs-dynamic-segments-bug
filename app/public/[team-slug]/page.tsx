export const dynamic = "force-static";

interface PageParams {
  "team-slug": string;
}

const Page = async ({ params }: { params: Promise<PageParams> }) => {
  const resolvedParams = await params;
  console.log(resolvedParams);
  return <div>{JSON.stringify(resolvedParams)}</div>;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<PageParams>;
}) => {
  const resolvedParams = await params;
  console.log(resolvedParams);
  return { title: resolvedParams["team-slug"] };
};

export const generateStaticParams = () => {
  return [];
};

export default Page;
