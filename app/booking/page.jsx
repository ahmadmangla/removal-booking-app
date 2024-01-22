import BookingForm from "../components/BookingForm";
import PageTitle from "../components/PageTitle";

const Page = () => {
  return (
    <>
      {/* <PageTitle title="Get An Instant Quote" /> */}
      <section className="container mx-auto my-10 max-w-3xl bg-white rounded-sm shadow-lg">
        <div className="steps-wrap bg-black w-100 py-10 text-white">
          <h1 className="font-medium text-center">Get Instant Quote By filling in the Form</h1>
        </div>
        <BookingForm />
      </section>
    </>
  );
};

export default Page;
