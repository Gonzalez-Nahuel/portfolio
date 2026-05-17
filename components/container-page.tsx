interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage = (props: ContainerPageProps) => {
  const { children } = props;

  return (
    <div className="w-full px-4 pb-40 mx-auto mt-40 md:pb-0 md:px-6 max-w-[1400px]">
      {children}
    </div>
  );
};

export default ContainerPage;
