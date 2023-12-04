interface PageTitleType {
  title: string;
}

const PageTitle = ({ title }: PageTitleType) => {
  return <h1 className="p-3 py-20 text-center font-bold text-3xl bg-black text-white "> {title} </h1>;
};

export default PageTitle;
