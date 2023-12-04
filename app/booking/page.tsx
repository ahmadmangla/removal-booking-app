import BookingForm from "../components/BookingForm";
import PageTitle from "../components/PageTitle";

const Page = () => {
  return (
    <>
      <PageTitle title="Get An Instant Quote" />
      <section className="container mx-auto my-10">
        <BookingForm />
      </section>
    </>
  );
};

export default Page;
