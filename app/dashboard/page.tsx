// "use client";
const DashboardPage = () => {
  const sayHello = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");

    console.log("params:", name, email);
  };
  console.log("Hey there");
  return (
    <>
      <h1>This is Dashboard Page</h1>
      <form action={sayHello}>
        <input type="text" name="name" className="border"/>
        <input type="email" name="email" className="border"/>
        <button>Say Hello</button>
      </form>
    </>
  );
};

export default DashboardPage;
