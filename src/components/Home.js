import Feed from "./Feed";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex w-screen h-fit">
      <section className="min-w-fit sticky top-0">
        <div className="sticky top-10">
          <Navbar />
        </div>
      </section>
      <section className="">
        <div className="h-screen overflow-y-scroll no-scrollbar">
          <Feed />
        </div>
      </section>
    </div>
  );
};

export default Home;
