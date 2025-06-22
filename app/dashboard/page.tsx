// "use client";
const DashboardPage = () => {
  const sayHello = async (params: any) => {
    "use server";
    console.log(params);
  };
  console.log("Hey there");
  return (
    <>
      <h1>This is Dashboard Page</h1>
      <form action={sayHello}>
        <input type="email" name="email" />
        <button>Say Hello</button>
      </form>
    </>
  );
};

export default DashboardPage;
