const waitFor = (sec: number) =>
  new Promise((res, rej) => setTimeout(rej, sec * 1000));
export default async function page() {
  await waitFor(6);
  return <div>This is user page</div>;
}
