import Wrapper from "@/components/Wrapper";

export default async function Home() {
  const res = await fetch("http://localhost:8080/available-spots", {
    method: "GET",
  });
  const data = await res.json();

  return (
    <>
      <Wrapper data={data} />
    </>
  );
}
